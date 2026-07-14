export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-[#E8EEF6] text-[#121310]">

      {/* NAVBAR */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

        <div className="font-black text-2xl">
          Tutoring
        </div>

        <div className="flex gap-6 text-[#121310]/70 font-medium">

          <a 
            href="/" 
            className="hover:text-[#5E9BD9] transition"
          >
            Home
          </a>

          <a 
            href="/about" 
            className="hover:text-[#5E9BD9] transition"
          >
            About
          </a>

          <a 
            href="/pricing" 
            className="hover:text-[#5E9BD9] transition"
          >
            Pricing
          </a>

          <a
            href="/recommendations"
            className="text-[#5E9BD9] font-bold"
          >
            Recommendations
          </a>

        </div>

      </nav>


      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h1 className="text-5xl lg:text-6xl font-black leading-tight">
          Letters of
          <span className="block text-[#5E9BD9]">
            Recommendation
          </span>
        </h1>

        <div className="mt-6 h-2 w-24 rounded-full bg-[#FF91BB]" />


        <p className="mt-8 text-lg text-[#121310]/75 leading-relaxed max-w-3xl">
          These letters were written by individuals who have taught me
          and can speak to my character, dedication, and ability to help
          students learn and succeed.
        </p>


        {/* LETTER CARDS */}
        <div className="mt-16 space-y-12">


          {/* LETTER 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#121310]/5">

            <h2 className="text-2xl font-black text-[#5E9BD9] mb-6">
              Letter of Recommendation #1
            </h2>

            <div className="rounded-2xl overflow-hidden border border-[#121310]/10">
              <iframe
                src="/letters/recommendation-1.pdf"
                className="w-full h-[800px]"
              />
            </div>

            <a
              href="/letters/recommendation-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#5E9BD9] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold transition shadow-md"
            >
              Open Full PDF
            </a>

          </div>



          {/* LETTER 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#121310]/5">

            <h2 className="text-2xl font-black text-[#5E9BD9] mb-6">
              Letter of Recommendation #2
            </h2>

            <div className="rounded-2xl overflow-hidden border border-[#121310]/10">
              <iframe
                src="/letters/recommendation-2.pdf"
                className="w-full h-[800px]"
              />
            </div>

            <a
              href="/letters/recommendation-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#5E9BD9] hover:opacity-90 text-white px-6 py-3 rounded-xl font-bold transition shadow-md"
            >
              Open Full PDF
            </a>

          </div>


        </div>

      </section>


      {/* FOOTER RETURN */}
      <section className="pb-20 text-center">

        <a
          href="/"
          className="inline-block bg-[#121310] hover:bg-black text-white px-8 py-4 rounded-xl font-bold transition shadow-md"
        >
          Return Home
        </a>

      </section>


    </div>
  );
}