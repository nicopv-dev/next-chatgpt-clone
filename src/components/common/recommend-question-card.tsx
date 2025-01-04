"use client";

import { sendPrompt } from "@/actions/gemini-actions";
import { useChat } from "@/zustand/chat-store";

interface Props {
  question: string;
}

export default function RecommendQuestionCard({ question }: Props) {
  const { addMessage, setIsPending } = useChat();

  const action = async () => {
    try {
      setIsPending(true);
      addMessage(question);
      const formData = new FormData();
      formData.append("prompt", question);
      const text = await sendPrompt(formData);
      if (text) {
        addMessage(text);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsPending(false);
    }
  };
  return (
    <form
      action={() => {
        action();
      }}
      className="flex justify-center items-center"
    >
      <button
        type="submit"
        className="text-sm px-4 py-1 border border-zinc-200 rounded-full shadow-sm transition-all duration-200 ease-out hover:cursor-pointer hover:shadow-md"
      >
        {question}
      </button>
    </form>
  );
}
