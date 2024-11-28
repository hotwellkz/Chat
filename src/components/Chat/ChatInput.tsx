import React, { useState } from 'react';
import { Send, Paperclip } from 'lucide-react';

export const ChatInput = () => {
  const [message, setMessage] = useState('');

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Сообщить ChatGPT..."
        className="w-full px-4 py-3 pr-24 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Paperclip className="w-5 h-5 text-gray-400" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Send className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};