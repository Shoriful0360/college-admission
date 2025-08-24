import { useState } from "react";

const ReviewModal = ({ isOpen, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [error, setError] = useState(""); // error state

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 250) {
      setError("Review cannot exceed 200 characters!");
    } else {
      setError("");
      setReview(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.length > 200) {
      setError("Review cannot exceed 200 characters!");
      return;
    }
    onSubmit({ rating, review });
    setRating(0);
    setReview("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[700px] relative">
        <h3 className="text-xl font-semibold mb-4">Submit Review</h3>

        <form onSubmit={handleSubmit}>
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

          {/* Review Input */}
          <textarea
            value={review}
            onChange={handleChange}
            placeholder="Write your review..."
            className="w-full border rounded-lg px-3 py-2 h-56 mb-2 focus:ring-2 focus:ring-indigo-400"
            required
          ></textarea>

          {/* Error Message */}
          {error && <p className="text-red-500 mb-2">{error}</p>}

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
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
  );
};

export default ReviewModal;
