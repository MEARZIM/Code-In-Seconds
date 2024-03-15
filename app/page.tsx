import { Poppins } from "next/font/google";

import { LandingNavbar } from "@/components/LandingPage/Navbar";
import { HeroSection } from "@/components/LandingPage/heroSection";
import { Footer } from "@/components/LandingPage/footer";
import CardFlip from "@/components/LandingPage/Cards/card";
import { NewsLetter } from "@/components/LandingPage/newsLetter";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <LandingNavbar />
      <HeroSection />
      <CardFlip/>
      <NewsLetter />
      <Footer />
    </main>
  );
}
