import SmoothScroll from './components/SmoothScroll';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

export default function Home() {
  return (
    <SmoothScroll>
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Work />
        <Contact />
      </main>

      <footer className="relative z-10 border-t border-white/60 py-10 text-center text-sm text-zinc-500 backdrop-blur-sm">
        © {new Date().getFullYear()} QAXP Studio. All rights reserved.
      </footer>
    </SmoothScroll>
  );
}
