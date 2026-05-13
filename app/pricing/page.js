export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#E8EEF6] text-[#121310]">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <div className="font-black text-2xl">
          Tutoring
        </div>

        <div className="flex gap-6 text-[#121310]/70 font-medium">
          <a href="/" className="hover:text-[#5E9BD9] transition">
            Home
          </a>

          <a href="/about" className="hover:text-[#5E9BD9] transition">
            About
          </a>

          <a href="/pricing" className="text-[#5E9BD9] font-bold">
            Pricing
          </a>
        </div>

      </nav>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <p className="text-[#5E9BD9] font-bold uppercase tracking-wider mb-4">
          Pricing
        </p>

        <h1 className="text-5xl lg:text-6xl font-black leading-tight">
          Simple & Transparent
        </h1>

        <p className="mt-6 text-lg text-[#121310]/70 max-w-2xl mx-auto leading-relaxed">
          Affordable one-on-one tutoring designed to help students build confidence, improve understanding, and make steady progress.
        </p>

      </section>

      {/* PRICING CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-8">

        {/* FREE SESSION */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#121310]/5 relative overflow-hidden">

          <div className="absolute top-0 right-0 bg-[#FF91BB] text-white text-sm font-bold px-4 py-2 rounded-bl-2xl">
            MOST POPULAR
          </div>

          <h2 className="text-3xl font-black mb-4">
            First Session
          </h2>

          <p className="text-5xl font-black text-[#5E9BD9]">
            FREE
          </p>

          <p className="mt-6 text-[#121310]/70 leading-relaxed">
            The first session is completely free and helps evaluate the student’s learning style, current level, and goals.
          </p>

          <div className="mt-8 h-2 w-24 rounded-full bg-[#FF91BB]"></div>

        </div>

        {/* REGULAR SESSIONS */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#121310]/5">

          <h2 className="text-3xl font-black mb-4">
            Regular Sessions
          </h2>

          <p className="text-5xl font-black text-[#5E9BD9]">
            $15<span className="text-2xl">/hour</span>
          </p>

          <p className="mt-6 text-[#121310]/70 leading-relaxed">
            After the free consultation session, tutoring is $15 per hour with personalized support tailored to the student’s needs.
          </p>

          <div className="mt-8 h-2 w-24 rounded-full bg-[#5E9BD9]"></div>

        </div>

      </section>

      {/* POLICY */}
      <section className="bg-white py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-black mb-12 text-center">
            Session Information
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-[#E8EEF6] rounded-2xl p-8 shadow-md">
              <div className="text-3xl mb-4">⏰</div>

              <h3 className="text-2xl font-bold mb-3">
                Session Length
              </h3>

              <p className="text-[#121310]/70 leading-relaxed">
                Sessions are typically 60 minutes unless discussed and arranged in advance.
              </p>
            </div>

            <div className="bg-[#E8EEF6] rounded-2xl p-8 shadow-md">
              <div className="text-3xl mb-4">📚</div>

              <h3 className="text-2xl font-bold mb-3">
                Personalized Support
              </h3>

              <p className="text-[#121310]/70 leading-relaxed">
                Students can bring homework, class materials, worksheets, or specific topics they need help understanding.
              </p>
            </div>

            <div className="bg-[#E8EEF6] rounded-2xl p-8 shadow-md">
              <div className="text-3xl mb-4">💻</div>

              <h3 className="text-2xl font-bold mb-3">
                Flexible Format
              </h3>

              <p className="text-[#121310]/70 leading-relaxed">
                Sessions are available in-person at the Orange Public Library or virtually through Zoom.
              </p>
            </div>

            <div className="bg-[#E8EEF6] rounded-2xl p-8 shadow-md">
              <div className="text-3xl mb-4">⭐</div>

              <h3 className="text-2xl font-bold mb-3">
                Stress-Free Learning
              </h3>

              <p className="text-[#121310]/70 leading-relaxed">
                The focus is on patience, encouragement, and helping students feel confident while learning.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#5E9BD9] text-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-white/90 mb-8">
            Book a free first session and build a learning plan that works for your student.
          </p>

          <a
            href="/#contact"
            className="bg-[#121310] hover:bg-black px-8 py-4 rounded-xl font-bold transition inline-block"
          >
            Book a Session
          </a>

        </div>

      </section>

    </div>
  );
}