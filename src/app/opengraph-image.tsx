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
          <svg width={96} height={80} viewBox="20 14 110 92" fill="none">
            <defs>
              <linearGradient
                id="gbGradOg"
                x1="10"
                y1="10"
                x2="140"
                y2="110"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="55%" stopColor="#4F6BFF" />
                <stop offset="100%" stopColor="#3FD0E0" />
              </linearGradient>
            </defs>
            <path
              d="M76 38 A28 28 0 1 0 76 82"
              stroke="url(#gbGradOg)"
              strokeWidth={9}
              strokeLinecap="round"
            />
            <path
              d="M58 60 L76 60"
              stroke="url(#gbGradOg)"
              strokeWidth={9}
              strokeLinecap="round"
            />
            <path
              d="M76 28 V92"
              stroke="url(#gbGradOg)"
              strokeWidth={9}
              strokeLinecap="round"
            />
            <path
              d="M76 28 H88 A16 16 0 0 1 88 60 H76"
              stroke="url(#gbGradOg)"
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M76 60 H92 A16 16 0 0 1 92 92 H76"
              stroke="url(#gbGradOg)"
              strokeWidth={9}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
