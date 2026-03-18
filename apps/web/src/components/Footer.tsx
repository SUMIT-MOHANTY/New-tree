export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12" role="contentinfo">
      <div className="container">
        <div className="text-center">
          <p className="text-gray-600">
             2024 Landing Page. All rights reserved.
          </p>
          <div className="mt-4 space-x-6">
            <a href="/privacy" className="text-sm text-gray-600 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-gray-600 hover:text-gray-900">
              Terms of Service
            </a>
            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
