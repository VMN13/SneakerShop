import React, {useState} from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "../logic/chatbotConfig";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

export default function Chat() {
  return (
    <div className="chatbot">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}/>
    </div>
  );
};
