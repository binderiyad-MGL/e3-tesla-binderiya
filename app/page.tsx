import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FullSelfDriving } from "@/components/FullSelfDriving";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FullSelfDriving />
        <Contact />
      </main>
    </>
  );
}
