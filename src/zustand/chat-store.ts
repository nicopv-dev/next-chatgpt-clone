import { create } from "zustand";

interface State {
  messages: string[];
  isPending: boolean;
}

interface Actions {
  addMessage: (message: string) => void;
  setIsPending: (isPending: boolean) => void;
}

const chatStore = create<State & Actions>((set) => ({
  messages: [],
  isPending: false,

  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setIsPending: (isPending) => set({ isPending }),
}));

export const useChat = chatStore;
