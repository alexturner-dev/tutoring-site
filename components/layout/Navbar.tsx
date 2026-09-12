"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sprout } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/services", label: "Services" },
  { href: "/recommendations", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];


export default function Navbar() {

  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };


    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);



  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);



  const isActive = (href: string) => {

    if (href === "/#contact") {
      return false;
    }

    return (
      pathname === href ||
      (href !== "/" &&
        pathname.startsWith(href))
    );
  };



  return (

    <header
      className={`
        sticky top-0 z-50
        transition-all duration-300

        ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl shadow-md"
            : "bg-white/60 backdrop-blur-md"
        }
      `}
    >


      <nav
        className={`
          mx-auto flex max-w-7xl
          items-center justify-between
          px-6

          transition-all duration-300

          ${
            scrolled
              ? "h-16"
              : "h-20"
          }
        `}
      >



        {/* LOGO */}

        <Link
  href="/"
  className="flex items-center gap-2 text-2xl font-black text-[var(--primary)] transition hover:scale-105"
>

          <Sprout
            size={30}
          />

          Dulce's Tutoring

        </Link>




        {/* DESKTOP */}

       <div className="hidden items-center gap-8 md:flex">

          {links.map((link) => (

            <Link
              key={link.href}
              href={link.href}
              className={`
                font-medium
                transition

                ${
                  isActive(link.href)

                  ? "text-[var(--primary)]"

                  : "text-gray-600 hover:text-[var(--primary)]"
                }
              `}
            >

              {link.label}

            </Link>

          ))}

        </div>




        {/* MOBILE BUTTON */}

        <button
  onClick={() => setMobileOpen(!mobileOpen)}
  className="rounded-xl p-2 transition hover:bg-black/5 md:hidden"

          aria-label="Toggle menu"
        >

          {
            mobileOpen

            ? <X size={28} />

            : <Menu size={28} />
          }

        </button>


      </nav>





      {/* MOBILE MENU */}

      <AnimatePresence>

        {
          mobileOpen && (

            <motion.div

              initial={{
                opacity:0,
                height:0
              }}

              animate={{
                opacity:1,
                height:"auto"
              }}

              exit={{
                opacity:0,
                height:0
              }}

              transition={{
                duration:.25
              }}

              className="
                overflow-hidden
                border-t
                border-black/5
                bg-white
                md:hidden
              "
            >

              <div
                className="
                  flex flex-col
                  gap-1
                  px-6
                  py-4
                "
              >

                {
                  links.map((link)=>(

                    <Link

                      key={link.href}

                      href={link.href}

                      className={`
                        rounded-xl
                        px-4
                        py-3
                        transition

                        ${
                          isActive(link.href)

                          ? "bg-[var(--secondary)] text-[var(--primary)] font-semibold"

                          : "hover:bg-gray-100"
                        }
                      `}
                    >

                      {link.label}

                    </Link>

                  ))
                }


              </div>


            </motion.div>

          )
        }


      </AnimatePresence>



    </header>

  );

}