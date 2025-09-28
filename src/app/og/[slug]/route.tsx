import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";
import { getProjectBySlug } from "@/lib/content";

export const runtime = "edge";

const SIZE = {
  width: 1200,
  height: 630,
};

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params;
  const project = getProjectBySlug(slug);

  const title = project?.title ?? "Daniel Cárdenas";
  const summary = project?.summary ?? "Firmware → Backend → AI";
  const badges = project?.badges?.slice(0, 3) ?? ["Firmware", "AI", "Web"];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(135deg, #0f172a, #0d9488)",
          color: "white",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ fontSize: 28, letterSpacing: 8, textTransform: "uppercase", opacity: 0.7 }}>
            Daniel Cárdenas
          </span>
          <h1 style={{ fontSize: 72, lineHeight: 1.1, margin: 0 }}>{title}</h1>
          <p style={{ fontSize: 28, opacity: 0.78, maxWidth: "80%" }}>{summary}</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", gap: 16 }}>
            {badges.map((badge) => (
              <span
                key={badge}
                style={{
                  borderRadius: 999,
                  padding: "12px 20px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  background: "rgba(15, 23, 42, 0.35)",
                  textTransform: "uppercase",
                  letterSpacing: 4,
                  fontSize: 20,
                }}
              >
                {badge}
              </span>
            ))}
          </div>
          <span style={{ fontSize: 24, letterSpacing: 6 }}>danielcardenas.dev</span>
        </div>
      </div>
    ),
    SIZE,
  );
}
