import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digitalni uredski asistent | Prototip",
  description:
    "Prototip internog digitalnog asistenta za odvjetnički ured. Svi podaci su izmišljeni.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased font-sans">{children}</body>
    </html>
  );
}
