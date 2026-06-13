"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(124,58,237,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        <p className="font-mono text-8xl font-black text-violet-500/20 select-none mb-2">
          404
        </p>
        <h1 className="text-2xl font-bold text-[#f5f5f5] mb-3">Page not found</h1>
        <p className="text-[#888] mb-10 max-w-sm leading-relaxed">
          This page doesn&apos;t exist or may have been moved. Head back to the portfolio.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
              bg-violet-600 hover:bg-violet-700 text-white font-medium transition-colors"
          >
            <Home size={16} />
            Back to home
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
              border border-white/10 hover:border-violet-500/40
              text-[#888] hover:text-violet-400 font-medium transition-colors"
          >
            <ArrowLeft size={16} />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}
