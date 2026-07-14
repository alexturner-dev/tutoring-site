export default function TutoringLandingPage() {
  const services = [
    {
      title: "Math Tutoring (K–6)",
      desc: "Build strong foundations in arithmetic, fractions, word problems, and early algebra skills.",
    },
    {
      title: "Reading & Writing (K–6)",
      desc: "Improve comprehension, writing clarity, grammar, and confidence.",
    },
    {
      title: "Beginner Spanish",
      desc: "Learn basic vocabulary, pronunciation, and simple conversation skills.",
    },
    {
      title: "Beginner French",
      desc: "Start with essential phrases, pronunciation, and everyday communication.",
    },

     {
      title: "Beginner/ Intermediate Crochet",
      desc: "Learn hands on crocheting and continue to improve your skills.",
    },

  ];

  return (
    <div className="min-h-screen bg-[#E8EEF6] text-[#121310]">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="font-black text-2xl text-[#121310]">
          Tutoring
        </div>

        <div className="flex gap-6 text-[#121310]/70 font-medium">
  <a href="/" className="hover:text-[#5E9BD9] transition">Home</a>
  <a href="/about" className="hover:text-[#5E9BD9] transition">About</a>
  <a href="#services" className="hover:text-[#5E9BD9] transition">Services</a>
  <a href="/pricing" className="hover:text-[#5E9BD9] transition">Pricing</a>
  <a href="/recommendations" className="hover:text-[#5E9BD9] transition">
    Recommendations
  </a>
  <a href="#contact" className="hover:text-[#5E9BD9] transition">Contact</a>
</div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <h1 className="text-5xl lg:text-6xl font-black leading-tight">
            Personal Tutoring
            <span className="block text-[#5E9BD9]">
              K–6 + Beginner Languages
            </span>
          </h1>

          <p className="mt-6 text-lg text-[#121310]/75 leading-relaxed">
            Helping students build confidence and actually understand what they’re learning in a calm, supportive environment.
          </p>

          <p className="mt-6 text-sm text-[#121310]/70">
            Local library's or park's
          </p>

          <p className="mt-2 text-sm text-[#121310]/70">
            💻 Virtual tutoring available via Zoom
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#contact"
              className="bg-[#5E9BD9] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold transition shadow-md"
            >
              Book a Session
            </a>

            <a
              href="#services"
              className="border border-[#121310]/15 hover:border-[#5E9BD9] px-6 py-3 rounded-xl transition"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-10 shadow-xl border border-[#121310]/5">
          <h3 className="text-2xl font-bold mb-4 text-[#5E9BD9]">
            Personalized Learning
          </h3>

          <p className="text-[#121310]/75 leading-relaxed">
            Every student learns differently. Sessions are tailored to match each student’s pace, strengths, and learning style.
          </p>

          <div className="mt-6 h-2 w-24 rounded-full bg-[#FF91BB]"></div>
        </div>

      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-black mb-12 text-[#121310]">
          Services
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-lg border border-[#121310]/5 hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-bold mb-3 text-[#5E9BD9]">
                {service.title}
              </h3>

              <p className="text-[#121310]/75 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-black mb-12 text-center">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Book a session",
              "Bring materials or homework (Physical or Mental) ",
  
              "Improve skills and build confidence",
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-[#E8EEF6] rounded-2xl p-8 shadow-md text-center"
              >
                <div className="text-4xl font-black text-[#5E9BD9] mb-4">
                  {idx + 1}
                </div>

                <p className="font-semibold text-[#121310]">
                  {step}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="bg-[#5E9BD9] text-white py-24"
      >

        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-black mb-6">
            Book a Session
          </h2>

          <p className="mb-6 font-medium text-white/90">
            📍 Orange Public Library – Main Branch
            <br />
            💻 Zoom available
          </p>

          <form
            className="grid gap-4"
            action="https://formspree.io/f/xykovynb"
            method="POST"
          >
            <input
              name="name"
              className="p-4 rounded-xl text-black"
              placeholder="Name"
              required
            />

            <input
              name="email"
              className="p-4 rounded-xl text-black"
              placeholder="Email"
              required
            />

            <textarea
              name="message"
              className="p-4 rounded-xl text-black"
              placeholder="What does the student need help with?"
              required
            />

            <button className="bg-[#121310] hover:bg-black py-4 rounded-xl font-bold transition">
              Submit
            </button>
          </form>

        </div>

      </section>

    </div>
  );
}