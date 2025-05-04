//app/generator/page.tsx

import BannerGenerator from "../../components/banner-generator";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function GeneratorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-pink-200 dark:bg-pink-900/20 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-purple-600 transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
                LinkedIn Banner Generator
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto mb-4 rounded-full"></div>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Create a professional and unique LinkedIn banner with
                customizable elements, stunning designs, and download it
                instantly.
              </p>
            </div>
            <BannerGenerator />
          </div>
        </div>
      </div>
    </main>
  );
}
