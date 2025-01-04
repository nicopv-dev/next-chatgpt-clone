"use client";

import { sendPrompt } from "@/actions/gemini-actions";
import { useChat } from "@/zustand/chat-store";
import { SendIcon } from "lucide-react";
import { useState } from "react";

export default function ChatInput() {
  const { addMessage, setIsPending } = useChat();
  const [prompt, setPrompt] = useState("");
  const maxPromptLength = 10;

  const action = async () => {
    try {
      // const message = formData.get("prompt") as string;
      addMessage(prompt);
      const formData = new FormData();
      formData.append("prompt", prompt);
      const text = await sendPrompt(formData);
      if (text) {
        addMessage(text);
        setPrompt("");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  };

  const handleChangePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.length <= maxPromptLength) {
      setPrompt(value);
    }
  };

  return (
    <div className="w-full flex flex-col fixed bottom-0 left-20">
      <div className="h-20 w-full input-gradient" />

      <div className="w-full bg-white flex items-center justify-center pb-4">
        <form
          action={() => {
            setIsPending(true);
            action();
          }}
          className="rounded-xl bg-zinc-100 max-w-screen-md w-full flex flex-col items-end border border-zinc-200"
        >
          <textarea
            className="w-full text-sm h-24 p-4 bg-transparent rounded-lg focus:outline-none resize-none"
            placeholder="Escribe tu mensaje..."
            value={prompt}
            onChange={handleChangePrompt}
          ></textarea>
          <div className="flex items-center gap-x-2">
            <span className="text-sm text-zinc-500">
              {prompt.length}/{maxPromptLength}
            </span>
            <button className="p-2">
              <SendIcon size={20} className="text-zinc-500" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
