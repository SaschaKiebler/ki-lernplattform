'use client'
import { Button } from "@/components/ui/button";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Message from "./ui/message";

import { useChat } from "ai/react"
import { useEffect, useRef, useState } from "react";

import { BotIcon, SendIcon, PlusIcon } from "@/components/Icons";


export function ChatUI() {
  const [key, setKey] = useState(0);

  // Force re-mount the component by changing the key
  function handleNewConversation() {
    setKey(prevKey => prevKey + 1);
  }

  return (
    <div className="flex h-full">
      <div className="hidden bg-gray-100 dark:bg-gray-800 w-64 border-r border-gray-200 dark:border-gray-700 p-4 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">Recent Chats</h2>
          <Button size="icon" variant="ghost">
            <PlusIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </Button>
        </div>
        <div className="space-y-2">
          <ChatItem name="John Doe" message="Hello, how can I help you?" />
          <ChatItem name="Jane Smith" message="I have a question about machine learning." />
          <ChatItem name="Michael Johnson" message="Can you explain neural networks to me?" />
          <ChatItem name="Emily Davis" message="I'm interested in learning about machine learning algorithms." />
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <header className="flex items-center justify-between bg-gray-900 px-4 py-3 text-white shadow">
          <div className="flex items-center gap-2">
            <BotIcon className="h-6 w-6" />
            <h1 className="text-lg font-medium">AI Tutor</h1>
          </div>
          <div>
            <button className="p-2 border-2 border-blue-500 rounded-lg hover:bg-blue-500" onClick={handleNewConversation}>
              neue Konversation 
            </button>
          </div>
        </header>
        <ChatWindow key={key} />
      </div>
    </div>
  );
}

function ChatWindow() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
    onError: (e) => {
      console.log(e)
    }
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the bottom whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <main className="flex-1 overflow-auto p-4">
        <div className="space-y-4">
          <Message isUser={false} message="Hi! Wie kann ich dir Heute helfen?"></Message>
          
          {messages.map((m, index) => (
            <div key={index}>
              {m.role === 'user' ? (
                <Message key={m.id} isUser={true} message={m.content}></Message>
              ) : (
                <Message key={m.id} isUser={false} message={m.content}></Message>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </main>
      <div className="flex items-center justify-center bg-gray-100 px-4 py-3 dark:bg-gray-800">
        <form onSubmit={handleSubmit} className="flex w-full max-w-3xl mx-auto items-center">
          <Input className="flex-1 min-h-[50px]" placeholder="Type your question here..." type="text" value={input} onChange={handleInputChange} />
          <Button className="ml-2" type="submit">
            <SendIcon className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </>
  );
}

function ChatItem({ name, message }: any) {
  return (
    <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-2">
      <Avatar className="h-10 w-10">
        <AvatarImage alt={`${name} Avatar`} src="/placeholder-avatar.jpg" />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium text-gray-900 dark:text-gray-50">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{message}</p>
      </div>
    </div>
  );
}

