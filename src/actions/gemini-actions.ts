"use server";

import { gemini } from "@/lib/gemini";
import { type Content } from "@google/generative-ai";

export async function sendPrompt(formData: FormData) {
  const prompt = formData.get("prompt") as string;

  const result = await gemini.generateContent(prompt);

  return result.response.text();
}

export async function startChat(history: Content[], message: string) {
  try {
    const chat = await gemini.startChat({
      history,
    });

    const content = await chat.sendMessageStream(message);

    const text = (await content.response).text();

    return text;
  } catch (e) {
    console.log(e);
  }
}
