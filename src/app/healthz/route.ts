import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    status: "ok",
    service: "nusalearn-frontend",
    timestamp: new Date().toISOString(),
  });
}
