import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      className="py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white"
      aria-labelledby="hero-heading"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 id="hero-heading" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Transform Your Digital Experience
              <span className="text-primary-600"> Today</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Create stunning, fast, and accessible web experiences that engage your users
              and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#get-started"
                className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-md hover:bg-primary-700 transition-colors duration-200 text-center"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-colors duration-200 text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-primary-100 rounded-2xl flex items-center justify-center">
              <div className="w-48 h-48 bg-primary-600 rounded-full opacity-10 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
