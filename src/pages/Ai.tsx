import React, { useState, useEffect, useRef } from "react";
import "../styles/index.css";

const AiPage: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  //add Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input }]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: "Hello how can I help you" },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="ai-container d-flex flex-column ai-font">
      <header className="text-light py-3 text-center menu-font">
        <h2 className="fw-bold">audiophile AI</h2>
      </header>

      {/* Chat Messages Area */}
      <div className="chat-box flex-grow-1 p-3">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "user" ? "user-message" : "ai-message"}`}
          >
            <div className="message-bubble">{msg.text}</div>
          </div>
        ))}
        {/* auto-scroll */}
        <div ref={chatEndRef}></div>
      </div>

      {/* Input Box */}
      <div className="chat-input bg-dark p-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control bg-light text-dark"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button className="btn btn-primary" onClick={handleSend}>
            <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiPage;
