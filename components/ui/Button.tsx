import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;

  href?: string;

  onClick?: () => void;

  variant?: "primary" | "secondary" | "light";

  className?: string;

  target?: string;

  rel?: string;
};


export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  target,
  rel,
}: ButtonProps) {


const styles =
variant === "primary"
? "bg-[var(--primary)] text-white hover:scale-105 hover:shadow-lg"

: variant === "secondary"
? "border border-[var(--primary)] text-[var(--primary)] bg-white hover:bg-[var(--background)] hover:scale-105"

: "bg-white text-[var(--primary)] hover:bg-white/90 hover:scale-105 hover:shadow-lg";

  const classes = `
    inline-flex
    items-center
    justify-center
    rounded-full
    px-7
    py-3
    font-semibold
    transition-all
    duration-300
    ${styles}
    ${className}
  `;


  if (href) {

    // External links / PDFs
    if (target || href.startsWith("/") === false) {

      return (
        <a
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          {children}
        </a>
      );

    }


    // Internal Next.js navigation
    return (
      <Link
        href={href}
        className={classes}
      >
        {children}
      </Link>
    );

  }


  return (
    <button
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );

}