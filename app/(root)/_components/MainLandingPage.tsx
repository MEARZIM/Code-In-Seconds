"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

import { LandingNavbar } from "@/components/LandingPage/Navbar";
import { HeroSection } from "@/components/LandingPage/heroSection";
import { Footer } from "@/components/LandingPage/footer";
import { CardFlip } from "@/components/LandingPage/Cards/card";
import { NewsLetter } from "@/components/LandingPage/newsLetter";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Weal } from "@/components/LandingPage/skillWeal";
import { StickyScrollSection } from "@/components/LandingPage/stickyScrollSection";
import { DynamicTabs } from "@/components/LandingPage/DynamicTabs";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export function LandingPage() {
  return (<>
    <nav className="mx-auto max-w-7xl text-black">
      <LandingNavbar />
    </nav>
    <main className="mx-auto">
      <AuroraBackground className="max-w-full">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >

          <HeroSection />
        </motion.div>
      </AuroraBackground>

    </main>

    <section className="max-w-7xl mx-auto ">
      <Weal />
      <StickyScrollSection />
      <DynamicTabs />
      <CardFlip />
    </section>

    

    

    <footer className="max-w-7xl mx-auto">
      <NewsLetter />
      <Footer />
    </footer>
  </>
  );
}
