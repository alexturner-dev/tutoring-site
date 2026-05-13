export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E8EEF6] text-[#121310]">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <p className="text-[#5E9BD9] font-bold uppercase tracking-wider mb-4">
            About Me
          </p>

          <h1 className="text-5xl lg:text-6xl font-black leading-tight">
            Meet Dulce Garcia
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-[#121310]/75">
            I’m a homeschooled 9th grade student passionate about helping younger students learn in a way that feels clear, supportive, and encouraging.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-[#121310]/75">
            I’m fluent in Spanish, currently in my 4th year of French, and studying Algebra 1. My goal is to help students feel more confident and less overwhelmed when learning new subjects.
          </p>

          <div className="mt-8 h-2 w-24 rounded-full bg-[#FF91BB]"></div>
        </div>

        {/* HEADSHOT PLACEHOLDER */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#121310]/5 p-8 flex items-center justify-center min-h-[420px]">

          <div className="text-center">
            <div className="w-48 h-48 mx-auto rounded-full bg-[#E8EEF6] border-4 border-[#5E9BD9] flex items-center justify-center text-[#5E9BD9] text-sm font-semibold">
              Your Headshot Here
            </div>

            <p className="mt-6 text-[#121310]/60 text-sm">
              Replace this placeholder later with your photo.
            </p>
          </div>

        </div>

      </section>

      {/* STORY */}
      <section className="bg-white py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-black mb-10">
            Why I Started Tutoring
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-[#121310]/75">

            <p>
              I started tutoring because I believe learning shouldn’t feel stressful or confusing. Sometimes students just need concepts explained differently, more patiently, and at their own pace.
            </p>

            <p>
              My goal is simple: help students actually understand what they’re learning instead of memorizing steps without meaning.
            </p>

            <p>
              Every student learns differently, so sessions are adapted to their strengths, pace, and areas where they need support. No pressure—just steady progress and encouragement.
            </p>

            <p>
              Whether it’s multiplication, reading comprehension, beginner Spanish, or starting French, I aim to make learning feel manageable and even enjoyable.
            </p>

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-black mb-12 text-center">
          What I Focus On
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#121310]/5">
            <div className="text-[#5E9BD9] text-3xl mb-4">📘</div>

            <h3 className="text-2xl font-bold mb-3">
              Clarity
            </h3>

            <p className="text-[#121310]/70 leading-relaxed">
              Breaking down concepts so students understand the “why,” not just the steps.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#121310]/5">
            <div className="text-[#5E9BD9] text-3xl mb-4">⭐</div>

            <h3 className="text-2xl font-bold mb-3">
              Confidence
            </h3>

            <p className="text-[#121310]/70 leading-relaxed">
              Helping students feel capable and reduce frustration with learning.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#121310]/5">
            <div className="text-[#5E9BD9] text-3xl mb-4">🌱</div>

            <h3 className="text-2xl font-bold mb-3">
              Consistency
            </h3>

            <p className="text-[#121310]/70 leading-relaxed">
              Building skills step-by-step so progress actually sticks.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#5E9BD9] text-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-black mb-6">
            Ready to get started?
          </h2>

          <p className="text-lg mb-8 text-white/90">
            Let’s create a learning plan that helps your student grow with confidence.
          </p>

          <a
            href="/"
            className="bg-[#121310] hover:bg-black px-6 py-3 rounded-xl font-bold transition"
          >
            Back to Home
          </a>

        </div>

      </section>

    </div>
  );
}