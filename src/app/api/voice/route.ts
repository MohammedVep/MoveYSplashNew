/* Mohammed Vepari
ID: 5145543
November 14 th 2025
*/


import { randomUUID } from 'node:crypto';
import { promises as fs } from 'node:fs';
import { join } from 'node:path';

export const dynamic = 'force-dynamic';

const CLIP_DIRECTORY = join(process.cwd(), 'public', 'voices');
const DEFAULT_EXTENSION = 'webm';

type UploadPayload = {
  dataUrl?: string;
  mimeType?: string;
  duration?: number;
};

const mimeExtensionMap: Record<string, string> = {
  'audio/webm': 'webm',
  'audio/ogg': 'ogg',
  'audio/mpeg': 'mp3',
  'audio/mp4': 'm4a',
  'audio/aac': 'm4a'
};

const stripMime = (raw?: string): string | undefined => raw?.split(';')[0]?.trim();

const pickExtension = (mime?: string): string => {
  const cleanMime = stripMime(mime);
  if (!cleanMime) {
    return DEFAULT_EXTENSION;
  }
  if (mimeExtensionMap[cleanMime]) {
    return mimeExtensionMap[cleanMime];
  }
  const [, maybeExt] = cleanMime.split('/');
  return maybeExt && maybeExt.length <= 5 ? maybeExt : DEFAULT_EXTENSION;
};

const decodeDataUrl = (dataUrl: string): { buffer: Buffer; mimeType: string } => {
  const [header, payload] = dataUrl.split(',');
  if (!payload) {
    throw new Error('Missing data payload');
  }

  const mimeMatch = header.match(/^data:(.*?)(;base64)?$/);
  const mimeType = stripMime(mimeMatch?.[1]) ?? 'application/octet-stream';
  return {
    buffer: Buffer.from(payload, 'base64'),
    mimeType
  };
};

const persistClip = async (buffer: Buffer, extension: string) => {
  await fs.mkdir(CLIP_DIRECTORY, { recursive: true });
  const filename = `${randomUUID()}.${extension}`;
  await fs.writeFile(join(CLIP_DIRECTORY, filename), buffer);
  return filename;
};

export async function POST(request: Request) {
  try {
    const payload: UploadPayload = await request.json();
    const { dataUrl, mimeType, duration } = payload ?? {};

    if (!dataUrl || typeof dataUrl !== 'string' || dataUrl.length < 20 || !dataUrl.startsWith('data:')) {
      return Response.json({ error: 'Please send a valid base64 data URL.' }, { status: 400 });
    }

    const { buffer, mimeType: detectedMime } = decodeDataUrl(dataUrl);
    const resolvedMime = stripMime(mimeType) ?? detectedMime;
    const extension = pickExtension(resolvedMime);
    const filename = await persistClip(buffer, extension);

    return Response.json({
      id: filename.replace(`.${extension}`, ''),
      url: `/voices/${filename}`,
      mimeType: resolvedMime,
      duration: typeof duration === 'number' ? duration : null
    });
  } catch (error) {
    console.error('Voice upload failed:', error);
    return Response.json(
      {
        error: 'Failed to store voice clip.',
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
