'use client';

import { useEffect, useState, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';

export default function Chats() {
  const [matches, setMatches] = useState<any[]>([]);
  const [selectedChat, setSelectedChat] = useState<any>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const supabase = createClientComponentClient();

  useEffect(() => {
    loadMatches();
    subscribeToMessages();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadMatches = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: matches } = await supabase
      .from('matches')
      .select(`
        id,
        matched_at,
        chats (id),
        user2:profiles!matches_user2_id_fkey (
          id,
          name,
          photos
        )
      `)
      .eq('user1_id', user.id)
      .eq('user1_liked', true)
      .eq('user2_liked', true)
      .order('matched_at', { ascending: false });

    if (matches) {
      setMatches(matches);
      if (matches.length > 0 && !selectedChat) {
        selectChat(matches[0].chats[0].id, matches[0].user2);
      }
    }
  };

  const selectChat = async (chatId: string, otherUser: any) => {
      
      setSelectedChat({ id: chatId, user: otherUser });
      
      const { data: messages } = await supabase
        .from('messages')
        .select('*')
        .eq('chat_id', chatId)
        .order('created_at', { ascending: true });

      if (messages) {
        setMessages(messages);
      }
  };

  const subscribeToMessages = () => {
    const subscription = supabase
      .channel('messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
          if (payload.new.chat_id === selectedChat?.id) {
            setMessages(messages => [...messages, payload.new]);
          }
        }
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  };

  const sendMessage = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!newMessage.trim() || !selectedChat) return;

      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      await supabase
        .from('messages')
        .insert({
          chat_id: selectedChat.id,
          sender_id: user.id,
          content: newMessage.trim()
        });

      setNewMessage(''); 
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Matches sidebar */}
      <div className="w-1/4 bg-white border-r">
        <div className="p-4 border-b">
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            ← Back to Matches
          </Link>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-64px)]">
          {matches.map((match) => (
            <button
              key={match.chats[0].id}
              onClick={() => selectChat(match.chats[0].id, match.user2)}
              className={`w-full p-4 flex items-center space-x-3 hover:bg-gray-50
                ${selectedChat?.id === match.chats[0].id ? 'bg-blue-50' : ''}`}
            >
              <img
                src={match.user2.photos[0]}
                alt={match.user2.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {match.user2.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 border-b bg-white">
              <div className="flex items-center space-x-3">
                <img
                  src={selectedChat.user.photos[0]}
                  alt={selectedChat.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <h2 className="text-lg font-semibold">
                  {selectedChat.user.name}
                </h2>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender_id === selectedChat.user.id
                      ? 'justify-start'
                      : 'justify-end'
                  }`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender_id === selectedChat.user.id
                        ? 'bg-gray-200'
                        : 'bg-blue-500 text-white'
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={sendMessage} className="p-4 border-t bg-white">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
                >
                  Send
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
} 