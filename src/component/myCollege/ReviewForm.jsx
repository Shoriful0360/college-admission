import { useState } from "react";

const ReviewForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmitReview = (e) => {
    e.preventDefault();
    const newReview = {
      rating,
      review,
     
    };

    addReview(newReview); // parent/home page e pathano
    setReview("");
    setRating(0);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">My College</h2>

      {/* College Details Table */}
      <table className="table-auto w-full border-collapse border border-gray-300 rounded-lg shadow">
        <tbody>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold">Candidate</td>
            <td className="px-4 py-2">shoriufl</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold">Email</td>
            <td className="px-4 py-2">shoriufl#mail</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold">Phone</td>
            <td className="px-4 py-2">01304</td>
          </tr>
          <tr className="border-b">
            <td className="px-4 py-2 font-semibold">College</td>
            <td className="px-4 py-2">college</td>
          </tr>
        </tbody>
      </table>

      {/* Review Button */}
      <div className="mt-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-500 transition"
        >
          Add Review
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
            <h3 className="text-xl font-semibold mb-4">Submit Review</h3>

            <form onSubmit={handleSubmitReview}>
              {/* Rating */}
              <div className="flex gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl ${
                      rating >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>

              {/* Review Textarea */}
              <textarea
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review..."
                className="w-full border rounded-lg px-3 py-2 mb-4 focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>

              {/* Actions */}
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
