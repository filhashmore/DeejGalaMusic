import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Discography } from './components/Discography';
import { Gallery } from './components/Gallery';
import { SocialLinks } from './components/SocialLinks';
import { Footer } from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Discography />
        <Gallery />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
