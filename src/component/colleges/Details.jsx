

const Details = () => {
    const college ={
    id: 1,
    name: "Greenfield University",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80",
    description: `Greenfield University is a leading institution known for academic excellence and innovation. It offers a diverse range of undergraduate and postgraduate programs. The campus is equipped with modern laboratories and state-of-the-art research facilities. Students enjoy a vibrant campus life with clubs, societies, and cultural events. The university emphasizes holistic development, including sports, arts, and leadership programs. It has strong industry partnerships that help students gain practical experience. Greenfield University encourages international collaborations and student exchange programs. Faculty members are renowned experts in their respective fields. The university has a robust research culture with over 200 publications annually. Overall, it prepares students to excel in their careers and contribute meaningfully to society.`,
    admission: "March 10 - June 15, 2025",
   admissionProcess: [
      "Step 1: Submit online application.",
      "Step 2: Appear in the entrance test.",
      "Step 3: Shortlisted students will be called for interview.",
      "Step 4: Final merit list published with admission confirmation."
    ],
    events: ["Tech Fest 2025", "Cultural Week", "Innovation Summit"],
    research:
      "Ranked top 10 in AI & Data Science Research with over 200+ published papers.",
    sports: ["Football", "Basketball", "Athletics"],
  }


    return (
      <div className="w-11/12 mx-auto py-12">
<h2 className="text-3xl font-bold text-gray-800 mb-6">{college.name}</h2>
<img
src={college.image}
alt={college.name}
className="w-full h-130 object-cover rounded-2xl mb-6"
/>
<p className="text-lg mb-4">
<span className="font-semibold">Admission Dates:</span> {college.admission}
</p>
<p className="text-lg mb-4">
<span className="font-semibold">Admission Process:</span> {
college?.admissionProcess.map((item,idx)=><li key={idx} >{item}</li>)
}
</p>
<div className="mb-4">
<h3 className="text-xl font-semibold mb-2">Events Details:</h3>
<ul className="list-disc ml-5 text-gray-700">
{college.events.map((event, idx) => (
<li key={idx}>{event}</li>
))}
</ul>
</div>
<div className="mb-4">
<h3 className="text-xl font-semibold mb-2">Research Works:</h3>
<p>{college.research}</p>
</div>
{/* sport category */}
<div>
<h3 className="text-xl font-semibold mb-2">Sports Categories:</h3>
<div className="flex flex-wrap gap-2">
{college.sports.map((sport, idx) => (
<span
key={idx}
className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full"
>
{sport}
</span>
))}
</div>
</div>
{/* description */}
<div className="space-y-2 mt-4">
    <h3 className="text-xl font-bold underline underline-offset-5">Description :</h3>
    <p className="text-justify">{college?.description}</p>
</div>

{/* comment */}
<div>
    <h3 className="text-xl font-bold underline underline-offset-5 mt-4 ">Comment :</h3>
    <fieldset className="fieldset w-full">
  <legend className="fieldset-legend">Your bio</legend>
  <textarea className="textarea lg:w-3xl md:w-2xl h-34" placeholder="Bio"></textarea>
  <button className="btn w-fit flex ">send</button>
  
</fieldset>
</div>
</div>
    );
};

export default Details;