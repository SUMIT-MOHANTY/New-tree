import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Error boundary component for error handling
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: string | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Page error occurred:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main role="main" aria-label="Error page">
          <h1> Something went wrong</h1>
          <p>{this.state.error}</p>
          <a href="/" aria-label="Return to home page">Go back home</a>
        </main>
      );
    }

    return this.props.children;
  }
}

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div role="status" aria-live="polite" aria-label="Loading content">
    <div className="spinner" aria-hidden="true">
      <div></div>
    </div>
    <span className="sr-only">Loading page content...</span>
  </div>
);

// Image component with proper alt testing
const AccessibleImage = ({
  src,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => {
  // Validation for alt text
  if (!alt || alt.trim() === '') {
    console.warn('Image missing alt attribute:', src);
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={false}
      loading="lazy"
      decoding="async"
    />
  );
};

// Main page component with proper semantic structure
export default function HomePage() {
  // Test logging for debugging
  if (typeof window !== 'undefined') {
    console.log('HomePage rendered:', new Date().toISOString());
  }

  return (
    <ErrorBoundary>
      {/* Skip navigation link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header role="banner" className="header">
        <nav aria-label="Main navigation" role="navigation">
          <ul role="list">
            <li>
              <Link href="/" aria-label="Go to home page">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" aria-label="About us page">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Suspense fallback={<LoadingSpinner />}>
        <main id="main-content" role="main" aria-label="Homepage main content">
          {/* Hero section with semantic structure */}
          <section aria-labelledby="hero-heading" className="hero">
            <h1 id="hero-heading">Welcome to Our Accessible Website</h1>
            <p>We prioritize accessibility and user experience for everyone.</p>

            <AccessibleImage
              src="/placeholder-hero.jpg"
              alt="Team collaboration illustration showing diverse people working together"
              width={800}
              height={400}
              className="hero-image"
            />
          </section>

          {/* Features section */}
          <section aria-labelledby="features-heading" className="features">
            <h2 id="features-heading">Key Features</h2>
            <div role="list" aria-label="List of key features">
              <article role="listitem">
                <h3>Accessibility First</h3>
                <p>Built with WCAG 2.1 AA compliance standards.</p>
                <AccessibleImage
                  src="/accessibility-icon.svg"
                  alt="Accessibility icon showing a person in wheelchair"
                  width={64}
                  height={64}
                  className="feature-icon"
                />
              </article>

              <article role="listitem">
                <h3>Responsive Design</h3>
                <p>Works seamlessly across all devices and screen sizes.</p>
                <AccessibleImage
                  src="/responsive-icon.svg"
                  alt="Responsive design icon showing multiple device sizes"
                  width={64}
                  height={64}
                  className="feature-icon"
                />
              </article>
            </div>
          </section>

          {/* Contact section */}
          <section aria-labelledby="contact-heading" className="contact">
            <h2 id="contact-heading">Get in Touch</h2>
            <form aria-label="Contact form" role="form">
              <fieldset>
                <legend>Contact Information</legend>

                <label htmlFor="email">
                  Email Address
                  <span aria-label="required" className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-required="true"
                  aria-describedby="email-help"
                  placeholder="Enter your email"
                />
                <div id="email-help" role="tooltip">
                  We'll use your email to respond to your inquiry
                </div>

                <label htmlFor="message">
                  Message
                  <span aria-label="required" className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  aria-required="true"
                  aria-describedby="message-help"
                  placeholder="Enter your message"
                  rows={4}
                />
                <div id="message-help" role="tooltip">
                  Please provide as much detail as possible
                </div>

                <button type="submit" aria-label="Send message">
                  Send Message
                </button>
              </fieldset>
            </form>
          </section>
        </main>
      </Suspense>

      <footer role="contentinfo" className="footer">
        <p>&copy; 2024 Accessible Website. All rights reserved.</p>
        <nav aria-label="Footer navigation">
          <ul role="list">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms of Service</Link></li>
          </ul>
        </nav>
      </footer>

      <style jsx>{`
        /* Accessibility-focused styles */
        .skip-link {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        .skip-link:focus {
          position: fixed;
          top: 0;
          left: 0;
          width: auto;
          height: auto;
          background: #000;
          color: #fff;
          padding: 0.5rem 1rem;
          z-index: 1000;
        }

        .sr-only {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        /* WCAG AA compliant color contrast - 7:1 ratio minimum */
        .header {
          background: #1a1a1a;
          color: #ffffff;
          padding: 1rem;
        }

        /* WCAG AA compliant text colors */
        .hero {
          background: #f8f9fa;
          color: #212529;
          padding: 2rem;
        }

        .features {
          background: #ffffff;
          color: #212529;
          padding: 2rem;
        }

        .footer {
          background: #212529;
          color: #ffffff;
          padding: 1rem;
        }

        /* High contrast focus indicators */
        a:focus,
        button:focus,
        input:focus,
        textarea:focus {
          outline: 3px solid #005cbc;
          outline-offset: 2px;
        }

        /* Loading spinner for accessibility */
        .spinner {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #212529;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Required field indicators */
        .required {
          color: #d32f2f;
          font-weight: bold;
        }

        /* Semantic form styling */
        fieldset {
          border: none;
          padding: 0;
          margin: 0;
        }

        legend {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        label {
          display: block;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 0.5rem;
          margin-bottom: 1rem;
          border: 2px solid #495057;
          border-radius: 4px;
          font-size: 1rem;
        }

        input:focus, textarea:focus {
          border-color: #005cbc;
        }

        button {
          background: #005cbc;
          color: #ffffff;
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
        }

        button:hover {
          background: #003d7a;
        }

        button:disabled {
          background: #6c757d;
          cursor: not-allowed;
        }
      `}</style>
    </ErrorBoundary>
  );
}
