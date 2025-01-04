"use client";

import { useChat } from "@/zustand/chat-store";
import { BsRobot } from "react-icons/bs";
import RevealText from "../animate/reveal-text";
import Loader from "./loader";
import { recommendQuestions } from "@/utils/data";
import RecommendQuestionCard from "./recommend-question-card";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatContent() {
  const { messages, isPending } = useChat();

  if (messages.length === 0)
    return (
      <div className="flex flex-col justify-center items-center gap-y-4 max-w-screen-sm grow overflow-y-auto">
        <span className="p-4 border border-zinc-200 shadow-lg rounded-xl">
          <BsRobot size={30} />
        </span>
        <h3 className="text-4xl font-semibold text-center bg-gradient-to-r from-black via-zinc-800 to-zinc-500 bg-clip-text text-transparent">
          Habla conmigo
        </h3>
        <p className="text-center text-sm text-zinc-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          veniam quis distinctio in iste tempora deserunt quae modi fugit
          consequatur ut mollitia, enim nulla saepe vitae numquam itaque quam
          facere.
        </p>
        <span className="text-xs">Pregunta sobre...</span>
        <div className="flex justify-center flex-wrap gap-2">
          {recommendQuestions.map((question, index) => (
            <RecommendQuestionCard key={index} question={question} />
          ))}
        </div>
      </div>
    );

  return (
    <div className="w-full flex flex-col items-center gap-y-4 py-10 grow ">
      <AnimatePresence>
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <RevealText text={message} />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* loading */}
      {isPending && <Loader />}

      <div className="w-full h-40" />
    </div>
  );
}
