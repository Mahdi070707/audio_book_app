import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../styles/index.css";

const AiPage: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const API_URL = "https://api.deepseek.com/chat/completions";
  const MODEL = "deepseek-chat";
  const DEEPSEEK_API_KEY = "sk-8be96cc5cd4c41c19aaecc522601c55d";

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const SYSTEM_ROLE =
      "You are a helpful audiobook assistant. Please assist the user in finding books, suggesting audiobooks, and answering any questions about audiobooks. Also, for any questions unrelated to audiobooks say 'Sorry, that is out of my reach.'";

    try {
      const response = await axios.post(
        API_URL,
        {
          model: MODEL,
          messages: [
            { role: "system", content: SYSTEM_ROLE },
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    } catch (error) {
      console.error("Error communicating with DeepSeek API:", error);
      setMessages((prev) => [...prev, { sender: "ai", text: "Sorry, something went wrong." }]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="ai-container d-flex flex-column ai-font">
      <header className="text-light py-3 text-center menu-font">
        <h2 className="fw-bold">Audiophile AI</h2>
      </header>

      <div className="chat-box flex-grow-1 p-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user-message" : "ai-message"}`}
          >
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      <div className="chat-input bg-dark p-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            backgroundColor: "var(--cream)",
            color: "black",
            border: "1px solid var(--charcoal)",
            borderRadius: "20px",
            padding: "12px",
          }}
        />
      </div>
    </div>
  );
};

export default AiPage;
