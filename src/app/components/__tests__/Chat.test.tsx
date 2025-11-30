
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ChatInterface } from '../ChatInterface';
import { UserProvider } from '../../utils/userContext';

// Mock Ably
const mockSend = vi.fn().mockResolvedValue(undefined);
const mockDelete = vi.fn().mockResolvedValue(undefined);
const mockHistory = vi.fn().mockResolvedValue({ items: [] });
const mockSubscribe = vi.fn(() => ({ unsubscribe: vi.fn() }));

const mockRoom = {
  attach: vi.fn().mockResolvedValue(undefined),
  detach: vi.fn().mockResolvedValue(undefined),
  onStatusChange: vi.fn(() => ({ off: vi.fn() })),
  messages: {
    history: mockHistory,
    subscribe: mockSubscribe,
    send: mockSend,
    delete: mockDelete,
  },
  release: vi.fn().mockResolvedValue(undefined),
};

const mockGet = vi.fn().mockResolvedValue(mockRoom);

const mockChatClient = {
  connection: {
    onStatusChange: vi.fn(() => ({ off: vi.fn() })),
  },
  rooms: {
    get: mockGet,
  },
};

vi.mock('ably', async (importOriginal) => {
    const original = await importOriginal();
    return {
        ...original,
        Realtime: vi.fn(() => ({
            close: vi.fn(),
            connection: {
                on: vi.fn(() => ({ off: vi.fn() })),
            },
            agents: {},
        })),
        Chat: {
            ChatClient: vi.fn(() => mockChatClient),
        },
    };
});


global.fetch = vi.fn();

const mockUser = {
  id: 'user1',
  name: 'Current User',
  username: 'currentuser',
  avatar: 'https://example.com/avatar1.png',
  ablyClientId: 'user1-client',
};

const mockAllUsers = new Map([
  ['user1', { ...mockUser, friendIds: ['user2'] }],
  ['user2', {
    id: 'user2',
    name: 'Friend User',
    username: 'frienduser',
    avatar: 'https://example.com/avatar2.png',
    ablyClientId: 'user2-client',
    friendIds: ['user1'],
  }],
]);

const renderChatInterface = () => {
  return render(
    <UserProvider initialUser={mockUser} initialAllUsers={mockAllUsers}>
      <ChatInterface forceTestMode />
    </UserProvider>
  );
};

describe('ChatInterface', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    global.fetch.mockResolvedValue({
      ok: true,
      json: vi.fn().mockResolvedValue({}),
    });
  });

  it('renders the chat interface', async () => {
    renderChatInterface();
    expect(await screen.findByText('Messages')).toBeInTheDocument();
    expect(await screen.findByPlaceholderText('Type a message...')).toBeInTheDocument();
  });

  it('sends a message when the send button is clicked', async () => {
    renderChatInterface();
    const input = await screen.findByPlaceholderText('Type a message...');
    const sendButton = await screen.findByRole('button', { name: /send/i });

    fireEvent.change(input, { target: { value: 'Hello world' } });
    fireEvent.click(sendButton);

    const sentMessages = await screen.findAllByText('Hello world');
    expect(sentMessages.length).toBeGreaterThan(0);

    expect(input.value).toBe('');
  });

  it('creates a new chat', async () => {
    global.fetch.mockResolvedValue({
        ok: true,
        json: vi.fn().mockResolvedValue({
            chat: {
                id: 'new-chat-id',
                name: 'New Chat',
                members: ['user1-client', 'user2-client'],
                isGroup: false,
                createdBy: 'user1',
                createdAt: new Date().toISOString(),
                lastMessage: '',
                lastMessageTime: new Date().toISOString(),
                avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=new-chat-id',
            },
            success: true,
        }),
    });

    renderChatInterface();

    fireEvent.click(await screen.findByRole('button', { name: /plus/i }));

    await waitFor(() => {
        expect(screen.getByText('Pick friends registered on MoveY Splash')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Search registered friends'));

    await waitFor(() => {
        expect(screen.getByText('Friend User')).toBeInTheDocument();
    });
    
    fireEvent.click(screen.getByText('Friend User'));
    
    await waitFor(() => {
        expect(screen.getByText('Selected 1 friend')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('button', { name: 'Create' }));

    await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith(
            expect.stringContaining('/chats'),
            expect.objectContaining({
                method: 'POST',
                body: JSON.stringify({
                    name: 'Friend User',
                    members: ['user1-client', 'user2-client'],
                    isGroup: false,
                    createdBy: 'user1',
                }),
            })
        );
    });

    await waitFor(() => {
        expect(screen.getAllByText('New Chat').length).toBeGreaterThan(0);
    });
  });
});
