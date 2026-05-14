export const metadata = {
  title: "Tutoring",
  description: "Personal tutoring services for K–6 students and beginner languages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="EfSi9H_-Hg0RF6ie9DasXu9dwl0D0vUd7vBJpza59Lw"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}