import React from "react";

export interface HeroProps {
  headline?: string;
  subHeadline?: string;
  ctaLabel?: string;
}

export default function Hero({
  headline = "Laugh First",
  subHeadline = "Because joy makes everything better.",
  ctaLabel = "Get beta access",
}: HeroProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center animate-fade-in">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          {headline}
        </h1>
        <p className="mt-6 max-w-lg mx-auto text-xl text-white/90 animate-slide-up sm:max-w-3xl">
          {subHeadline}
        </p>
        <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center animate-slide-up">
          <button className="w-full sm:w-auto transition-transform hover:scale-105 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 sm:px-10">
            {ctaLabel}
          </button>
        </div>
      </div>
    </main>
  );
}
