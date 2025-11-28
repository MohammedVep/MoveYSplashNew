/**
 * @vitest-environment jsdom
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ShareDialog } from '../ShareDialog';
import type { ShareablePost } from '../../utils/shareUtils';

const samplePost: ShareablePost = {
  id: 'post-123',
  userId: 'user-99',
  authorName: 'Alex Rivera',
  authorUsername: '@alex',
  authorAvatar: 'https://example.com/avatar.png',
  text: 'Had an amazing day exploring MoveYSplash features 🎉',
};

describe('ShareDialog', () => {
  beforeEach(() => {
    vi.stubGlobal('navigator', {
      share: vi.fn().mockResolvedValue(undefined),
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    vi.spyOn(window, 'open').mockImplementation(() => null);
    vi.spyOn(window, 'getComputedStyle').mockReturnValue({
      getPropertyValue: () => '0px',
    } as CSSStyleDeclaration);

    class MockImage {
      onload: (() => void) | null = null;
      onerror: (() => void) | null = null;
      #src = '';
      addEventListener(event: string, cb: () => void) {
        if (event === 'load') {
          this.onload = cb;
        } else if (event === 'error') {
          this.onerror = cb;
        }
      }
      removeEventListener() {
        // no-op for tests
      }
      set src(value: string) {
        this.#src = value;
        queueMicrotask(() => {
          this.onload?.();
        });
      }
      get src() {
        return this.#src;
      }
    }

    vi.stubGlobal('Image', MockImage as unknown as typeof Image);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
  });

  it('lists share options including MoveYSplash Messages and device share', () => {
    const handleSelect = vi.fn();

    render(
      <ShareDialog
        open
        post={samplePost}
        onClose={() => undefined}
        onSelect={handleSelect}
      />,
    );

    expect(screen.getByText('Share post')).toBeInTheDocument();
    expect(screen.getByText('MoveYSplash Messages')).toBeInTheDocument();
    expect(screen.getByText('Share with device')).toBeInTheDocument();

    fireEvent.click(screen.getByText('MoveYSplash Messages'));
    expect(handleSelect).toHaveBeenCalledWith<'movesplash'>('movesplash');
  });

  it('hides device share option when navigator.share is unavailable', () => {
    vi.stubGlobal('navigator', {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });

    const { queryByText } = render(
      <ShareDialog open post={samplePost} onClose={() => undefined} onSelect={() => undefined} />,
    );

    expect(queryByText('Share with device')).not.toBeInTheDocument();
  });
});
