import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

export interface HeroProps {
  headline?: string;
  tagline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImage?: string;
  className?: string;
  onCtaClick?: () => void;
}

export const Hero = ({
  headline,
  tagline,
  ctaLabel,
  ctaHref = '#',
  backgroundImage,
  className,
  onCtaClick,
}: HeroProps) => {
  // Fallback values
  const finalHeadline = headline ?? 'Welcome to Lolll';
  const finalTagline = tagline ?? 'Building something awesome.';
  const finalCtaLabel = ctaLabel ?? 'Get Started';

  // Warn on missing props
  if (!headline) console.warn('[Hero component] Missing "headline" prop, using fallback');
  if (!tagline) console.warn('[Hero component] Missing "tagline" prop, using fallback');
  if (!ctaLabel) console.warn('[Hero component] Missing "ctaLabel" prop, using fallback');
  if (!ctaHref || ctaHref === '#') console.warn('[Hero component] Missing ctaHref, using "#" fallback');
  if (!backgroundImage) console.warn('[Hero component] backgroundImage prop is undefined, skipping image');

  return (
    <header className={clsx('relative flex flex-col items-center justify-center h-[50vh] md:h-[60vh] lg:h-[70vh] bg-gray-900 text-white overflow-hidden', className)}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="Hero background"
            fill
            className="object-cover object-center"
            priority
            onError={() => {
              console.warn('[Hero component] Failed to load background image', backgroundImage);
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700" />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-4 sm:mb-6">
          {finalHeadline}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {finalTagline}
        </p>
        <Link
          href={ctaHref}
          onClick={(e) => {
            if (onCtaClick) {
              e.preventDefault();
              onCtaClick();
            }
          }}
          className="inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-200"
        >
          {finalCtaLabel}
        </Link>
      </div>
    </header>
  );
};
