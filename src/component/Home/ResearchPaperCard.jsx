import { Link } from "react-router";
import UseAxios from "../../hook/useAxios";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../../shared/Spinner";

// const papers = [
//   {
//     id: "ai-education",
//     title: "AI in Modern Education",
//     author: "John Doe, Jane Smith",
//     description: "An extensive study on AI integration in classroom learning.",
//     link: "https://example.com/ai-paper.pdf",
//     tags: ["AI", "Education"],
//   },
//   {
//     id: "sustainable-energy",
//     title: "Sustainable Energy Solutions",
//     author: "Ali Hasan",
//     description: "Exploring alternative energy methods for urban areas.",
//     link: "https://example.com/energy-paper.pdf",
//     tags: ["Environment", "Energy"],
//   },
// ];




export default function ResearchPapersCard() {
  const axiosSecure=UseAxios()

    const {data:papers,isLoading}=useQuery({
        queryKey:["papers"],
      
        queryFn:async()=>{
            const {data}=await axiosSecure.get(`/papers`)
            return(data)
        }
    })
    if(isLoading) return <Spinner/>
  return (
 
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12 underline underline-offset-8">
        Recommended Research Papers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {papers?.map((paper, idx) => (
          <div
            key={idx}
            className="relative p-6 rounded-2xl flex flex-col bg-gray-50 shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-800 flex-1 mb-2">{paper.title}</h3>
            <p className="text-sm text-gray-500 mb-4 flex-1">By {paper.author}</p>
            <p className="text-gray-600 text-sm  flex-1">{paper.description}</p>
            <div className="mt-4 flex flex-wrap gap-4 ">
              {paper.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
             to={`/research_papers/${paper._id}`}
             

             
            >
              <button className="btn bg-indigo-600 mt-4 text-white rounded-lg font-medium flex flex-1 hover:bg-indigo-500 transition-colors"
            >Read Paper</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
