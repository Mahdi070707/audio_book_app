import "dotenv/config";
import axios from "axios";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;
const API_URL = "https://api.deepseek.com/chat/completions"; // Adjust if needed
const MODEL = "deepseek-chat";

async function chatWithAI(userMessage) {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: MODEL, // Adding the model field here
        messages: [{ role: "user", content: userMessage }],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error communicating with DeepSeek API:", error);
    return "Sorry, something went wrong.";
  }
}

function startChat() {
  rl.question("You: ", async (userInput) => {
    if (userInput.toLowerCase() === "exit") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    const botResponse = await chatWithAI(userInput);
    console.log("Bot:", botResponse);

    startChat();
  });
}

console.log("Chatbot is running. Type 'exit' to quit.");
startChat();


