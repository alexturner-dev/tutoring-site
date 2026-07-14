import "./globals.css";

export const metadata = {
  title: "Tutoring",
  description: "Personal tutoring services for K–6 students and beginner languages",
};


function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

      <div className="font-black text-2xl text-[#121310]">
        Tutoring
      </div>


      <div className="flex gap-6 text-[#121310]/70 font-medium">

        <a 
          href="/" 
          className="hover:text-[#5E9BD9] transition"
        >
          Home
        </a>

        <a 
          href="/about" 
          className="hover:text-[#5E9BD9] transition"
        >
          About
        </a>

        <a 
          href="/pricing" 
          className="hover:text-[#5E9BD9] transition"
        >
          Pricing
        </a>

        <a 
          href="/recommendations" 
          className="hover:text-[#5E9BD9] transition"
        >
          Recommendations
        </a>

      </div>

    </nav>
  );
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <meta
          name="google-site-verification"
          content="EfSi9H_-Hg0RF6ie9DasXu9dwl0D0vUd7vBJpza59Lw"
        />
      </head>


      <body>

        <Navbar />

        {children}

      </body>

    </html>
  );
}