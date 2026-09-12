import Container from "@/components/ui/Container";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";


export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--primary)] py-24 text-white"
    >

      <Container>

        <FadeIn>

          <div className="mx-auto max-w-3xl text-center">


            <h2 className="text-4xl font-black md:text-5xl">
              Ready To Start Growing?
            </h2>


            <p className="mt-5 text-lg text-white/90">
              Tell me about your student's goals and create a learning plan
              designed around their needs.
            </p>



            <form
              action="https://formspree.io/f/xykovynb"
              method="POST"
              className="mt-10 space-y-6 rounded-3xl bg-white p-8 text-left shadow-xl"
            >


              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  px-4
                  py-3
                  text-[var(--text)]
                  outline-none
                  focus:ring-2
                  focus:ring-[var(--primary)]
                "
              />



              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  px-4
                  py-3
                  text-[var(--text)]
                  outline-none
                  focus:ring-2
                  focus:ring-[var(--primary)]
                "
              />



              <textarea
                name="message"
                placeholder="Tell me what your student needs help with..."
                rows={5}
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-[var(--border)]
                  px-4
                  py-3
                  text-[var(--text)]
                  outline-none
                  focus:ring-2
                  focus:ring-[var(--primary)]
                "
              />



             <div className="flex justify-center">

  <Button
    variant="secondary"
    className="
      border-0
      bg-white
      text-[var(--primary)]
      hover:bg-white/90
    "
  >
    Send Message
  </Button>

</div>


            </form>


          </div>

        </FadeIn>

      </Container>

    </section>
  );
}