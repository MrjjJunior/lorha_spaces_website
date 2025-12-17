import React from 'react';
import ChatWidget from '../components/ChatWidget';
import { Bot, Info } from 'lucide-react';

// For the full page chat route, we can just reuse the logic or show a dedicated UI.
// To save complexity and keep the "ChatWidget" reusable, I'll instruct the user to use the widget here 
// or create a focused centered layout.

const ChatPage: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="w-20 h-20 bg-teal-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
            <Bot className="w-10 h-10 text-white" />
        </div>
        
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Lorha Virtual Assistant</h1>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Access our entire knowledge base instantly. Ask about our past projects, engineering capabilities, or community training programs.
            </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Info className="w-4 h-4 text-teal-500" />
                Example Queries
            </h3>
            <ul className="space-y-3 text-sm text-gray-600">
                <li className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition-colors">
                    "What services do you offer in Civil Engineering?"
                </li>
                <li className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition-colors">
                    "Tell me about the Esethu Skills Development program."
                </li>
                <li className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-teal-50 hover:text-teal-700 transition-colors">
                    "Are you a BEE compliant company?"
                </li>
            </ul>
        </div>

        <p className="text-sm text-gray-500">
            Click the chat icon in the bottom right corner to start the conversation.
        </p>
      </div>
    </div>
  );
};

export default ChatPage;