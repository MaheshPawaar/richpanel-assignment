import React from 'react';
import { calculateTimeElapsed } from '../utils/timeElapsed';

export const ConversationItem = ({ conversation }) => {
  const { participant, timestamp, lastMessage } = conversation;

  // Calculate time elapsed since timestamp
  const timeElapsed = calculateTimeElapsed(timestamp);

  return (
    <div>
      <li className="flex items-center p-4 space-x-4 bg-gray-100 rounded-lg hover:bg-gray-200">
        <div className="flex flex-col w-full max-w-md">
          <div className="text-sm font-medium">{participant}</div>
          <div className="text-xs text-gray-500">{timeElapsed}</div>
          <div className="text-base">{lastMessage}</div>
        </div>
      </li>
    </div>
  );
};
