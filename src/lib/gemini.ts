import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is required");
}

const ai = new GoogleGenerativeAI(GEMINI_API_KEY);

export const gemini = ai.getGenerativeModel({
  model: "gemini-1.5-flash",
});
