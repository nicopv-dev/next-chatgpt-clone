"use client";

import Markdown from "react-markdown";

interface Props {
  text: string;
}

export default function ChatMessage({ text }: Props) {
  return <Markdown>{text}</Markdown>;
}
