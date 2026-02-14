import type { Metadata } from "next";
import { Gabarito, Spline_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Gabarito({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Spline_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zinna Kim Portfolio",
  description: "Portfolio of Zinna Kim, a passionate web designer and front-end developer",
  icons: {
    icon: "/assets/logo_black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
