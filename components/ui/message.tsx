import React, { ReactNode } from 'react';
import { marked } from 'marked';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

type MessageProps = {
  children?: ReactNode;
  isUser: boolean;
  message?: string;
};

export default function Message({ children, isUser, message }: MessageProps) {
  const createMarkup = (html: string) => {
    return {
      __html: DOMPurify.sanitize(html),
    };
  };

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
        {message && parse(marked.parse(DOMPurify.sanitize(message)))}
      </div>
    </div>
  );
}