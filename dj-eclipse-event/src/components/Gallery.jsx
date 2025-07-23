// src/components/Gallery.jsx
function Gallery() {
  return (
    <section className="gallery bg-gray-100 py-12 px-8 text-center">
      <h3 className="text-3xl mb-6 font-semibold">Past Events</h3>
      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <img src="/assets/event1.jpg" alt="Event 1" className="w-full h-auto rounded shadow" />
        <img src="/assets/event2.jpg" alt="Event 2" className="w-full h-auto rounded shadow" />
        <img src="/assets/event3.jpg" alt="Event 3" className="w-full h-auto rounded shadow" />
      </div>
    </section>
  );
}

export default Gallery;