import Anthropic from "@anthropic-ai/sdk";
import {
  ContentGenerationRequest,
  ContentGenerationResponse,
} from "@/types/ai";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export class AIService {
  private static buildPrompt(request: ContentGenerationRequest): string {
    return `You are an expert content creator. Create a ${
      request.type
    } post about "${request.topic}"${
      request.keywords
        ? ` incorporating these keywords: ${request.keywords.join(", ")}`
        : ""
    }${request.tone ? ` in a ${request.tone} tone` : ""}${
      request.industry ? ` for the ${request.industry} industry` : ""
    }.
    
    The content should be ${
      request.length || "medium"
    } in length and optimized for engagement.
    
    Format the response in markdown.`;
  }

  static async generateContent(
    request: ContentGenerationRequest
  ): Promise<ContentGenerationResponse> {
    try {
      const prompt = this.buildPrompt(request);

      const completion = await anthropic.messages.create({
        model: "claude-3-opus-20240229",
        max_tokens: 4096,
        temperature: 0.7,
        messages: [{ role: "user", content: prompt }],
      });

      const generatedContent = completion.content[0].value;

      return {
        id: completion.id,
        content: generatedContent,
        metadata: {
          ...request,
          generatedAt: new Date().toISOString(),
        },
      };
    } catch (error) {
      console.error("Error generating content:", error);
      throw new Error("Failed to generate content");
    }
  }
}
