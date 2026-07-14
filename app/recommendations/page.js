export default function RecommendationsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-black mb-8">
        Letters of Recommendation
      </h1>

      <p className="text-lg text-gray-600 mb-10">
        Read letters of recommendation from parents, teachers, and mentors.
      </p>

      <div className="space-y-8">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Letter of Recommendation #1
          </h2>

          <a
            href="/letters/recommendation-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Letter
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">
            Letter of Recommendation #2
          </h2>

          <a
            href="/letters/recommendation-2.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Letter
          </a>
        </div>
      </div>
    </main>
  );
}