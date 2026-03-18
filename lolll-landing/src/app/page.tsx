import { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'LOL Landing - Premium Gaming Experience',
  description: 'Join the ultimate gaming community. Discover exclusive tournaments, connect with pro players, and level up your gaming experience.',
  keywords: 'gaming, esports, tournaments, community, LOL',
  authors: [{ name: 'LOL Team' }],
  openGraph: {
    title: 'LOL Landing - Premium Gaming Experience',
    description: 'Join the ultimate gaming community',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white p-2 rounded"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      
      {/* Semantic structure with proper landmarks */}
      <header role="banner" className="border-b border-gray-800">
        <nav role="navigation" aria-label="Main navigation" className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-blue-400">LOL Gaming</h1>
        </nav>
      </header>
      
      <div id="main-content" role="main">
        <Hero />
        
        <section aria-labelledby="features-heading" className="py-16">
          <div className="container mx-auto px-4">
            <h2 id="features-heading" className="text-3xl font-bold mb-8 text-center">Why Choose LOL Landing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Exclusive Tournaments</h3>
                <p className="text-gray-300">Compete in daily tournaments with amazing prizes and prestige.</p>
              </article>
              <article className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Active Community</h3>
                <p className="text-gray-300">Join thousands of gamers ready to connect and play together.</p>
              </article>
              <article className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold mb-2 text-blue-400">Pro Insights</h3>
                <p className="text-gray-300">Learn from the best players with detailed analysis and tips.</p>
              </article>
            </div>
          </div>
        </section>
        
        <section aria-labelledby="cta-heading" className="py-16 bg-gradient-to-r from-blue-900 to-purple-900">
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-3xl font-bold mb-4">Ready to Start Gaming?</h2>
            <p className="text-lg mb-6 text-gray-200">Join now and get instant access to premium features</p>
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Join LOL Gaming community"
            >
              Get Started Now
            </button>
          </div>
        </section>
      </div>
      
      <footer role="contentinfo" className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">2024 LOL Landing. Made with ❤️ for the gaming community.</p>
        </div>
      </footer>
    </main>
  );
}
