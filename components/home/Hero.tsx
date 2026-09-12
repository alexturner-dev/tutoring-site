import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

import {
  Sprout,
  BookOpen,
  Users,
} from "lucide-react";


export default function Hero() {
  return (
    <section className="py-24">

      <Container>

        <div className="grid items-center gap-12 lg:grid-cols-2">


          {/* TEXT */}

          <FadeIn>

            <p className="font-semibold uppercase tracking-wider text-[var(--primary)]">
              Personalized Tutoring • Growth • Confidence
            </p>


            <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">

              Helping Students

              <span className="block text-[var(--primary)]">
                Grow With Confidence
              </span>

            </h1>



            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)]">

              Personalized tutoring designed to help students build strong
              foundations, develop confidence, and discover a love for
              learning.

            </p>




            <div className="mt-8 flex flex-wrap gap-4">


              <Button
                href="/#contact"
              >
                Book a Session
              </Button>



              <Button
                href="/services"
                variant="secondary"
              >
                Explore Services
              </Button>


            </div>





            {/* QUICK STATS */}

            <div className="mt-10 grid gap-6 sm:grid-cols-3">


              <div>

                <p className="font-black text-xl">
                  K–6
                </p>

                <p className="text-sm text-[var(--muted)]">
                  Academic Support
                </p>

              </div>



              <div>

                <p className="font-black text-xl">
                  1-on-1
                </p>

                <p className="text-sm text-[var(--muted)]">
                  Personalized Lessons
                </p>

              </div>



              <div>

                <p className="font-black text-xl">
                  Flexible
                </p>

                <p className="text-sm text-[var(--muted)]">
                  Online + Local
                </p>

              </div>


            </div>


          </FadeIn>








          {/* VISUAL */}

          <SlideUp>


            <div className="rounded-[2rem] bg-[var(--secondary)] p-8 shadow-xl">


              <div className="rounded-3xl bg-white p-8">


                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]">


                  <Sprout
                    size={38}
                    className="text-[var(--primary)]"
                  />


                </div>





                <h2 className="mt-6 text-3xl font-black">

                  Every Student Starts Somewhere

                </h2>





                <p className="mt-4 leading-relaxed text-[var(--muted)]">

                  With the right support, small steps become lasting
                  growth. Every lesson builds confidence, understanding,
                  and independence.

                </p>





                <div className="mt-8 space-y-4">


                  <div className="flex items-center gap-3">


                    <BookOpen
                      size={20}
                      className="text-[var(--primary)]"
                    />


                    <span className="text-sm text-[var(--muted)]">
                      Building strong foundations
                    </span>


                  </div>




                  <div className="flex items-center gap-3">


                    <Users
                      size={20}
                      className="text-[var(--primary)]"
                    />


                    <span className="text-sm text-[var(--muted)]">
                      Personalized support
                    </span>


                  </div>


                </div>





                <div className="mt-8 h-3 overflow-hidden rounded-full bg-[var(--border)]">


                  <div className="h-full w-3/4 rounded-full bg-[var(--primary)]" />


                </div>




                <p className="mt-3 text-sm text-[var(--muted)]">

                  Growing one step at a time

                </p>



              </div>


            </div>


          </SlideUp>



        </div>


      </Container>


    </section>
  );
}