import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">
            🌱 Dulce's Tutoring
          </h2>

          <p className="leading-7 text-gray-600">
            Helping students build confidence, develop strong academic
            foundations, and grow into lifelong learners through personalized
            tutoring.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">
            Navigation
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>
              <Link href="/" className="hover:text-green-700">
                Home
              </Link>
            </li>

            <li>
              <Link href="/about" className="hover:text-green-700">
                About
              </Link>
            </li>

             <li>
              <Link href="/pricing" className="hover:text-green-700">
                Pricing
              </Link>
            </li>

            <li>
              <Link href="/recommendations" className="hover:text-green-700">
                Recommendations
              </Link>
            </li>

            <li>
              <Link href="/#contact" className="hover:text-green-700">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">
            Services
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>Mathematics</li>
            <li>Reading & Writing</li>
            <li>Spanish</li>
            <li>French</li>
            <li>Crochet</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 font-semibold text-gray-900">
            Contact
          </h3>

          <div className="space-y-3 text-gray-600">
            <p>📍 Local libraries & parks</p>

            <p>💻 Virtual tutoring via Zoom</p>

        
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Dulce's Tutoring. All rights reserved.
          </p>

          <p>
            Growing confident learners, one lesson at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}