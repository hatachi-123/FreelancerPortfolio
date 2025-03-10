import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Work from "@/components/sections/work";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-green-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
