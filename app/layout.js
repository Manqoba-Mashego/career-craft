import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap"
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "USIZO - Build CVs, Prepare For Interviews & Boost Your Career",
  description: "USIZO helps you create professional CVs, practice interview skills, and land your dream job. Start your career journey with personalized tools and expert guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased h-750`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
