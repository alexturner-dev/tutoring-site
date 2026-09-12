import Image from "next/image";

import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/Section";
import Mission from "@/components/home/Mission";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

import {
  Sprout,
  Lightbulb,
  Star,
} from "lucide-react";


export default function AboutPage() {

  const values = [
    {
      icon: Sprout,
      title: "Growth",
      text: "Building skills step-by-step through consistent progress.",
    },
    {
      icon: Lightbulb,
      title: "Understanding",
      text: "Helping students learn the why behind each concept.",
    },
    {
      icon: Star,
      title: "Confidence",
      text: "Creating an environment where students feel capable.",
    },
  ];


  return (
    <>

      {/* HERO */}

      <section className="py-24">

        <Container>

          <div className="grid items-center gap-12 lg:grid-cols-2">


            <FadeIn>

              <p className="font-semibold uppercase tracking-wider text-[var(--primary)]">
                About Me
              </p>


              <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">
                Growing Confidence Through Learning
              </h1>


              <p className="mt-6 text-lg leading-relaxed text-[var(--muted)]">
                I’m Dulce Garcia, a student tutor passionate about helping
                younger students learn in a way that feels clear,
                supportive, and encouraging.
              </p>


              <p className="mt-5 text-lg leading-relaxed text-[var(--muted)]">
                As a homeschool student, I understand that every learner
                has a different pace and learning style. My goal is to help
                students build strong foundations while developing
                confidence in their abilities.
              </p>


              <div className="mt-8 h-2 w-24 rounded-full bg-[var(--accent)]" />

            </FadeIn>



            <SlideUp>

              <Card>

                <Image
                  src="/images/headshot.JPEG"
                  alt="Dulce Garcia"
                  width={400}
                  height={400}
                  className="mx-auto rounded-3xl object-cover shadow-lg"
                />


                <p className="mt-6 text-center font-medium text-[var(--muted)]">
                  Dulce Garcia
                </p>

              </Card>

            </SlideUp>


          </div>

        </Container>

      </section>





      {/* STORY */}

      <section className="bg-[var(--surface)] py-24">

        <Container>

          <FadeIn>

            <div className="mx-auto max-w-4xl">

              <SectionHeading
                title="Why I Started Tutoring"
                description="Learning should feel understandable, encouraging, and achievable."
              />


              <div className="mt-8 space-y-6 text-lg leading-relaxed text-[var(--muted)]">


                <p>
                  Learning can sometimes feel overwhelming when concepts are
                  not explained in a way that makes sense. I started tutoring
                  because I believe students deserve patience, encouragement,
                  and support.
                </p>


                <p>
                  My goal is not only to help students complete assignments,
                  but to help them understand the ideas behind what they are
                  learning.
                </p>


                <p>
                  Like planting a seed, education requires the right
                  environment, consistent care, and time to grow. Every lesson
                  is another step toward confidence and independence.
                </p>


              </div>

            </div>

          </FadeIn>

        </Container>

      </section>






      {/* VALUES */}

      <section className="py-24">

        <Container>


          <SectionHeading
            title="What I Focus On"
            centered
          />


          <div className="mt-12 grid gap-8 md:grid-cols-3">


            {values.map((item, index)=>{

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


                    <p className="mt-4 leading-relaxed text-[var(--muted)]">
                      {item.text}
                    </p>


                  </Card>


                </SlideUp>

              );

            })}


          </div>


        </Container>

      </section>





      <Mission />







      {/* CTA */}

      <section className="py-24">

        <Container>

          <FadeIn>

            <div className="rounded-[2rem] bg-[var(--primary)] px-8 py-16 text-center text-white shadow-xl md:px-16">


              <h2 className="text-4xl font-black md:text-5xl">
                Ready to Start Growing?
              </h2>


              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
                Build confidence and create a learning plan designed for
                your student.
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