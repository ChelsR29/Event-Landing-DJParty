// src/App.jsx
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import About from './components/About';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPform';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow">
        <Hero />
      <div className="relative">
        {/* Video Background */}
        <video
          className="background-video"
          src="/assets/videos/event-background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Dark Overlay */}
        <div className="background-overlay" />

        {/* Foreground Content */}
        <div className="relative z-10">
          <About />
          <RSVPForm />
          <Countdown />
        </div>
      </div>

        {/* <Gallery /> */}
      </main>

      {/* Sticky footer */}
      <Footer />
    </div>
  );
}

export default App;
