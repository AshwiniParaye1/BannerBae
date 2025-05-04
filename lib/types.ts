//app/lib/types.ts

export type Position =
  | "top-left"
  | "top-right"
  | "center"
  | "bottom-left"
  | "bottom-right";
export type ShapesStyle = "geometric" | "circles" | "lines" | "dots" | "waves";

export interface BannerConfig {
  name: string;
  showDesignation: boolean;
  designation: string;
  showCompany: boolean;
  company: string;
  skills: string;
  showTagline: boolean;
  tagline: string;
  showContactEmail: boolean;
  contactEmail: string;
  showContactPhone: boolean;
  contactPhone: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  width: number;
  height: number;
  namePosition: Position;
  infoPosition: Position;
  contactPosition: Position;
  fontSize: number;
  selectedTemplate: string;
  showShapes: boolean;
  shapesStyle: ShapesStyle;
  fontFamily: string;
}

export interface BannerTemplate {
  id: string;
  name: string;
  config: Partial<BannerConfig>;
}
