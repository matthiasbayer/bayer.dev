import "./globals.css";
import { Montserrat } from "next/font/google";
import clsx from "clsx";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Matthias Bayer",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          montserrat.className,
          "antialiased bg-neutral-950 text-white"
        )}
      >
        {children}
      </body>
    </html>
  );
}
