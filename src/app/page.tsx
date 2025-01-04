import ChatContent from "@/components/common/chat-content";
import ChatInput from "@/components/common/chat-input";
import Sidebar from "@/components/common/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pregunta lo que quieras - Chat",
  description: "Chat web app developed with Next.js, by Nicolas Pereira",
};

export default function Home() {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <main className="w-full h-screen flex flex-col justify-between items-center  ">
        <ChatContent />

        <ChatInput />
      </main>
    </div>
  );
}
