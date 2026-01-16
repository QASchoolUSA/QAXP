import SmoothScroll from './components/SmoothScroll';
import Iridescence from './components/Iridescence';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen">
        <Iridescence
          color={[0.1, 0.1, 0.3]}
          speed={0.5}
          amplitude={0.2}
          mouseReact={true}
        />

        <main className="relative z-10">
          <Hero />
          <Services />
          <Work />
          <Contact />
        </main>

        <footer className="relative z-10 py-12 text-center text-white/30 text-sm uppercase tracking-widest">
          © {new Date().getFullYear()} QAXP Studio. All rights reserved.
        </footer>
      </div>
    </SmoothScroll>
  );
}

