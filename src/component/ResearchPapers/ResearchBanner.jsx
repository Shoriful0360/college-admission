export default function ResearchBanner() {
  return (
    <section className="relative w-full h-64 md:h-96 flex items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-black overflow-hidden">
      {/* Background image with overlay */}
      <img
        src="https://images.unsplash.com/photo-1570929057588-6952f7dd2305?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc2VhcmNoJTIwcGFwZXJzfGVufDB8fDB8fHww"
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
