/**
 * Chat modal component with simulated AI assistant
 */
import { useState, useEffect, useRef } from 'react';
import { X, Send, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BOT_RESPONSES: Record<string, string[]> = {
  greeting: [
    "Hi! I'm here to help you learn about Hello Telle. What questions do you have?",
    "Hello! Thanks for your interest in Hello Telle. How can I assist you today?",
  ],
  features: [
    "Hello Telle calls your loved ones regularly, has natural conversations, and sends you beautiful summaries with insights about their wellbeing. We detect mood changes and alert you to any concerns with care.",
    "Great question! Hello Telle works through simple phone calls - no apps or tech needed on their end. After each call, you receive a summary with conversation highlights, mood insights, and meaningful moments.",
  ],
  pricing: [
    "We're currently in our waitlist phase! You can secure your spot for just $5 (fully refundable). Once we launch in Spring 2025, alpha members get exclusive founder pricing.",
    "The waitlist deposit is $5 and 100% refundable. This secures your priority access when we launch. We'll announce full pricing details to waitlist members first!",
  ],
  seniors: [
    "Perfect for seniors! They just need a phone - that's it. No apps, no passwords, no complicated technology. Hello Telle calls them like a friend would.",
    "Your loved one doesn't need any tech at all! Hello Telle makes regular phone calls to their existing phone number. It's as simple as answering the phone.",
  ],
  magic: [
    "Hello Telle listens, learns, and remembers what matters most. Every conversation feels warm, personal, and genuinely caring. It's almost magical!",
    "The magic is in how Hello Telle brings you closer to your loved ones. It's an intelligent companion that makes connection effortless.",
  ],
  demo: [
    "I'd love to show you! Imagine Hello Telle calling your mom: 'Hi Helen, how are you today?' She responds naturally, and Hello Telle asks about her day, listens to stories, and notices if something seems off.",
    "Here's a real example: Hello Telle might ask 'Did you enjoy your morning walk today?' and engage in warm conversation about the weather, her garden, or whatever she wants to talk about. It feels genuinely human!",
  ],
  help: [
    "I can help you learn about Hello Telle's features, pricing, how it works for seniors, or give you a demo. What interests you most?",
    "Feel free to ask me anything! Common questions are about how Hello Telle works, what it costs, whether it's easy for seniors, or what makes it so special.",
  ],
  default: [
    "That's a great question! For detailed information, I'd recommend checking our FAQ page or joining our waitlist to get updates directly from our team.",
    "I want to make sure you get the best answer. You can explore our Features page for more details, or email us at hello@hellotelle.com with specific questions!",
  ],
};

export function ChatModal({ isOpen, onClose }: ChatModalProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you learn about Hello Telle. What questions do you have?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();

    if (msg.match(/^(hello|hi|hey|greetings)/)) {
      return BOT_RESPONSES.greeting[Math.floor(Math.random() * BOT_RESPONSES.greeting.length)];
    }
    if (msg.match(/feature|what does|how does it work|what is|hello telle/)) {
      return BOT_RESPONSES.features[Math.floor(Math.random() * BOT_RESPONSES.features.length)];
    }
    if (msg.match(/price|cost|pricing|how much|payment|waitlist/)) {
      return BOT_RESPONSES.pricing[Math.floor(Math.random() * BOT_RESPONSES.pricing.length)];
    }
    if (msg.match(/senior|elderly|grandma|grandpa|mom|dad|parent|tech|app|phone/)) {
      return BOT_RESPONSES.seniors[Math.floor(Math.random() * BOT_RESPONSES.seniors.length)];
    }
    if (msg.match(/magic|special|unique|different|intelligent/)) {
      return BOT_RESPONSES.magic[Math.floor(Math.random() * BOT_RESPONSES.magic.length)];
    }
    if (msg.match(/demo|example|show me|simulation/)) {
      return BOT_RESPONSES.demo[Math.floor(Math.random() * BOT_RESPONSES.demo.length)];
    }
    if (msg.match(/help|assist|support/)) {
      return BOT_RESPONSES.help[Math.floor(Math.random() * BOT_RESPONSES.help.length)];
    }

    return BOT_RESPONSES.default[Math.floor(Math.random() * BOT_RESPONSES.default.length)];
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl h-[600px] max-h-[90vh] flex flex-col animate-fade-in">
        <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-200 bg-gradient-to-r from-cornflower-500 to-cornflower-600 text-white rounded-t-2xl">
          <div>
            <h3 className="text-xl font-bold">Chat with Hello Telle Support</h3>
            <p className="text-sm text-cornflower-50">Simulated AI Assistant</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gradient-to-br from-slate-50 to-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.sender === 'bot' && (
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cornflower-500 to-cornflower-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  T
                </div>
              )}
              <div
                className={`max-w-[80%] md:max-w-[70%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-cornflower-500 to-cornflower-600 text-white rounded-tr-none'
                    : 'bg-white shadow-md text-slate-800 rounded-tl-none'
                }`}
              >
                <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
              </div>
              {message.sender === 'user' && (
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-butter-400 to-butter-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  Y
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cornflower-500 to-cornflower-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                T
              </div>
              <div className="bg-white shadow-md rounded-2xl rounded-tl-none px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 md:p-6 border-t border-slate-200 bg-white rounded-b-2xl">
          <div className="flex gap-2 md:gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-cornflower-500 focus:ring-2 focus:ring-cornflower-200 outline-none transition-all text-base"
              disabled={isTyping}
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="px-4 md:px-6 min-w-[44px]"
            >
              {isTyping ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">
            This is a simulated demo. For real support, email hello@hellotelle.com
          </p>
        </div>
      </div>
    </div>
  );
}

