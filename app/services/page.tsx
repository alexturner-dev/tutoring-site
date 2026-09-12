import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";
import SectionHeading from "@/components/ui/Section";
import Card from "@/components/ui/Card";

import {
  Calculator,
  BookOpen,
  Languages,
  Palette,
  Sparkles,
} from "lucide-react";


const services = [
  {
    title: "Mathematics",
    description:
      "Build strong foundations in arithmetic, problem solving, fractions, and early algebra skills through patient step-by-step instruction.",
    icon: Calculator,
  },
  {
    title: "Reading & Writing",
    description:
      "Improve comprehension, grammar, vocabulary, and writing confidence through guided practice and personalized support.",
    icon: BookOpen,
  },
  {
    title: "Beginner Spanish",
    description:
      "Learn vocabulary, pronunciation, and conversational skills through engaging lessons designed for beginners.",
    icon: Languages,
  },
  {
    title: "Beginner French",
    description:
      "Develop essential phrases, pronunciation, and communication skills while building a strong language foundation.",
    icon: Languages,
  },
  {
    title: "Crocheting",
    description:
      "Learn crochet basics or continue developing existing skills through creative hands-on lessons.",
    icon: Palette,
  },
];


export default function ServicesPage() {
  return (
    <main>

      {/* HERO */}
      <section className="py-24">

        <Container>

          <FadeIn>

            <SectionHeading
              eyebrow="Services"
              title="Learning Support Designed Around Each Student"
              description="Every student learns differently. Lessons are personalized around their goals, pace, and learning style."
            />

          </FadeIn>

        </Container>

      </section>



      {/* SERVICES GRID */}
      <section className="pb-24">

        <Container>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (

                <SlideUp key={service.title}>

                  <Card>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)]">

                      <Icon
                        size={28}
                        className="text-[var(--primary)]"
                      />

                    </div>


                    <h2 className="mt-6 text-2xl font-bold">
                      {service.title}
                    </h2>


                    <p className="mt-4 leading-relaxed text-gray-600">
                      {service.description}
                    </p>


                  </Card>

                </SlideUp>

              );

            })}

          </div>

        </Container>

      </section>




      {/* HOW IT WORKS */}
      <section className="bg-[var(--surface)] py-24">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-3xl text-center">

              <Sparkles
                className="mx-auto text-[var(--accent)]"
                size={36}
              />


              <h2 className="mt-6 text-4xl font-black">
                Personalized Learning That Grows With Your Student
              </h2>


              <p className="mt-5 text-lg text-gray-600">
                Sessions focus on understanding concepts, building confidence,
                and creating skills that last beyond the lesson.
              </p>


            </div>

          </FadeIn>

        </Container>

      </section>




      {/* CTA */}
      <section className="py-24">

        <Container>

          <FadeIn>

            <div className="rounded-[2rem] bg-[var(--primary)] px-8 py-16 text-center text-white shadow-xl">

              <h2 className="text-4xl font-black">
                Ready To Start Learning?
              </h2>


              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
                Create a learning plan designed around your student's needs.
              </p>


              <a
                href="/#contact"
                className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-[var(--primary)] transition hover:scale-105"
              >
                Book a Session
              </a>


            </div>

          </FadeIn>

        </Container>

      </section>


    </main>
  );
}