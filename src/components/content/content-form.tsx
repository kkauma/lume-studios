"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ContentGenerationRequest } from "@/types/ai";

export function ContentForm() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [request, setRequest] = useState<ContentGenerationRequest>({
    type: "blog",
    topic: "",
    keywords: [],
    tone: "",
    length: "medium",
  });

  const handleGenerate = async () => {
    try {
      setIsGenerating(true);
      const response = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(request),
      });

      if (!response.ok) throw new Error("Failed to generate content");

      const data = await response.json();
      // Handle the generated content (e.g., update editor, save draft)
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        <select
          className="p-2 border rounded"
          value={request.type}
          onChange={(e) =>
            setRequest({ ...request, type: e.target.value as any })
          }
        >
          <option value="blog">Blog Post</option>
          <option value="social">Social Media</option>
          <option value="marketing">Marketing Copy</option>
        </select>

        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Topic"
          value={request.topic}
          onChange={(e) => setRequest({ ...request, topic: e.target.value })}
        />

        <input
          type="text"
          className="p-2 border rounded"
          placeholder="Keywords (comma-separated)"
          onChange={(e) =>
            setRequest({
              ...request,
              keywords: e.target.value.split(",").map((k) => k.trim()),
            })
          }
        />

        <select
          className="p-2 border rounded"
          value={request.length}
          onChange={(e) =>
            setRequest({ ...request, length: e.target.value as any })
          }
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </div>

      <Button
        onClick={handleGenerate}
        disabled={isGenerating || !request.topic}
        className="w-full"
      >
        {isGenerating ? "Generating..." : "Generate Content"}
      </Button>
    </div>
  );
}
