"use client";

import { motion } from "framer-motion";
import ChatMessage from "../common/chat-message";

interface Props {
  text: string;
}

export default function RevealText({ text }: Props) {
  const words = text.split(" ");

  return (
    <motion.div
      className="max-w-screen-md p-4 border border-zinc-200 shadow-lg rounded-xl text-sm overflow-hidden flex flex-col items-start space-y-4" // Added space-y-4 for spacing between elements
      initial="hidden"
      whileInView="reveal"
      transition={{ staggerChildren: 0.1 }} // Increased staggerChildren value
    >
      <ChatMessage text={text} />
    </motion.div>
  );
}
