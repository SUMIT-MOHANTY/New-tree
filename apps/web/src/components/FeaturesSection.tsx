const features = [
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed with Next.js and modern web technologies',
    icon: '',
  },
  {
    title: 'Fully Responsive',
    description: 'Perfect experience across all devices and screen sizes',
    icon: '',
  },
  {
    title: 'Accessibility First',
    description: 'WCAG 2.1 compliant for inclusive user experience',
    icon: '',
  },
  {
    title: 'SEO Optimized',
    description: 'Built-in SEO features to improve search rankings',
    icon: '',
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-20 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to create amazing web experiences
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <article
              key={index}
              className="p-6 text-center hover:shadow-lg transition-shadow duration-200 rounded-lg"
            >
              <div className="text-4xl mb-4" aria-hidden="true">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
