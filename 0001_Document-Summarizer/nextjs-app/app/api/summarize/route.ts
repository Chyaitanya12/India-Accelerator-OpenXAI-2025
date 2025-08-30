import { NextRequest, NextResponse } from "next/server";
import ollama from "ollama";

const model = process.env.OLLAMA_MODEL || "llama3";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { text } = data;

    if (!text || text.trim().length === 0) {
      return NextResponse.json(
        { error: "Text content is required" },
        { status: 400 }
      );
    }

    console.log("Received text for summarization:", text.substring(0, 100));

    const response = await ollama.chat({
      model,
      messages: [
        { 
          role: "system", 
          content: "You are a helpful assistant that summarizes text documents. Provide a concise, point-wise summary that captures the main points and key information efficiently and clearly."
        },
        { 
          role: "user", 
          content: `Please summarize the following text in bullet points:\n\n${text}`
        }
      ],
    });

    console.log("Summary generated successfully");

    return NextResponse.json({ summary: response.message.content });
  } catch (error: any) {
    console.error("Summarization error:", error);
    return NextResponse.json(
      { error: error.message ?? "Failed to summarize text" },
      { status: 500 }
    );
  }
}
