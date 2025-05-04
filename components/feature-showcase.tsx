//app/components/feature-showcase.tsx

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Layout, Type, Download, Shapes, Sliders } from "lucide-react";

const features = [
  {
    icon: <Type className="w-10 h-10 text-purple-500" />,
    title: "Custom Text",
    description:
      "Add your name, title, company, skills, and more with complete control over fonts and styling.",
  },
  {
    icon: <Palette className="w-10 h-10 text-purple-500" />,
    title: "Color Palettes",
    description:
      "Choose from predefined color palettes or create your own custom color scheme.",
  },
  {
    icon: <Layout className="w-10 h-10 text-purple-500" />,
    title: "Flexible Layout",
    description:
      "Position elements exactly where you want them with our intuitive layout controls.",
  },
  {
    icon: <Shapes className="w-10 h-10 text-purple-500" />,
    title: "Decorative Elements",
    description:
      "Add geometric shapes, patterns, and decorative elements to make your banner stand out.",
  },
  {
    icon: <Sliders className="w-10 h-10 text-purple-500" />,
    title: "Size Control",
    description:
      "Adjust dimensions, font sizes, and spacing to create the perfect banner for your profile.",
  },
  {
    icon: <Download className="w-10 h-10 text-purple-500" />,
    title: "Instant Download",
    description:
      "Download your banner in high resolution and upload it directly to LinkedIn.",
  },
];

export default function FeatureShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-slate-100 dark:border-slate-700"
        >
          <div className="mb-4">{feature.icon}</div>
          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
          <p className="text-slate-600 dark:text-slate-300">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
