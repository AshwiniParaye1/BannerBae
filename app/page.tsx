import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LandingHero from "../components/landing-hero";
import FeatureShowcase from "../components/feature-showcase";
import TemplateShowcase from "../components/template-showcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <LandingHero />

      {/* Features Section */}
      <section id="features" className="py-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Powerful Features
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Create stunning LinkedIn banners with our easy-to-use generator.
              Customize every aspect of your banner to make it uniquely yours.
            </p>
          </div>

          <FeatureShowcase />
        </div>
      </section>

      {/* Templates Section */}
      <section
        id="templates"
        className="py-20 px-4 bg-white dark:bg-slate-800/50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              Professional Templates
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates or
              create your own from scratch.
            </p>
          </div>

          <TemplateShowcase />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create your professional LinkedIn banner?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Stand out from the crowd with a custom banner that showcases your
            personal brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/generator">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white px-8 py-6 rounded-lg font-medium text-lg flex items-center gap-2 transition-all"
              >
                Create Your Banner <ArrowRight size={18} />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "No design skills required",
              "Download in high resolution",
              "Multiple customization options",
              "Professional templates",
              "Custom colors and fonts",
              "Instant preview",
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 justify-center"
              >
                <CheckCircle size={18} className="text-green-500" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">BannerBae</h3>
            <p className="text-sm text-slate-500">
              Create professional banners in minutes
            </p>
          </div>
          <div className="flex gap-6">
            <Link
              href="/generator"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Generator
            </Link>
            <Link
              href="#features"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#templates"
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Templates
            </Link>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} LinkedIn Banner Generator. All rights
          reserved.
        </div>
      </footer>

      {/* Scroll down indicator */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <a
          href="#features"
          className="flex flex-col items-center text-slate-400 hover:text-purple-500 transition-colors"
        >
          <span className="text-xs mb-1">Scroll</span>
          <ChevronDown size={20} />
        </a>
      </div>
    </div>
  );
}
