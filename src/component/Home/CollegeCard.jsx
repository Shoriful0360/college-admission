export default function CollegeCard() {
  const college = {
    name: "Greenfield University",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    admission: "March 10 - June 15, 2025",
    events: ["Tech Fest 2025", "Cultural Week", "Innovation Summit"],
    research:
      "Ranked top 10 in AI & Data Science Research with over 200+ published papers.",
    sports: ["Football", "Basketball", "Athletics"],
  };

  return (
  
      <div className="bg-white grid shadow-lg rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
        <img
          src={college.image}
          alt={college.name}
          className="h-56 w-full object-cover"
        />
        <div className="p-6 space-y-4">
          <h3 className="text-3xl font-bold text-gray-900">
            {college.name}
          </h3>
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Admission Dates:</span> {college.admission}
          </p>
          <div>
            <p className="font-semibold text-gray-700">Events:</p>
            <ul className="list-disc ml-5 text-gray-600 text-sm">
              {college.events.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Research Highlights:</p>
            <p className="text-sm text-gray-600">{college.research}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Sports:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {college.sports.map((sport, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full"
                >
                  {sport}
                </span>
              ))}
            </div>
          </div>
        </div>
    
    </div>
  );
}
