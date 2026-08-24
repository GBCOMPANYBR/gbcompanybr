import { ImageResponse } from "next/og";
import { SITE_TAGLINE } from "@/lib/config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A17",
          backgroundImage:
            "linear-gradient(135deg, rgba(139,92,246,0.35) 0%, rgba(79,107,255,0.18) 45%, rgba(10,10,23,0) 75%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 88,
              height: 88,
              borderRadius: 20,
              backgroundImage:
                "linear-gradient(110deg, #8B5CF6 0%, #4F6BFF 55%, #3FD0E0 100%)",
            }}
          />
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, color: "#F5F4FB" }}>
            GB Company
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3FD0E0",
          }}
        >
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  );
}
