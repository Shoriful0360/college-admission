export default function ResearchBanner() {
  return (
    <section className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-black overflow-hidden">
      {/* Background image with overlay */}
      <img
        src="https://images.unsplash.com/photo-1581091215363-0fbe6ff034f0?auto=format&fit=crop&w=1600&q=80"
        alt="Research Banner"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Glassmorphism content */}
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center shadow-xl max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
          College Research Papers
        </h1>
        <p className="text-gray-200 text-lg md:text-xl">
          Explore innovative research conducted by our talented students. Discover papers on technology, science, education, and more.
        </p>
      </div>
    </section>
  );
}
