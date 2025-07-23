// src/components/Hero.jsx
function Hero() {
  return (
<section
  className="hero bg-cover bg-center bg-no-repeat text-white px-5 py-3 text-center bg-[#111] border-b-solid border-b-2 border-b-[rgb(255,64,129)]"
//   style={{ backgroundImage: "url('/assets/event-hero.jpg')" }}
>
  <h1 className="text-[1.5rem] font-thin tracking-[2px]">DJ Eclipse Presents:</h1>
  <h2 className="text-[2.5rem] font-medium tracking-[5px] font-sans -mt-2">
    Rooftop Vibes 2025
  </h2>
  <p className="mt-0 mb-0 text-base">
    July 27, 2025 • 7PM – 1AM • Skyline Terrace, Jersey City
  </p>
</section>

  );
}

export default Hero;