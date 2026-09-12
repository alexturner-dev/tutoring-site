const testimonials = [
  {
    quote:
      "The lessons helped me feel more confident and understand topics that used to be difficult.",
    name: "Student Feedback",
    role: "Tutoring Student",
  },
  {
    quote:
      "A supportive learning environment made it easier to ask questions and improve.",
    name: "Parent Feedback",
    role: "Family Testimonial",
  },
  {
    quote:
      "Personalized instruction helped create steady progress and stronger learning habits.",
    name: "Learning Experience",
    role: "Tutoring Journey",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-semibold text-green-700">
            Testimonials
          </p>

          <h2 className="mt-3 text-4xl font-black text-gray-900 md:text-5xl">
            Growth From Real Learning Experiences
          </h2>

        </div>


        <div className="mt-14 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl bg-gray-50 p-8"
            >

              <div className="text-4xl text-green-700">
                "
              </div>

              <p className="mt-4 leading-relaxed text-gray-600">
                {testimonial.quote}
              </p>


              <div className="mt-6">

                <p className="font-bold text-gray-900">
                  {testimonial.name}
                </p>

                <p className="text-sm text-gray-500">
                  {testimonial.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}