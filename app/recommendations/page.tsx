import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/Section";

import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

import {
  FileText,
  ExternalLink,
} from "lucide-react";


const letters = [
  {
    title: "Recommendation Letter 1",
    file: "/pdfs/recommendation-1.pdf",
  },
  {
    title: "Recommendation Letter 2",
    file: "/pdfs/recommendation-2.pdf",
  },
];


export default function RecommendationsPage() {
  return (
    <>


      {/* HERO */}

      <section className="py-24">

        <Container>

          <FadeIn>

            <SectionHeading
              eyebrow="Recommendations"
              title="Letters of Recommendation"
              description="Feedback from people who have supported my dedication to learning, leadership, and helping others grow."
            />

          </FadeIn>

        </Container>

      </section>





      {/* LETTERS */}

      <section className="pb-24">

        <Container>

          <div className="grid gap-8 md:grid-cols-2">


            {letters.map((letter, index) => (

              <SlideUp
                key={letter.title}
                delay={index * 0.1}
              >

                <Card>


                  {/* HEADER */}

                  <div className="flex items-center gap-4">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--secondary)]">

                      <FileText
                        size={28}
                        className="text-[var(--primary)]"
                      />

                    </div>


                    <h2 className="text-2xl font-bold">
                      {letter.title}
                    </h2>

                  </div>





                  {/* PDF */}

                  <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]">

                    <iframe
                      src={letter.file}
                      className="h-[500px] w-full"
                      title={letter.title}
                    />

                  </div>





                  {/* BUTTON */}

                  <div className="mt-6">

                   <Button
  href={letter.file}
  target="_blank"
  className="gap-2"
>

                      View Letter

                      <ExternalLink size={18}/>

                    </Button>

                  </div>


                </Card>


              </SlideUp>


            ))}


          </div>


        </Container>

      </section>






      {/* CTA */}

      <section className="py-24">


        <Container>


          <FadeIn>


            <div className="rounded-[2rem] bg-[var(--primary)] px-8 py-16 text-center text-white shadow-xl md:px-16">


              <h2 className="text-4xl font-black md:text-5xl">
                Interested in Working Together?
              </h2>


              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
                Start building confidence through personalized tutoring.
              </p>



              <div className="mt-8">


                <Button
                  href="/#contact"
                  variant="secondary"
                  className="
                  border-0
                  bg-white
                  text-[var(--primary)]
                  hover:bg-white/90
                  "
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