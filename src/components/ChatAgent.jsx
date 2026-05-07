import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle } from 'lucide-react';

export default function ChatAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey! Welcome to Prashad Cafe. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const quickReplies = [
    "Locations",
    "Hours",
    "Gallery",
    "Instagram"
  ];

  const handleQuickReply = (reply) => {
    setInputValue('');
    const userMessage = {
      id: messages.length + 1,
      text: reply,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      if (reply.includes('Locations')) {
        botResponse = "We have 4 locations:\n\nConstantia - 021 795 0049\nRondebosch - 021 685 7891\nGardens/Kloof - 021 422 0264\nPrashad Express - UCT Campus\n\nNeed directions?";
      } else if (reply.includes('Hours')) {
        botResponse = "Most locations: Mon-Sun 10am-9pm\nPrashad Express: Mon-Fri 8am-5pm\n\nWhich location?";
      } else if (reply.includes('Gallery')) {
        botResponse = "Check out our amazing food & spaces on:\nInstagram: @prashadcafe\nWebsite: prashadcafe.com/gallery\n\nYou'll love it!";
      } else if (reply.includes('Instagram')) {
        botResponse = "Follow us on Instagram @prashadcafe for:\nLatest photos & videos\nLocation pics\nFood specials\n\nhttps://instagram.com/prashadcafe";
      }

      const botMsg = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsLoading(false);
    }, 500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate bot response
    setTimeout(() => {
      const botMsg = {
        id: messages.length + 2,
        text: "Thanks for your message! You can also:\n• Visit our website: prashadcafe.com\n• Call us directly\n• Check our Instagram @prashadcafe\n\nWe'd love to serve you!",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-40 rounded-full p-4 shadow-lg transition-colors"
            style={{ background: 'hsl(35,62%,46%)', color: 'white' }}
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] rounded-2xl shadow-xl flex flex-col"
            style={{ maxHeight: '600px', background: 'white' }}
          >
            {/* Header */}
            <div className="p-4 rounded-t-2xl flex items-center justify-between" style={{ background: 'hsl(35,62%,46%)', color: 'white' }}>
              <div>
                <h3 className="font-heading font-bold text-lg">Prashad Chat</h3>
                <p className="text-sm opacity-80">We're here to help!</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="opacity-80 hover:opacity-100 transition-opacity"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ background: '#f9f7f4' }}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'text-white'
                        : ''
                    }`}
                    style={msg.sender === 'user' ? { background: 'hsl(35,62%,46%)' } : { background: '#e8e4df', color: 'hsl(22,68%,18%)' }}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="px-4 py-2 rounded-lg" style={{ background: '#e8e4df', color: 'hsl(22,68%,18%)' }}>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: 'hsl(22,68%,18%)' }}></span>
                      <span className="w-2 h-2 rounded-full animate-bounce delay-100" style={{ background: 'hsl(22,68%,18%)' }}></span>
                      <span className="w-2 h-2 rounded-full animate-bounce delay-200" style={{ background: 'hsl(22,68%,18%)' }}></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 py-3 space-y-2" style={{ borderTop: '1px solid #e8e4df' }}>
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="w-full text-sm py-2 px-3 rounded-lg transition-colors text-left font-medium"
                    style={{ background: '#e8e4df', color: 'hsl(22,68%,18%)' }}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 flex gap-2" style={{ borderTop: '1px solid #e8e4df' }}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded-lg outline-none focus:ring-2 transition-colors"
                style={{ background: '#e8e4df', color: 'hsl(22,68%,18%)' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-white"
                style={{ background: 'hsl(35,62%,46%)' }}
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
