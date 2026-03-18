'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    console.error('Hero image failed to load');
    setImageError(true);
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
    >
      <div className="absolute inset-0">
        {!imageError ? (
          <Image
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1920&q=80"
            alt="Professional gaming tournament with excited crowd and players"
            fill
            className="object-cover opacity-30"
            priority
            onError={handleImageError}
            sizes="100vw"
          />
        ) : (
          <div
            className="w-full h-full bg-gray-800 flex items-center justify-center"
            role="img"
            aria-label="Gaming tournament background placeholder"
          >
            <div className="text-gray-600 text-lg">Gaming Background</div>
          </div>
        )}
      </div>

      <div className="relative container mx-auto px-4 py-32 md:py-48">
        <header>
          <h1 id="hero-heading" className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to{' '}
            <span className="text-blue-400">
              LOL Landing
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            Experience gaming like never before. Connect with pro players,
            compete in tournaments, and level up your skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-center focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Register for LOL Gaming"
            >
              Join Tournament
            </a>

            <a
              href="/learn"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg transition duration-300 text-center focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Learn more about LOL Gaming features"
            >
              Learn More
            </a>
          </div>
        </header>

        <aside className="mt-8">
          <p className="text-sm text-gray-400">
            Over <strong className="text-blue-400">50,000</strong> active players
            <strong className="text-blue-400"> $500K</strong> total prizes awarded
          </p>
        </aside>
      </div>
    </section>
  );
}
