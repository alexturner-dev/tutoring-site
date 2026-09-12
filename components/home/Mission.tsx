import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

import {
  Sprout,
  BookOpen,
  HeartHandshake,
  TrendingUp,
} from "lucide-react";


export default function Mission() {
  return (
    <section className="py-24">

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* TEXT */}

          <FadeIn>

            <p className="font-semibold uppercase tracking-wider text-[var(--primary)]">
              My Teaching Philosophy
            </p>


            <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
              Building Understanding Before Memorization
            </h2>


            <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
              Every student learns differently. My approach focuses on
              understanding concepts rather than simply memorizing steps.
              By breaking ideas into smaller pieces and connecting them
              to real-world examples, students build skills that last.
            </p>


            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
              Lessons are designed around each student's pace, strengths,
              and goals. The focus is creating a supportive environment
              where students feel comfortable asking questions and
              developing confidence.
            </p>



            {/* PHILOSOPHY CARDS */}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">


              <div className="rounded-2xl bg-[var(--secondary)] p-5">

                <BookOpen
                  size={32}
                  className="text-[var(--primary)]"
                />

                <h3 className="mt-3 font-bold">
                  Strong Foundations
                </h3>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Learning concepts that support future success
                </p>

              </div>




              <div className="rounded-2xl bg-[var(--secondary)] p-5">

                <HeartHandshake
                  size={32}
                  className="text-[var(--primary)]"
                />

                <h3 className="mt-3 font-bold">
                  Supportive Learning
                </h3>

                <p className="mt-1 text-sm text-[var(--muted)]">
                  Encouraging students through every step
                </p>

              </div>


            </div>


          </FadeIn>





          {/* VISUAL */}

          <SlideUp>

            <Card>

              <div className="rounded-3xl bg-[var(--secondary)] p-8">


                <div className="rounded-3xl bg-white p-8">


                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]">

                    <Sprout
                      size={38}
                      className="text-[var(--primary)]"
                    />

                  </div>




                  <h3 className="mt-6 text-2xl font-bold">
                    Every Student Can Grow
                  </h3>




                  <p className="mt-4 leading-relaxed text-[var(--muted)]">
                    With patience, encouragement, and personalized
                    support, students can develop the skills and
                    confidence needed to become independent learners.
                  </p>




                  <div className="mt-8 rounded-2xl bg-[var(--secondary)] p-5">

                    <div className="flex items-center gap-3">

                      <TrendingUp
                        size={22}
                        className="text-[var(--primary)]"
                      />


                      <p className="font-semibold">
                        Progress happens one lesson at a time
                      </p>

                    </div>

                  </div>


                </div>


              </div>


            </Card>


          </SlideUp>


        </div>


      </Container>


    </section>
  );
}