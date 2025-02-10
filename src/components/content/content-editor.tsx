"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ContentEditorProps {
  initialContent?: string;
  onSave: (content: string) => Promise<void>;
}

export function ContentEditor({
  initialContent = "",
  onSave,
}: ContentEditorProps) {
  const [content, setContent] = useState(initialContent);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    try {
      setIsSaving(true);
      await onSave(content);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        className="w-full min-h-[400px] p-4 rounded-md border border-input bg-background"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start writing or generate content..."
      />
      <Button onClick={handleSave} disabled={isSaving}>
        {isSaving ? "Saving..." : "Save Draft"}
      </Button>
    </div>
  );
}
