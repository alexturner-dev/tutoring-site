import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

import {
  Calendar,
  Target,
  BookOpen,
  Sprout,
} from "lucide-react";


const steps = [
  {
    number: "01",
    title: "Schedule a Session",
    description:
      "Reach out and choose a tutoring option that works best for your student.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Understand Their Goals",
    description:
      "Identify strengths, challenges, and areas where support is needed.",
    icon: Target,
  },
  {
    number: "03",
    title: "Personalized Learning",
    description:
      "Work through lessons designed around the student's individual needs.",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Grow With Confidence",
    description:
      "Build skills, independence, and confidence one step at a time.",
    icon: Sprout,
  },
];


export default function Process() {
  return (
    <section className="py-24">

      <Container>


        {/* HEADER */}

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">

            <p className="font-semibold uppercase tracking-wider text-[var(--primary)]">
              How It Works
            </p>


            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Simple Steps. Meaningful Growth.
            </h2>


            <p className="mt-5 text-lg text-[var(--muted)]">
              A straightforward approach that helps students receive the
              support they need without unnecessary complexity.
            </p>


          </div>

        </FadeIn>





        {/* STEPS */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {steps.map((step,index)=>{

            const Icon = step.icon;


            return (

              <SlideUp
                key={step.number}
                delay={index * .1}
              >

                <Card>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)]">


                    <Icon
                      size={28}
                      className="text-[var(--primary)]"
                    />


                  </div>




                  <p className="mt-6 text-4xl font-black text-[var(--primary)]">
                    {step.number}
                  </p>



                  <h3 className="mt-4 text-xl font-bold">
                    {step.title}
                  </h3>



                  <p className="mt-3 leading-relaxed text-[var(--muted)]">
                    {step.description}
                  </p>



                </Card>


              </SlideUp>

            );


          })}


        </div>


      </Container>


    </section>
  );
}