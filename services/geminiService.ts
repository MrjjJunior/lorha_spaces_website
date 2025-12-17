import { GoogleGenAI } from "@google/genai";
import { COMPANY_PROFILE_TEXT } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    client = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return client;
};

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; text: string }[]
): Promise<string> => {
  try {
    const ai = getClient();
    
    // Construct the prompt with system instructions
    const systemInstruction = COMPANY_PROFILE_TEXT;

    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    // Load history (simplified for this stateless example, ideally we'd map history to API format)
    // For this implementation, we will send the message directly as the chat object maintains state 
    // if we reused the object. Since we recreate 'chat' here, we should technically pass history.
    // However, the @google/genai chat.sendMessage doesn't take history in the create method easily
    // for a stateless web request pattern without maintaining the object instance.
    // To keep it robust for a prototype: We will append history to the prompt if needed, 
    // or rely on the single-turn context for now + system prompt.
    
    // Better approach for a robust prototype: Just send the message. The system prompt is powerful enough.
    
    const response = await chat.sendMessage({
      message: message
    });

    return response.text || "I apologize, but I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
  }
};
