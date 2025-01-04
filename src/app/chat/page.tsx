import ChatContent from "@/components/common/chat-content";
import ChatInput from "@/components/common/chat-input";
import Sidebar from "@/components/common/sidebar";

export default function Chat() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="w-full flex flex-col justify-between items-center gap-y-8 overflow-y-auto">
        <ChatContent />

        <ChatInput />
      </main>
    </div>
  );
}
