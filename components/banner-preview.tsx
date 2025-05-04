//app/components/banner-preview.tsx

"use client";

import { useEffect, useRef, type RefObject } from "react";
import type { BannerConfig } from "../lib/types";

interface BannerPreviewProps {
  config: BannerConfig;
  canvasRef: RefObject<HTMLCanvasElement>;
}

export default function BannerPreview({
  config,
  canvasRef,
}: BannerPreviewProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = config.width;
    canvas.height = config.height;

    // Draw background
    ctx.fillStyle = config.backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw decorative shapes if enabled
    if (config.showShapes) {
      drawDecorativeShapes(ctx, canvas.width, canvas.height, config);
    }

    // Set font properties
    ctx.font = `bold ${config.fontSize}px ${config.fontFamily}`;
    ctx.fillStyle = config.primaryColor;
    ctx.textAlign = "left";

    // Calculate positions based on professional layout
    const padding = Math.max(30, config.fontSize * 0.8);
    const lineHeight = config.fontSize * 1.2;

    // Draw name based on position
    const nameText = config.name;

    let nameX = padding;
    let nameY = padding + config.fontSize;

    switch (config.namePosition) {
      case "top-left":
        nameX = padding;
        nameY = padding + config.fontSize;
        ctx.textAlign = "left";
        break;
      case "top-right":
        nameX = canvas.width - padding;
        nameY = padding + config.fontSize;
        ctx.textAlign = "right";
        break;
      case "center":
        nameX = canvas.width / 2;
        nameY = canvas.height / 2;
        ctx.textAlign = "center";
        break;
      case "bottom-left":
        nameX = padding;
        nameY = canvas.height - padding - config.fontSize;
        ctx.textAlign = "left";
        break;
      case "bottom-right":
        nameX = canvas.width - padding;
        nameY = canvas.height - padding - config.fontSize;
        ctx.textAlign = "right";
        break;
    }

    // Add a subtle text shadow for better readability
    ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    ctx.fillText(nameText, nameX, nameY);

    // Reset shadow
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Draw info (designation, company, skills, tagline)
    let infoX = padding;
    let infoY = padding + config.fontSize * 2;

    switch (config.infoPosition) {
      case "top-left":
        infoX = padding;
        infoY = padding + config.fontSize * 2;
        ctx.textAlign = "left";
        break;
      case "top-right":
        infoX = canvas.width - padding;
        infoY = padding + config.fontSize * 2;
        ctx.textAlign = "right";
        break;
      case "center":
        infoX = canvas.width / 2;
        infoY = canvas.height / 2 + lineHeight;
        ctx.textAlign = "center";
        break;
      case "bottom-left":
        infoX = padding;
        infoY = canvas.height - padding - config.fontSize * 3;
        ctx.textAlign = "left";
        break;
      case "bottom-right":
        infoX = canvas.width - padding;
        infoY = canvas.height - padding - config.fontSize * 3;
        ctx.textAlign = "right";
        break;
    }

    ctx.font = `${config.fontSize * 0.7}px ${config.fontFamily}`;
    ctx.fillStyle = config.secondaryColor;

    let currentY = infoY;

    if (config.showDesignation && config.designation) {
      ctx.fillText(config.designation, infoX, currentY);
      currentY += lineHeight * 0.8;
    }

    if (config.showCompany && config.company) {
      ctx.fillText(config.company, infoX, currentY);
      currentY += lineHeight * 0.8;
    }

    if (config.skills) {
      ctx.fillText(config.skills, infoX, currentY);
      currentY += lineHeight * 0.8;
    }

    if (config.showTagline && config.tagline) {
      ctx.fillText(config.tagline, infoX, currentY);
    }

    // Draw contact info
    let contactX = padding;
    let contactY = canvas.height - padding;

    switch (config.contactPosition) {
      case "top-left":
        contactX = padding;
        contactY = padding + config.fontSize * 4;
        ctx.textAlign = "left";
        break;
      case "top-right":
        contactX = canvas.width - padding;
        contactY = padding + config.fontSize * 4;
        ctx.textAlign = "right";
        break;
      case "center":
        contactX = canvas.width / 2;
        contactY = canvas.height - padding;
        ctx.textAlign = "center";
        break;
      case "bottom-left":
        contactX = padding;
        contactY = canvas.height - padding;
        ctx.textAlign = "left";
        break;
      case "bottom-right":
        contactX = canvas.width - padding;
        contactY = canvas.height - padding;
        ctx.textAlign = "right";
        break;
    }

    ctx.font = `${config.fontSize * 0.6}px ${config.fontFamily}`;
    ctx.fillStyle = config.accentColor;

    if (config.showContactEmail && config.contactEmail) {
      ctx.fillText(config.contactEmail, contactX, contactY);
      contactY -= lineHeight * 0.7;
    }

    if (config.showContactPhone && config.contactPhone) {
      ctx.fillText(config.contactPhone, contactX, contactY);
    }

    // Add a subtle accent line
    ctx.strokeStyle = config.accentColor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, 10);
    ctx.lineTo(canvas.width, 10);
    ctx.stroke();
  }, [config, canvasRef]);

  // Function to draw decorative shapes based on style
  function drawDecorativeShapes(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    config: BannerConfig
  ) {
    ctx.globalAlpha = 0.1; // Set transparency for shapes

    switch (config.shapesStyle) {
      case "geometric":
        // Draw geometric shapes
        ctx.fillStyle = config.primaryColor;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(width * 0.2, 0);
        ctx.lineTo(0, height * 0.3);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = config.accentColor;
        ctx.beginPath();
        ctx.moveTo(width, height);
        ctx.lineTo(width * 0.8, height);
        ctx.lineTo(width, height * 0.7);
        ctx.closePath();
        ctx.fill();

        // Add some circles
        ctx.fillStyle = config.secondaryColor;
        ctx.beginPath();
        ctx.arc(width * 0.8, height * 0.2, height * 0.1, 0, Math.PI * 2);
        ctx.fill();
        break;

      case "circles":
        // Draw circles pattern
        for (let i = 0; i < 5; i++) {
          const radius = Math.random() * (height * 0.2) + 20;
          const x = Math.random() * width;
          const y = Math.random() * height;

          ctx.fillStyle =
            i % 2 === 0 ? config.primaryColor : config.accentColor;
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        break;

      case "lines":
        // Draw diagonal lines
        ctx.strokeStyle = config.primaryColor;
        ctx.lineWidth = 2;

        for (let i = 0; i < width; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i + height, height);
          ctx.stroke();
        }

        ctx.strokeStyle = config.accentColor;
        for (let i = 0; i < width; i += 80) {
          ctx.beginPath();
          ctx.moveTo(i, height);
          ctx.lineTo(i + height, 0);
          ctx.stroke();
        }
        break;

      case "dots":
        // Draw dot pattern
        const dotSize = 4;
        const spacing = 30;

        for (let x = 0; x < width; x += spacing) {
          for (let y = 0; y < height; y += spacing) {
            ctx.fillStyle =
              (x + y) % 60 === 0 ? config.primaryColor : config.accentColor;
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
          }
        }
        break;

      case "waves":
        // Draw wave pattern
        ctx.strokeStyle = config.primaryColor;
        ctx.lineWidth = 2;

        for (let y = 20; y < height; y += 40) {
          ctx.beginPath();
          for (let x = 0; x < width; x += 10) {
            const amplitude = 15;
            const yOffset = Math.sin(x * 0.02) * amplitude;
            ctx.lineTo(x, y + yOffset);
          }
          ctx.stroke();
        }

        ctx.strokeStyle = config.accentColor;
        for (let y = 40; y < height; y += 40) {
          ctx.beginPath();
          for (let x = 0; x < width; x += 10) {
            const amplitude = 10;
            const yOffset = Math.cos(x * 0.02) * amplitude;
            ctx.lineTo(x, y + yOffset);
          }
          ctx.stroke();
        }
        break;
    }

    ctx.globalAlpha = 1.0; // Reset transparency
  }

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden border rounded-lg shadow-sm relative group"
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
        <span className="bg-white/80 backdrop-blur-sm text-xs px-2 py-1 rounded shadow-sm">
          Preview
        </span>
      </div>
      <div className="relative w-full overflow-auto">
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto"
          style={{
            width: "100%",
            aspectRatio: `${config.width} / ${config.height}`,
          }}
        />
      </div>
    </div>
  );
}
