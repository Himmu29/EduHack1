import { NextRequest, NextResponse } from "next/server";

// next.js api routes
export async function GET(request) {
  return NextResponse.json({ msg: "Hello from NextJS API!" });
}

import { CopilotRuntime, OpenAIAdapter } from "@copilotkit/backend";

export async function POST(req: Request): Promise<Response> {
  const copilotKit = new CopilotRuntime();
  return copilotKit.response(req, new OpenAIAdapter({}));
}
