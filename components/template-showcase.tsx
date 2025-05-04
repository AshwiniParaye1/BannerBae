//app/components/template-showcase.tsx

"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { defaultTemplates } from "../lib/templates";

export default function TemplateShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {defaultTemplates.map((template, index) => (
        <motion.div
          key={template.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 hover:border-purple-200 dark:hover:border-purple-800"
        >
          <div
            className="aspect-[4/1]"
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
                  style={{ backgroundColor: template.config.accentColor }}
                ></div>
              </div>
            )}
            {template.id === "modern" && (
              <div className="absolute inset-0">
                <div
                  className="absolute top-0 right-0 w-1/3 h-full opacity-10"
                  style={{ backgroundColor: template.config.accentColor }}
                ></div>
              </div>
            )}
            {template.id === "creative" && (
              <div className="absolute inset-0">
                <div
                  className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-20"
                  style={{ backgroundColor: template.config.accentColor }}
                ></div>
                <div
                  className="absolute bottom-5 right-10 w-16 h-16 rounded-full opacity-20"
                  style={{ backgroundColor: template.config.primaryColor }}
                ></div>
              </div>
            )}
            {template.id === "minimal" && (
              <div className="absolute inset-0">
                <div
                  className="absolute bottom-0 left-0 w-full h-px"
                  style={{ backgroundColor: template.config.accentColor }}
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
                  style={{ backgroundColor: template.config.accentColor }}
                ></div>
              </div>
            )}
          </div>
          <div className="p-4">
            <h3 className="font-medium text-lg">{template.name}</h3>
            <p className="text-sm text-slate-500 mt-1">
              Professional LinkedIn banner template
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
