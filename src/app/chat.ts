import * as Ably from "ably";
import { ChatClient, OrderBy } from "@ably/chat";
import type {
  ConnectionStatusChange,
  ChatMessageEvent,
  RoomStatusChange,
} from "@ably/chat";

const DEFAULT_ROOM = "getting-started";
const FALLBACK_KEY = "TWe31g.j0F01A:-j8adkUcs-AeusvKPMgSFCJKlMb8zCh1pGbt5Zo3CxI";

const [, , clientArg, messageArg, roomArg] = process.argv;
const clientId = clientArg ?? process.env.ABLY_CLIENT_ID ?? "ably-script";
const messageText = messageArg ?? `Hello from ${clientId}`;
const roomName = roomArg ?? DEFAULT_ROOM;
const senderName = process.env.ABLY_SENDER_NAME ?? clientId;
const senderAvatar = process.env.ABLY_SENDER_AVATAR;

async function main() {
  const ablyKey =
    process.env.ABLY_KEY ??
    process.env.NEXT_PUBLIC_ABLY_KEY ??
    process.env.ABLY_API_KEY ??
    FALLBACK_KEY;

  if (!ablyKey) {
    throw new Error("No Ably API key provided. Set ABLY_KEY or NEXT_PUBLIC_ABLY_KEY.");
  }

  const ablyClient = new Ably.Realtime({
    key: ablyKey,
    clientId,
  });

  const chatClient = new ChatClient(ablyClient);
  const { off: unsubscribeConnectionStatus } =
    chatClient.connection.onStatusChange((change: ConnectionStatusChange) => {
      console.log(`[${clientId}] Connection state:`, change.current);
    });

  const room = await chatClient.rooms.get(roomName);
  const { off: unsubscribeRoomStatus } = room.onStatusChange((change: RoomStatusChange) => {
    console.log(`[${clientId}] Room state:`, change.current);
  });

  const { unsubscribe: messageUnsubscribe } = room.messages.subscribe(
    (event: ChatMessageEvent) => {
      console.log(
        `[${clientId}] Received -> ${event.message.clientId}: ${event.message.text}`,
      );
    },
  );

  await room.attach();

  const history = await room.messages.history({
    orderBy: OrderBy.NewestFirst,
    limit: 5,
  });

  const historyItems = [...history.items].reverse();
  if (historyItems.length > 0) {
    console.log(`[${clientId}] Recent history:`);
    historyItems.forEach((item) => {
      console.log(
        `  ${item.timestamp.toISOString()} ${item.clientId}: ${item.text}`,
      );
    });
  } else {
    console.log(`[${clientId}] No recent messages in room ${roomName}.`);
  }

  console.log(`[${clientId}] Sending: ${messageText}`);
  await room.messages.send({
    text: messageText,
    metadata: {
      sender: {
        id: clientId,
        name: senderName,
        avatar: senderAvatar,
      },
    },
  });

  setTimeout(async () => {
    await chatClient.rooms.release(roomName);
    messageUnsubscribe();
    unsubscribeConnectionStatus();
    unsubscribeRoomStatus();
    await ablyClient.close();
    console.log(`[${clientId}] Disconnected.`);
  }, 4000);
}

main().catch((error) => {
  console.error(`[${clientId}] Script failed:`, error);
  process.exitCode = 1;
});
