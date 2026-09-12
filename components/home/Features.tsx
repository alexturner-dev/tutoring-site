import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

import {
  Sprout,
  BookOpen,
  Star,
  Globe,
} from "lucide-react";


const features = [
  {
    title: "Personalized Learning",
    description:
      "Lessons are adapted to each student's pace, strengths, and learning style.",
    icon: Sprout,
  },
  {
    title: "Strong Foundations",
    description:
      "Build essential skills that support future academic success.",
    icon: BookOpen,
  },
  {
    title: "Confidence Growth",
    description:
      "Create a supportive environment where students feel comfortable learning.",
    icon: Star,
  },
  {
    title: "Flexible Learning",
    description:
      "Choose between local sessions and virtual tutoring options.",
    icon: Globe,
  },
];


export default function Features() {
  return (
    <section className="py-24 bg-[var(--surface)]">


      <Container>


        <FadeIn>


          <div className="mx-auto max-w-3xl text-center">


            <p className="font-semibold uppercase tracking-wider text-[var(--primary)]">
              Why Choose Us
            </p>



            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Helping Students Build Skills That Last
            </h2>



            <p className="mt-5 text-lg text-[var(--muted)]">
              Learning is a process of growth. Every lesson is designed
              to help students take another step forward.
            </p>



          </div>


        </FadeIn>





        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {features.map((feature,index)=>{

            const Icon = feature.icon;


            return (

              <SlideUp
                key={feature.title}
                delay={index*.1}
              >

                <Card>


                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)]">


                    <Icon
                      size={28}
                      className="text-[var(--primary)]"
                    />


                  </div>



                  <h3 className="mt-6 text-xl font-bold">
                    {feature.title}
                  </h3>



                  <p className="mt-3 leading-relaxed text-[var(--muted)]">
                    {feature.description}
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