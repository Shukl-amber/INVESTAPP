import type { Metadata } from "next";
import { Inter, Inria_Serif, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inria-serif",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Invest App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inriaSerif.variable} ${poppins.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
