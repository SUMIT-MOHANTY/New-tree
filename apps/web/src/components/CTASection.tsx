export default function CTASection() {
  return (
    <section
      id="cta"
      className="py-20 lg:py-32 bg-primary-600"
      aria-labelledby="cta-heading"
    >
      <div className="container text-center">
        <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Join thousands of developers building better web experiences
        </p>
        <form className="max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              aria-describedby="email-help"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Start Free Trial
            </button>
          </div>
          <p id="email-help" className="text-sm text-white/70 mt-2">
            No spam, unsubscribe at any time
          </p>
        </form>
      </div>
    </section>
  )
}
