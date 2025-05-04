//app/components/landing-hero.tsx

/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function LandingHero() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Create Professional{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                LinkedIn Banners
              </span>{" "}
              in Minutes
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
              Stand out from the crowd with a custom banner that showcases your
              personal brand and professional identity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/generator">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 rounded-lg font-medium text-lg flex items-center gap-2 transition-all"
                >
                  Create Your Banner <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-700">
              <div className="aspect-[4/1] bg-gradient-to-br from-purple-500 to-blue-600 relative">
                {/* Sample banner content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex flex-col items-center justify-center h-full">
                    <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-2">
                      John Doe
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl text-center">
                      Senior Software Developer
                    </p>
                    <div className="mt-4 flex gap-2 flex-wrap justify-center">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        React
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        TypeScript
                      </span>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                        Next.js
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between text-white/80 text-sm">
                    <span>john@example.com</span>
                    <span>Building digital experiences that matter</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Animated elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium">Live Preview</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm font-medium">Professional Design</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
