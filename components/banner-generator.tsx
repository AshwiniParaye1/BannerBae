//app/components/banner-generator.tsx

/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import {
  Download,
  RefreshCw,
  Palette,
  Layout,
  Type,
  LayoutTemplateIcon as Template,
  FileTypeIcon as Font,
} from "lucide-react";
import ColorPalette from "../components/color-palette";
import BannerPreview from "../components/banner-preview";
import type { BannerConfig } from "../lib/types";
import { defaultTemplates } from "../lib/templates";
import { cn } from "@/lib/utils";
import { availableFonts } from "../lib/fonts";

export default function BannerGenerator() {
  const [bannerConfig, setBannerConfig] = useState<BannerConfig>({
    name: "John Doe",
    showDesignation: true,
    designation: "Software Developer",
    showCompany: true,
    company: "Tech Company",
    skills: "React, TypeScript, Next.js",
    showTagline: true,
    tagline: "Building digital experiences that matter",
    showContactEmail: true,
    contactEmail: "john@example.com",
    showContactPhone: true,
    contactPhone: "+1 234 567 8900",
    primaryColor: "#0077B5", // LinkedIn blue
    secondaryColor: "#ffffff",
    accentColor: "#00a0dc",
    backgroundColor: "#f3f6f8",
    width: 1584, // LinkedIn recommended banner size
    height: 396,
    namePosition: "center",
    infoPosition: "bottom-left",
    contactPosition: "bottom-right",
    fontSize: 32,
    selectedTemplate: "professional",
    showShapes: true,
    shapesStyle: "geometric",
    fontFamily: "Arial",
  });

  const [activeTab, setActiveTab] = useState("content");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleConfigChange = (key: keyof BannerConfig, value: any) => {
    setBannerConfig((prev) => ({ ...prev, [key]: value }));
  };

  const handleDownload = () => {
    if (!canvasRef.current) return;

    const link = document.createElement("a");
    link.download = "linkedin-banner.png";
    link.href = canvasRef.current.toDataURL("image/png");
    link.click();
  };

  const applyTemplate = (templateName: string) => {
    const template = defaultTemplates.find((t) => t.id === templateName);
    if (template) {
      setBannerConfig((prev) => ({
        ...prev,
        ...template.config,
        selectedTemplate: templateName,
      }));
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <Card className="lg:col-span-7 border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <CardContent className="p-6">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-6 w-full grid grid-cols-4 h-auto p-1 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
              <TabsTrigger
                value="content"
                className={cn(
                  "flex items-center gap-2 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md transition-all",
                  activeTab === "content"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                )}
              >
                <Type size={16} />
                <span className="hidden sm:inline">Content</span>
              </TabsTrigger>
              <TabsTrigger
                value="design"
                className={cn(
                  "flex items-center gap-2 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md transition-all",
                  activeTab === "design"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                )}
              >
                <Palette size={16} />
                <span className="hidden sm:inline">Design</span>
              </TabsTrigger>
              <TabsTrigger
                value="layout"
                className={cn(
                  "flex items-center gap-2 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md transition-all",
                  activeTab === "layout"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                )}
              >
                <Layout size={16} />
                <span className="hidden sm:inline">Layout</span>
              </TabsTrigger>
              <TabsTrigger
                value="templates"
                className={cn(
                  "flex items-center gap-2 py-3 data-[state=active]:bg-white dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-md transition-all",
                  activeTab === "templates"
                    ? "text-purple-600 dark:text-purple-400"
                    : ""
                )}
              >
                <Template size={16} />
                <span className="hidden sm:inline">Templates</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="content" className="space-y-5 mt-2">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  value={bannerConfig.name}
                  onChange={(e) => handleConfigChange("name", e.target.value)}
                  className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 transition-all"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Label
                  htmlFor="show-designation"
                  className="text-sm font-medium cursor-pointer"
                >
                  Show Designation
                </Label>
                <Switch
                  id="show-designation"
                  checked={bannerConfig.showDesignation}
                  onCheckedChange={(checked) =>
                    handleConfigChange("showDesignation", checked)
                  }
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>

              {bannerConfig.showDesignation && (
                <div className="space-y-3 animate-fadeIn">
                  <Label htmlFor="designation" className="text-sm font-medium">
                    Designation
                  </Label>
                  <Input
                    id="designation"
                    value={bannerConfig.designation}
                    onChange={(e) =>
                      handleConfigChange("designation", e.target.value)
                    }
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  />
                </div>
              )}

              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Label
                  htmlFor="show-company"
                  className="text-sm font-medium cursor-pointer"
                >
                  Show Company
                </Label>
                <Switch
                  id="show-company"
                  checked={bannerConfig.showCompany}
                  onCheckedChange={(checked) =>
                    handleConfigChange("showCompany", checked)
                  }
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>

              {bannerConfig.showCompany && (
                <div className="space-y-3 animate-fadeIn">
                  <Label htmlFor="company" className="text-sm font-medium">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value={bannerConfig.company}
                    onChange={(e) =>
                      handleConfigChange("company", e.target.value)
                    }
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  />
                </div>
              )}

              <div className="space-y-3">
                <Label htmlFor="skills" className="text-sm font-medium">
                  Skills (comma separated)
                </Label>
                <Input
                  id="skills"
                  value={bannerConfig.skills}
                  onChange={(e) => handleConfigChange("skills", e.target.value)}
                  className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 transition-all"
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Label
                  htmlFor="show-tagline"
                  className="text-sm font-medium cursor-pointer"
                >
                  Show Tagline
                </Label>
                <Switch
                  id="show-tagline"
                  checked={bannerConfig.showTagline}
                  onCheckedChange={(checked) =>
                    handleConfigChange("showTagline", checked)
                  }
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>

              {bannerConfig.showTagline && (
                <div className="space-y-3 animate-fadeIn">
                  <Label htmlFor="tagline" className="text-sm font-medium">
                    Tagline/Description
                  </Label>
                  <Textarea
                    id="tagline"
                    value={bannerConfig.tagline}
                    onChange={(e) =>
                      handleConfigChange("tagline", e.target.value)
                    }
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 transition-all resize-none"
                    rows={2}
                  />
                </div>
              )}

              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Label
                  htmlFor="show-contact-email"
                  className="text-sm font-medium cursor-pointer"
                >
                  Show Email
                </Label>
                <Switch
                  id="show-contact-email"
                  checked={bannerConfig.showContactEmail}
                  onCheckedChange={(checked) =>
                    handleConfigChange("showContactEmail", checked)
                  }
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>

              {bannerConfig.showContactEmail && (
                <div className="space-y-3 animate-fadeIn">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-medium"
                  >
                    Contact Email
                  </Label>
                  <Input
                    id="contact-email"
                    value={bannerConfig.contactEmail}
                    onChange={(e) =>
                      handleConfigChange("contactEmail", e.target.value)
                    }
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  />
                </div>
              )}

              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Label
                  htmlFor="show-contact-phone"
                  className="text-sm font-medium cursor-pointer"
                >
                  Show Phone
                </Label>
                <Switch
                  id="show-contact-phone"
                  checked={bannerConfig.showContactPhone}
                  onCheckedChange={(checked) =>
                    handleConfigChange("showContactPhone", checked)
                  }
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>

              {bannerConfig.showContactPhone && (
                <div className="space-y-3 animate-fadeIn">
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-medium"
                  >
                    Contact Phone
                  </Label>
                  <Input
                    id="contact-phone"
                    value={bannerConfig.contactPhone}
                    onChange={(e) =>
                      handleConfigChange("contactPhone", e.target.value)
                    }
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500 transition-all"
                  />
                </div>
              )}
            </TabsContent>

            <TabsContent value="design" className="space-y-6 mt-2">
              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Palette size={18} className="text-purple-500" />
                  Colors
                </h3>
                <ColorPalette
                  primaryColor={bannerConfig.primaryColor}
                  secondaryColor={bannerConfig.secondaryColor}
                  accentColor={bannerConfig.accentColor}
                  backgroundColor={bannerConfig.backgroundColor}
                  onColorChange={(colorType, color) =>
                    handleConfigChange(colorType, color)
                  }
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium flex items-center gap-2">
                  <Font size={18} className="text-purple-500" />
                  Typography
                </h3>
                <div className="space-y-3">
                  <Label htmlFor="font-family" className="text-sm font-medium">
                    Font Family
                  </Label>
                  <Select
                    value={bannerConfig.fontFamily}
                    onValueChange={(value) =>
                      handleConfigChange("fontFamily", value)
                    }
                  >
                    <SelectTrigger
                      id="font-family"
                      className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                    >
                      <SelectValue placeholder="Select font" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableFonts.map((font) => (
                        <SelectItem
                          key={font.value}
                          value={font.value}
                          style={{ fontFamily: font.value }}
                        >
                          {font.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label htmlFor="font-size" className="text-sm font-medium">
                      Font Size (px)
                    </Label>
                    <span className="text-sm font-medium text-purple-600">
                      {bannerConfig.fontSize}
                    </span>
                  </div>
                  <Slider
                    id="font-size"
                    min={16}
                    max={72}
                    step={1}
                    value={[bannerConfig.fontSize]}
                    onValueChange={(value) =>
                      handleConfigChange("fontSize", value[0])
                    }
                    className="py-2"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Dimensions</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label htmlFor="width" className="text-sm font-medium">
                        Width (px)
                      </Label>
                      <span className="text-sm font-medium text-purple-600">
                        {bannerConfig.width}
                      </span>
                    </div>
                    <Slider
                      id="width"
                      min={800}
                      max={2000}
                      step={1}
                      value={[bannerConfig.width]}
                      onValueChange={(value) =>
                        handleConfigChange("width", value[0])
                      }
                      className="py-2"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <Label htmlFor="height" className="text-sm font-medium">
                        Height (px)
                      </Label>
                      <span className="text-sm font-medium text-purple-600">
                        {bannerConfig.height}
                      </span>
                    </div>
                    <Slider
                      id="height"
                      min={200}
                      max={600}
                      step={1}
                      value={[bannerConfig.height]}
                      onValueChange={(value) =>
                        handleConfigChange("height", value[0])
                      }
                      className="py-2"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                <Label
                  htmlFor="show-shapes"
                  className="text-sm font-medium cursor-pointer"
                >
                  Show Decorative Shapes
                </Label>
                <Switch
                  id="show-shapes"
                  checked={bannerConfig.showShapes}
                  onCheckedChange={(checked) =>
                    handleConfigChange("showShapes", checked)
                  }
                  className="data-[state=checked]:bg-purple-600"
                />
              </div>

              {bannerConfig.showShapes && (
                <div className="space-y-3 animate-fadeIn">
                  <Label htmlFor="shapes-style" className="text-sm font-medium">
                    Shapes Style
                  </Label>
                  <Select
                    value={bannerConfig.shapesStyle}
                    onValueChange={(value) =>
                      handleConfigChange("shapesStyle", value)
                    }
                  >
                    <SelectTrigger
                      id="shapes-style"
                      className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                    >
                      <SelectValue placeholder="Select style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="geometric">Geometric</SelectItem>
                      <SelectItem value="circles">Circles</SelectItem>
                      <SelectItem value="lines">Lines</SelectItem>
                      <SelectItem value="dots">Dots</SelectItem>
                      <SelectItem value="waves">Waves</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </TabsContent>

            <TabsContent value="layout" className="space-y-5 mt-2">
              <div className="space-y-3">
                <Label htmlFor="name-position" className="text-sm font-medium">
                  Name Position
                </Label>
                <Select
                  value={bannerConfig.namePosition}
                  onValueChange={(value) =>
                    handleConfigChange("namePosition", value)
                  }
                >
                  <SelectTrigger
                    id="name-position"
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                  >
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top-left">Top Left</SelectItem>
                    <SelectItem value="top-right">Top Right</SelectItem>
                    <SelectItem value="center">Center</SelectItem>
                    <SelectItem value="bottom-left">Bottom Left</SelectItem>
                    <SelectItem value="bottom-right">Bottom Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="info-position" className="text-sm font-medium">
                  Info Position
                </Label>
                <Select
                  value={bannerConfig.infoPosition}
                  onValueChange={(value) =>
                    handleConfigChange("infoPosition", value)
                  }
                >
                  <SelectTrigger
                    id="info-position"
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                  >
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top-left">Top Left</SelectItem>
                    <SelectItem value="top-right">Top Right</SelectItem>
                    <SelectItem value="center">Center</SelectItem>
                    <SelectItem value="bottom-left">Bottom Left</SelectItem>
                    <SelectItem value="bottom-right">Bottom Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="contact-position"
                  className="text-sm font-medium"
                >
                  Contact Position
                </Label>
                <Select
                  value={bannerConfig.contactPosition}
                  onValueChange={(value) =>
                    handleConfigChange("contactPosition", value)
                  }
                >
                  <SelectTrigger
                    id="contact-position"
                    className="border-slate-200 focus:border-purple-500 focus:ring-purple-500"
                  >
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top-left">Top Left</SelectItem>
                    <SelectItem value="top-right">Top Right</SelectItem>
                    <SelectItem value="center">Center</SelectItem>
                    <SelectItem value="bottom-left">Bottom Left</SelectItem>
                    <SelectItem value="bottom-right">Bottom Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg mt-4">
                <div className="relative aspect-[4/1] bg-white dark:bg-slate-700 rounded-md overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-2">
                    {[
                      "top-left",
                      "top",
                      "top-right",
                      "left",
                      "center",
                      "right",
                      "bottom-left",
                      "bottom",
                      "bottom-right",
                    ].map((position) => (
                      <div
                        key={position}
                        className={cn(
                          "flex items-center justify-center text-xs rounded border border-dashed border-slate-300 dark:border-slate-600",
                          (bannerConfig.namePosition === position ||
                            bannerConfig.infoPosition === position ||
                            bannerConfig.contactPosition === position) &&
                            "bg-purple-100 dark:bg-purple-900/20"
                        )}
                      >
                        {position === bannerConfig.namePosition && (
                          <span className="px-1 py-0.5 bg-purple-600 text-white rounded text-[10px]">
                            Name
                          </span>
                        )}
                        {position === bannerConfig.infoPosition && (
                          <span className="px-1 py-0.5 bg-blue-600 text-white rounded text-[10px]">
                            Info
                          </span>
                        )}
                        {position === bannerConfig.contactPosition && (
                          <span className="px-1 py-0.5 bg-green-600 text-white rounded text-[10px]">
                            Contact
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-center mt-2 text-slate-500">
                  Visual representation of element positions
                </p>
              </div>
            </TabsContent>

            <TabsContent value="templates" className="mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {defaultTemplates.map((template) => (
                  <Card
                    key={template.id}
                    className={cn(
                      "cursor-pointer transition-all overflow-hidden group hover:shadow-md",
                      bannerConfig.selectedTemplate === template.id
                        ? "ring-2 ring-purple-500"
                        : "hover:border-purple-200"
                    )}
                    onClick={() => applyTemplate(template.id)}
                  >
                    <CardContent className="p-0">
                      <div
                        className="aspect-[4/1] rounded-t-md"
                        style={{
                          backgroundColor: template.config.backgroundColor,
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            style={{
                              color: template.config.primaryColor,
                              fontWeight: "bold",
                            }}
                          >
                            {template.name}
                          </span>
                        </div>
                        {/* Template preview decorative elements */}
                        {template.id === "professional" && (
                          <div className="absolute inset-0">
                            <div
                              className="absolute top-0 left-0 w-full h-1"
                              style={{
                                backgroundColor: template.config.accentColor,
                              }}
                            ></div>
                          </div>
                        )}
                        {template.id === "modern" && (
                          <div className="absolute inset-0">
                            <div
                              className="absolute top-0 right-0 w-1/3 h-full opacity-10"
                              style={{
                                backgroundColor: template.config.accentColor,
                              }}
                            ></div>
                          </div>
                        )}
                        {template.id === "creative" && (
                          <div className="absolute inset-0">
                            <div
                              className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20"
                              style={{
                                backgroundColor: template.config.accentColor,
                              }}
                            ></div>
                            <div
                              className="absolute bottom-5 right-10 w-16 h-16 rounded-full opacity-20"
                              style={{
                                backgroundColor: template.config.primaryColor,
                              }}
                            ></div>
                          </div>
                        )}
                        {template.id === "minimal" && (
                          <div className="absolute inset-0">
                            <div
                              className="absolute bottom-0 left-0 w-full h-px"
                              style={{
                                backgroundColor: template.config.accentColor,
                              }}
                            ></div>
                          </div>
                        )}
                        {template.id === "bold" && (
                          <div className="absolute inset-0">
                            <div
                              className="absolute top-0 left-0 w-1/4 h-full"
                              style={{
                                backgroundColor: template.config.accentColor,
                                opacity: 0.1,
                              }}
                            ></div>
                          </div>
                        )}
                        {template.id === "tech" && (
                          <div className="absolute inset-0">
                            <div
                              className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-10"
                              style={{
                                backgroundColor: template.config.accentColor,
                              }}
                            ></div>
                          </div>
                        )}
                      </div>
                      <div className="p-3 flex items-center justify-between">
                        <h3 className="font-medium">{template.name}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(
                            "opacity-0 group-hover:opacity-100 transition-opacity",
                            bannerConfig.selectedTemplate === template.id &&
                              "opacity-100"
                          )}
                        >
                          {bannerConfig.selectedTemplate === template.id
                            ? "Selected"
                            : "Select"}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-6 flex gap-3">
            <Button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all"
            >
              <Download size={16} />
              Download Banner
            </Button>
            <Button
              variant="outline"
              onClick={() => applyTemplate(bannerConfig.selectedTemplate)}
              className="flex items-center gap-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 dark:border-purple-900 dark:hover:bg-purple-900/20"
            >
              <RefreshCw size={16} />
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="lg:col-span-5 space-y-4">
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Live Preview
            </h2>
            <BannerPreview config={bannerConfig} canvasRef={canvasRef} />
            <p className="text-sm text-slate-500 mt-3 text-center">
              LinkedIn recommended banner size: 1584 x 396 pixels
            </p>
          </CardContent>
        </Card>

        <div className="bg-purple-50 dark:bg-purple-900/10 rounded-lg p-4 border border-purple-100 dark:border-purple-800">
          <h3 className="font-medium text-purple-800 dark:text-purple-300 mb-2">
            Pro Tips
          </h3>
          <ul className="text-sm space-y-2 text-slate-700 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
              Use high contrast colors for better readability
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
              Keep your banner clean and not too cluttered
            </li>
            <li className="flex items-start gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5"></span>
              Experiment with different templates and positions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
