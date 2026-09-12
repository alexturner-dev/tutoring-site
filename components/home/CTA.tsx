import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/animations/FadeIn";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24"
    >

      <Container>

        <FadeIn>

          <div className="rounded-[2rem] bg-[var(--primary)] px-8 py-16 text-center text-white shadow-xl md:px-16">


            <h2 className="text-4xl font-black md:text-5xl">
              Ready To Help Your Student Grow?
            </h2>


            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
              Start with a personalized tutoring session designed around your
              student's goals, challenges, and learning style.
            </p>



            <div className="mt-8 flex flex-wrap justify-center gap-4">


              <Button href="/#contact">
                Book a Session
              </Button>



              <Button
                href="/about"
                variant="secondary"
              >
                Learn More
              </Button>


            </div>


          </div>

        </FadeIn>

      </Container>

    </section>
  );
}