
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeaturedEpisode from './components/FeaturedEpisode';
import Categories from './components/Categories';
import LeadingPodcaster from './components/LeadingPodcaster';
import Newsletter from './components/Newsletter';
import LatestEpisodes from './components/LatestEpisodes';
import ArtistHighlight from './components/ArtistHighlight';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-20">
        <section id="home">
          <Hero />
        </section>
        <section id="about" aria-labelledby="about-heading">
          <Stats />
          <FeaturedEpisode />
        </section>
        <Categories />
        <section id="talk" aria-labelledby="talk-heading">
          <LeadingPodcaster />
        </section>
        <Newsletter />
        <section id="audio" aria-labelledby="audio-heading">
          <LatestEpisodes />
        </section>
        <ArtistHighlight />
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
        <Footer />
        <BackToTop />
      </main>
    </div>
  );
}

export default App;
