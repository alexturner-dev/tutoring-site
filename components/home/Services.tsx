import ReactCountryFlag from "react-country-flag";

const services = [
  {
    title: "Mathematics",
    description:
      "Build strong foundations in arithmetic, problem solving, fractions, and early algebra skills.",
    icon: "📐",
  },
  {
    title: "Reading & Writing",
    description:
      "Improve comprehension, grammar, vocabulary, and writing confidence through guided practice.",
    icon: "📚",
  },
  {
    title: "Beginner Spanish",
    description:
      "Learn vocabulary, pronunciation, and conversational skills through engaging lessons.",
    icon: "MX",
    flag: true,
  },
  {
    title: "Beginner French",
    description:
      "Develop essential phrases, pronunciation, and communication skills from the ground up.",
    icon: "FR",
    flag: true,
  },
  {
    title: "Crocheting",
    description:
      "Learn how to crochet or continue building your skill's for beginners and intermediate learners alike.",
    icon: "🧶",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="max-w-3xl">

          <p className="font-semibold text-green-700">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-black text-gray-900 md:text-5xl">
            Learning Support Designed Around Each Student
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-gray-600">
            Every student learns differently. Lessons are personalized to
            match their goals, pace, and learning style.
          </p>

        </div>


        {/* Cards */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >

              <div className="text-4xl">
               {service.flag ? (
              <ReactCountryFlag
                countryCode={service.icon}
                svg
                style={{
                width: "1em",
                height: "1em",
                 }}
                  />
                  ) : (
                 service.icon
                   )}
                  </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}