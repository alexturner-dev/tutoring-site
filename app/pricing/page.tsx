import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/Section";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

import {
  Sprout,
  Clock,
  BookOpen,
  Monitor,
  HeartHandshake,
} from "lucide-react";


export default function PricingPage() {
  return (
    <>


      {/* HERO */}

      <section className="py-24">

        <Container>

          <FadeIn>

            <SectionHeading
              eyebrow="Pricing"
              title="Simple & Transparent"
              description="Affordable one-on-one tutoring designed to help students grow confidence, improve understanding, and develop strong learning habits."
            />

          </FadeIn>

        </Container>

      </section>




      {/* PRICING CARDS */}

      <section className="pb-24">

        <Container>

          <div className="grid gap-8 md:grid-cols-2">


            <SlideUp>

              <Card>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)]">

                  <Sprout
                    size={30}
                    className="text-[var(--primary)]"
                  />

                </div>


                <h2 className="mt-6 text-3xl font-bold">
                  First Session
                </h2>


                <p className="mt-4 text-5xl font-black text-[var(--primary)]">
                  FREE
                </p>


                <p className="mt-6 leading-relaxed text-[var(--muted)]">
                  A first meeting to understand the student's needs,
                  learning style, and goals while creating a plan for
                  future lessons.
                </p>


              </Card>

            </SlideUp>





            <SlideUp delay={0.1}>

              <Card>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)]">

                  <HeartHandshake
                    size={30}
                    className="text-[var(--primary)]"
                  />

                </div>



                <h2 className="mt-6 text-3xl font-bold">
                  Regular Sessions
                </h2>



                <p className="mt-4 text-5xl font-black text-[var(--primary)]">
                  $20
                  <span className="text-2xl">
                    /hour
                  </span>
                </p>



                <p className="mt-6 leading-relaxed text-[var(--muted)]">
                  Personalized tutoring sessions focused on improving
                  understanding, building confidence, and developing
                  strong learning habits.
                </p>


              </Card>

            </SlideUp>


          </div>


        </Container>


      </section>






      {/* DETAILS */}

      <section className="bg-[var(--surface)] py-24">


        <Container>


          <FadeIn>

            <SectionHeading
              title="Session Information"
              description="Everything is designed around creating a comfortable and effective learning environment."
              centered
            />

          </FadeIn>





          <div className="mt-12 grid gap-6 md:grid-cols-2">


            {[
              {
                icon: Clock,
                title: "Session Length",
                text: "Sessions are typically 60 minutes.",
              },
              {
                icon: BookOpen,
                title: "Materials",
                text: "Students may bring homework, worksheets, or specific topics they need help understanding.",
              },
              {
                icon: Monitor,
                title: "Format",
                text: "Available in-person or virtually depending on scheduling.",
              },
              {
                icon: Sprout,
                title: "Learning Style",
                text: "Lessons adapt to each student's pace, strengths, and goals.",
              },
            ].map((item, index) => {

              const Icon = item.icon;


              return (

                <SlideUp
                  key={item.title}
                  delay={index * 0.1}
                >

                  <Card>


                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)]">

                      <Icon
                        size={28}
                        className="text-[var(--primary)]"
                      />

                    </div>



                    <h3 className="mt-6 text-2xl font-bold">
                      {item.title}
                    </h3>



                    <p className="mt-3 leading-relaxed text-[var(--muted)]">
                      {item.text}
                    </p>


                  </Card>


                </SlideUp>

              );

            })}


          </div>


        </Container>


      </section>







      {/* CTA */}


      <section className="py-24 bg-[var(--primary)] text-white">


        <Container>


          <FadeIn>


            <div className="text-center">


              <h2 className="text-4xl font-black md:text-5xl">
                Start Building Confidence Today
              </h2>



              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
                Create a learning plan designed around your student's needs.
              </p>




              <div className="mt-8">


                <Button
                  href="/#contact"
                  variant="secondary"
                  className="border-0 bg-white text-[var(--primary)] hover:bg-white/90"
                >
                  Book a Session
                </Button>


              </div>


            </div>


          </FadeIn>


        </Container>


      </section>


    </>
  );
}