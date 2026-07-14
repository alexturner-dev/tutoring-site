export default function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-[#E8EEF6] text-[#121310]">

      <section className="max-w-6xl mx-auto px-6 py-20">


        <h1 className="text-5xl lg:text-6xl font-black">
          Letters of
          <span className="block text-[#5E9BD9]">
            Recommendation
          </span>
        </h1>


        <div className="mt-6 h-2 w-24 rounded-full bg-[#FF91BB]" />


        <p className="mt-8 text-lg text-[#121310]/75 max-w-3xl">
          These letters were written by individuals who have taught me
          and can speak to my character, dedication, and ability to help
          students learn and succeed.
        </p>



        <div className="mt-16 grid md:grid-cols-2 gap-8">


          {/* Letter 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#121310]/5">

            <h2 className="text-xl font-black text-[#5E9BD9] mb-4">
              Recommendation Letter 1
            </h2>


            <div className="rounded-xl overflow-hidden border border-[#121310]/10">

              <iframe
                src="/letters/recommendation-1.pdf"
                className="w-full h-[500px]"
              />

            </div>


            <a
              href="/letters/recommendation-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-[#5E9BD9] text-white px-5 py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              Open PDF
            </a>

          </div>




          {/* Letter 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-[#121310]/5">

            <h2 className="text-xl font-black text-[#5E9BD9] mb-4">
              Recommendation Letter 2
            </h2>


            <div className="rounded-xl overflow-hidden border border-[#121310]/10">

              <iframe
                src="/letters/recommendation-2.pdf"
                className="w-full h-[500px]"
              />

            </div>


            <a
              href="/letters/recommendation-2.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block bg-[#5E9BD9] text-white px-5 py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              Open PDF
            </a>

          </div>


        </div>


      </section>

    </div>
  );
}