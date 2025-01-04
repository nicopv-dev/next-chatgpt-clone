"use server";

import { gemini } from "@/lib/gemini";
import { type GenerativeModel } from "@google/generative-ai";

class GeminiService {
  private model: GenerativeModel;

  constructor() {
    this.model = gemini;
  }

  async sendPrompt(prompt: string) {
    const result = await this.model.generateContent(prompt);
    return result.response;
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new GeminiService();
