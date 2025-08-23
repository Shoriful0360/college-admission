const paper = {
  title: "AI in Modern Education",
  authors: ["John Doe", "Jane Smith"],
  date: "August 10, 2025",
  abstract: `This paper explores the integration of Artificial Intelligence in modern classroom environments, focusing on personalized learning and adaptive teaching methods. The study also highlights challenges, ethical considerations, and case studies from multiple institutions.`,
  link: "https://example.com/ai-paper.pdf",
  tags: ["AI", "Education", "Technology"],
  references: [
    "Smith, J. et al. AI in Education, 2023",
    "Doe, J. Personalized Learning Models, 2022"
  ],
};

export default function ResearchPaperDetails() {
  return (
<section className="min-h-screen bg-base-300 p-6">
  {/* Paper Hero */}
  <div className="max-w-4xl mx-auto mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
      {paper.title}
    </h1>
    <p className="text-gray-600 mb-2">
      By {paper.authors.join(", ")} | {paper.date}
    </p>
    <div className="flex flex-wrap gap-2">
      {paper.tags.map((tag, idx) => (
        <span
          key={idx}
          className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

  {/* Abstract Section */}
  <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-md mb-12">
    <h2 className="text-2xl text-gray-800 font-semibold mb-4">Abstract</h2>
    <p className="text-gray-700 leading-relaxed">{paper.abstract}</p>
  </div>

  {/* Action Buttons */}
  <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 mb-12">
    <a
      href="https://docs.google.com/spreadsheets/d/1nkqj3SG4zeZVd74XXB_XIZBwbGavBaDfUGnSRAPTf4U/export?format=pdf"
      target="_blank"
      className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium text-center hover:bg-indigo-500 transition-colors"
    >
      Read / Download Paper
    </a>
    <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors">
      Cite Paper
    </button>
  </div>

  {/* References Section */}
  <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 shadow-md">
    <h2 className="text-2xl text-gray-800 font-semibold mb-4">References</h2>
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {paper.references.map((ref, idx) => (
        <li key={idx}>{ref}</li>
      ))}
    </ul>
  </div>
</section>

  );
}
