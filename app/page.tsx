import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Log from "@/components/Log";
import Releases from "@/components/Releases";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Log />
      <Releases />
      <Stack />
      <Contact />
      <Footer />
    </main>
  );
}
