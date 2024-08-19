import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "MyBot",
  initialMessages: [createChatBotMessage(`مرحبًا! كيف يمكنني مساعدتك اليوم؟`)],
};

export default config;
