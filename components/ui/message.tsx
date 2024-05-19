import React, { ReactNode } from 'react';

type MessageProps = {
  children: ReactNode;
  isUser: boolean;
};

export default function Message({ children, isUser }: MessageProps) {
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-lg p-3 ${
          isUser
            ? "rounded-br-none bg-blue-500 text-white"
            : "rounded-bl-none bg-gray-300 text-gray-900 dark:bg-gray-800 dark:text-gray-50"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
