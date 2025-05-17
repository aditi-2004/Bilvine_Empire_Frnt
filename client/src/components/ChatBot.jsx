

import React, { useEffect, useRef, useState } from 'react';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);
  const conversationHistoryRef = useRef([]);

  // OpenRouter API Key
  const API_KEY = "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";

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = 'Hello';
    if (hour < 12) greeting = 'Good Morning 🌅';
    else if (hour < 17) greeting = 'Good Afternoon ☀️';
    else greeting = 'Good Evening 🌇';

    const initialMessage = `${greeting}! I'm your FitLife Assistant. How can I help you today?`;
    
    // Add the initial bot message
    setMessages(prev => [
      ...prev,
      { from: 'bot', text: initialMessage, time: new Date().toLocaleTimeString() }
    ]);
    
    // Also add to conversation history
    conversationHistoryRef.current = [
      { role: "assistant", content: initialMessage }
    ];
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestions = [
    'Workout Plans',
    'Yoga Routines',
    'Diet Plans',
    'Other Problems'
  ];

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input.trim();
    const userMsg = { from: 'user', text: userMessage, time: new Date().toLocaleTimeString() };
    
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setShowSuggestions(false);
    setIsTyping(true);

    // Add user message to conversation history
    conversationHistoryRef.current.push({ role: "user", content: userMessage });

    try {
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
          'HTTP-Referer': window.location.origin, // Required for OpenRouter
          'X-Title': 'FitLife Assistant' // Optional - the name of your app
        },
        body: JSON.stringify({
          model: "openai/gpt-3.5-turbo", // You can change this to any model OpenRouter supports
          messages: [
            // System message to define the assistant's behavior
            {
              role: "system",
              content: "You are a helpful fitness and wellness assistant named FitLife Assistant. Provide concise, friendly responses about workouts, yoga, nutrition, diet plans, and general wellness. Keep responses under 150 words and maintain a positive, motivational tone."
            },
            // Include the conversation history
            ...conversationHistoryRef.current
          ]
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || 'Error from OpenRouter API');
      }

      const botReply = data.choices[0].message.content;
      
      // Add bot reply to conversation history
      conversationHistoryRef.current.push({ role: "assistant", content: botReply });

      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { from: 'bot', text: botReply, time: new Date().toLocaleTimeString() }
        ]);
        setIsTyping(false);
      }, 1000); // Simulate typing delay
      
    } catch (err) {
      console.error('OpenRouter API Error:', err);
      
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { 
            from: 'bot', 
            text: 'Sorry, I encountered an issue connecting to the service. Please try again later.', 
            time: new Date().toLocaleTimeString() 
          },
          { 
            from: 'bot', 
            text: 'Need more help? ', 
            button: true, 
            time: new Date().toLocaleTimeString() 
          }
        ]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const handleSuggestionClick = (text) => {
    setInput(text);
    // We call handleSend() with a slight delay to ensure input is set
    setTimeout(() => handleSend(), 10);
  };

  return (
    <div className="chatbot-container">
      <div className="chat-header">🧘 FitLife Assistant</div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg ${msg.from === 'user' ? 'user-msg' : 'bot-msg'}`}>
            {msg.text}
            {msg.button && (
              <a
                className="contact-button"
                href="mailto:support@fitlife.com?subject=Help&body=Please describe your issue and attach screenshots."
              >
                📩 Contact Us
              </a>
            )}
            <div style={{ fontSize: '10px', color: '#ccc', marginTop: '5px' }}>{msg.time}</div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator">
            <span></span><span></span><span></span> Typing...
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {showSuggestions && (
        <div className="suggestions">
          {suggestions.map((s, idx) => (
            <button key={idx} onClick={() => handleSuggestionClick(s)}>{s}</button>
          ))}
        </div>
      )}

      <div className="chat-input">
        <input
          style={{ color: 'White' }}
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;