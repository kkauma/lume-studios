import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { AIService } from "@/lib/claude";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { ContentGenerationRequest } from "@/types/ai";
import { rateLimit } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Rate limiting
    const identifier = session.user.id;
    const { success } = await rateLimit(identifier);
    if (!success) {
      return new NextResponse("Too Many Requests", { status: 429 });
    }

    const json = (await req.json()) as ContentGenerationRequest;

    // Validate request
    if (!json.type || !json.topic) {
      return new NextResponse("Invalid request", { status: 400 });
    }

    // Generate content
    const result = await AIService.generateContent(json);

    // Save to database
    const content = await prisma.content.create({
      data: {
        title: json.topic,
        content: result.content,
        type: json.type,
        status: "draft",
        metadata: result.metadata,
        userId: session.user.id,
      },
    });

    return NextResponse.json(content);
  } catch (error) {
    console.error("[CONTENT_GENERATION_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
