export interface ContentGenerationRequest {
  type: "blog" | "social" | "marketing";
  topic: string;
  keywords?: string[];
  tone?: string;
  length?: "short" | "medium" | "long";
  industry?: string;
}

export interface ContentGenerationResponse {
  id: string;
  content: string;
  metadata: {
    type: string;
    topic: string;
    keywords?: string[];
    tone?: string;
    length?: string;
    industry?: string;
    generatedAt: string;
  };
}
