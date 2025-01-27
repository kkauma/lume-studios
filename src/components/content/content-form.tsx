"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { ContentGenerationRequest } from "@/types/ai";

const CONTENT_TYPES = [
  { id: "blog", label: "Blog Post" },
  { id: "social", label: "Social Media" },
  { id: "email", label: "Email" },
  { id: "marketing", label: "Marketing Copy" },
];

export function ContentForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState(CONTENT_TYPES[0].id);
  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("professional");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/content/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          topic,
          keywords: keywords.split(",").map((k) => k.trim()),
          tone,
        } as ContentGenerationRequest),
      });

      if (!response.ok) throw new Error("Failed to generate content");

      const data = await response.json();
      toast({
        title: "Success",
        description: "Content generated successfully!",
        variant: "default",
      });

      // Handle successful generation (e.g., show in editor)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
    >
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Content Type
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-md px-4 py-2 text-white"
        >
          {CONTENT_TYPES.map((type) => (
            <option key={type.id} value={type.id}>
              {type.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Topic
        </label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-md px-4 py-2 text-white"
          placeholder="Enter your topic"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Keywords (comma-separated)
        </label>
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-md px-4 py-2 text-white"
          placeholder="Enter keywords"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Tone
        </label>
        <select
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full bg-gray-700/50 border border-gray-600 rounded-md px-4 py-2 text-white"
        >
          <option value="professional">Professional</option>
          <option value="casual">Casual</option>
          <option value="friendly">Friendly</option>
          <option value="formal">Formal</option>
          <option value="persuasive">Persuasive</option>
        </select>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating...
          </>
        ) : (
          "Generate Content"
        )}
      </Button>
    </form>
  );
}
