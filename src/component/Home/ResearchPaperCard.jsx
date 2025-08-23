const papers = [
  {
    title: "AI in Modern Education",
    author: "John Doe, Jane Smith",
    description: "An extensive study on AI integration in classroom learning.",
    link: "https://example.com/ai-paper.pdf",
    tags: ["AI", "Education"],
  },
  {
    title: "Sustainable Energy Solutions",
    author: "Ali Hasan",
    description: "Exploring alternative energy methods for urban areas.",
    link: "https://example.com/energy-paper.pdf",
    tags: ["Environment", "Energy"],
  },
  {
    title: "Urban Water Management",
    author: "Maria Lopez",
    description: "Innovative techniques for sustainable city water systems.",
    link: "https://example.com/water-paper.pdf",
    tags: ["Environment", "Urban Planning"],
  },
  {
    title: "Blockchain in Finance",
    author: "David Kim",
    description: "A study on blockchain applications in modern banking.",
    link: "https://example.com/blockchain-paper.pdf",
    tags: ["Blockchain", "Finance"],
  },
];

export default function ResearchPapersCard() {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
        Recommended Research Papers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map((paper, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl bg-gray-50 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{paper.title}</h3>
            <p className="text-sm text-gray-500 mb-4">By {paper.author}</p>
            <p className="text-gray-600 text-sm line-clamp-3">{paper.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {paper.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={paper.link}
              target="_blank"
              className="inline-block mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition-colors"
            >
              Read Paper
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
