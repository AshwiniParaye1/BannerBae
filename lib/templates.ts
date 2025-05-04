//app/lib/templates.ts

import type { BannerTemplate } from "./types";

export const defaultTemplates: BannerTemplate[] = [
  {
    id: "professional",
    name: "Professional",
    config: {
      primaryColor: "#0077B5", // LinkedIn blue
      secondaryColor: "#ffffff",
      accentColor: "#00a0dc",
      backgroundColor: "#f3f6f8",
      namePosition: "center",
      infoPosition: "bottom-left",
      contactPosition: "bottom-right",
      fontSize: 32,
      fontFamily: "Arial",
    },
  },
  {
    id: "modern",
    name: "Modern",
    config: {
      primaryColor: "#2d3748",
      secondaryColor: "#ffffff",
      accentColor: "#4299e1",
      backgroundColor: "#edf2f7",
      namePosition: "top-left",
      infoPosition: "center",
      contactPosition: "bottom-right",
      fontSize: 36,
      fontFamily: "Helvetica",
    },
  },
  {
    id: "creative",
    name: "Creative",
    config: {
      primaryColor: "#6b46c1",
      secondaryColor: "#ffffff",
      accentColor: "#f56565",
      backgroundColor: "#faf5ff",
      namePosition: "top-right",
      infoPosition: "bottom-left",
      contactPosition: "bottom-right",
      fontSize: 40,
      fontFamily: "Georgia",
    },
  },
  {
    id: "minimal",
    name: "Minimal",
    config: {
      primaryColor: "#1a202c",
      secondaryColor: "#4a5568",
      accentColor: "#718096",
      backgroundColor: "#ffffff",
      namePosition: "center",
      infoPosition: "center",
      contactPosition: "bottom-right",
      fontSize: 28,
      fontFamily: "Verdana",
    },
  },
  {
    id: "bold",
    name: "Bold",
    config: {
      primaryColor: "#e53e3e",
      secondaryColor: "#ffffff",
      accentColor: "#f6ad55",
      backgroundColor: "#1a202c",
      namePosition: "top-left",
      infoPosition: "bottom-left",
      contactPosition: "top-right",
      fontSize: 42,
      fontFamily: "Trebuchet MS",
    },
  },
  {
    id: "tech",
    name: "Tech",
    config: {
      primaryColor: "#38b2ac",
      secondaryColor: "#ffffff",
      accentColor: "#4fd1c5",
      backgroundColor: "#1a202c",
      namePosition: "top-left",
      infoPosition: "bottom-left",
      contactPosition: "bottom-right",
      fontSize: 36,
      fontFamily: "Courier New",
    },
  },
];
