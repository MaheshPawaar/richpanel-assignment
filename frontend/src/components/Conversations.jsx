import React from 'react'
import { ConversationItem } from './ConversationItem';

export const Conversations = () => {
  const conversations = [
    {
      id: 1,
      participant: 'John Doe',
      timestamp: '2024-02-14T14:57:00Z',
      lastMessage: 'Hey John, what are you up to today?',
    },
    {
      id: 2,
      participant: 'Mike Thompson',
      timestamp: '2024-02-14T18:30:00Z',
      lastMessage: 'Great presentation yesterday, Alice! ',
    },
  ];
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Conversations</h1>
      <ul className="space-y-4 w-80">
        {conversations.map((conversation) => (
          <ConversationItem key={conversation.id} conversation={conversation} />
        ))}
      </ul>

    </div>
  )
}
