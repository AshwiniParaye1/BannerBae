//app/components/color-palette.tsx

"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { predefinedPalettes } from "../lib/color-palettes";
import { cn } from "@/lib/utils";

interface ColorPaletteProps {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  onColorChange: (colorType: string, color: string) => void;
}

export default function ColorPalette({
  primaryColor,
  secondaryColor,
  accentColor,
  backgroundColor,
  onColorChange,
}: ColorPaletteProps) {
  const [selectedPalette, setSelectedPalette] = useState("");

  const handlePaletteSelect = (paletteId: string) => {
    setSelectedPalette(paletteId);
    const palette = predefinedPalettes.find((p) => p.id === paletteId);

    if (palette) {
      onColorChange("primaryColor", palette.primaryColor);
      onColorChange("secondaryColor", palette.secondaryColor);
      onColorChange("accentColor", palette.accentColor);
      onColorChange("backgroundColor", palette.backgroundColor);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <Label htmlFor="primary-color" className="text-sm font-medium">
            Primary Color
          </Label>
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-md border shadow-sm cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: primaryColor }}
              onClick={() => document.getElementById("primary-color")?.click()}
            />
            <input
              id="primary-color"
              type="color"
              value={primaryColor}
              onChange={(e) => onColorChange("primaryColor", e.target.value)}
              className="w-full h-10 cursor-pointer rounded-md"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="secondary-color" className="text-sm font-medium">
            Secondary Color
          </Label>
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-md border shadow-sm cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: secondaryColor }}
              onClick={() =>
                document.getElementById("secondary-color")?.click()
              }
            />
            <input
              id="secondary-color"
              type="color"
              value={secondaryColor}
              onChange={(e) => onColorChange("secondaryColor", e.target.value)}
              className="w-full h-10 cursor-pointer rounded-md"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="accent-color" className="text-sm font-medium">
            Accent Color
          </Label>
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-md border shadow-sm cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: accentColor }}
              onClick={() => document.getElementById("accent-color")?.click()}
            />
            <input
              id="accent-color"
              type="color"
              value={accentColor}
              onChange={(e) => onColorChange("accentColor", e.target.value)}
              className="w-full h-10 cursor-pointer rounded-md"
            />
          </div>
        </div>

        <div className="space-y-3">
          <Label htmlFor="background-color" className="text-sm font-medium">
            Background Color
          </Label>
          <div className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-md border shadow-sm cursor-pointer transition-transform hover:scale-105 active:scale-95"
              style={{ backgroundColor: backgroundColor }}
              onClick={() =>
                document.getElementById("background-color")?.click()
              }
            />
            <input
              id="background-color"
              type="color"
              value={backgroundColor}
              onChange={(e) => onColorChange("backgroundColor", e.target.value)}
              className="w-full h-10 cursor-pointer rounded-md"
            />
          </div>
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium mb-3 block">
          Predefined Color Palettes
        </Label>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-2">
          {predefinedPalettes.map((palette) => (
            <button
              key={palette.id}
              className={cn(
                "p-2 rounded-lg border transition-all hover:shadow-md",
                selectedPalette === palette.id
                  ? "ring-2 ring-purple-500 border-purple-200 dark:border-purple-800"
                  : "hover:border-purple-200 dark:hover:border-purple-800"
              )}
              onClick={() => handlePaletteSelect(palette.id)}
            >
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div
                    className="w-7 h-7 rounded-md transform -rotate-3 shadow-sm"
                    style={{ backgroundColor: palette.primaryColor }}
                  />
                  <div
                    className="w-7 h-7 rounded-md transform rotate-3 shadow-sm"
                    style={{ backgroundColor: palette.secondaryColor }}
                  />
                </div>
                <div className="flex gap-1 mt-1">
                  <div
                    className="w-7 h-7 rounded-md transform rotate-3 shadow-sm"
                    style={{ backgroundColor: palette.accentColor }}
                  />
                  <div
                    className="w-7 h-7 rounded-md transform -rotate-3 shadow-sm"
                    style={{ backgroundColor: palette.backgroundColor }}
                  />
                </div>
                <span className="text-xs mt-2 font-medium">{palette.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
