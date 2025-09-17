import React, { useState } from "react";
import { Star } from "lucide-react";

const initialReviews = [
  {
    id: 1,
    name: "James Parker",
    destination: "Rome, Italy",
    rating: 5,
    review:
      "The Colosseum was breathtaking, and the pasta… wow 🤌! Definitely a trip to remember.",
    date: "2025-09-05",
    image: "/images/p1.avif",
  },
  {
    id: 2,
    name: "Aisha Hassan",
    destination: "Cairo, Egypt",
    rating: 4,
    review:
      "Loved the pyramids and history. The markets were busy but full of life. Wear comfy shoes!",
    date: "2025-08-29",
    image: "/images/p2.jpg",
  },
  {
    id: 3,
    name: "Liam O’Connor",
    destination: "Sydney, Australia",
    rating: 5,
    review:
      "Climbed the Harbour Bridge and chilled at Bondi Beach. Aussies know how to live!",
    date: "2025-08-15",
    image: "/images/p3.jpg",
  },
  {
    id: 4,
    name: "Hana Suzuki",
    destination: "Kyoto, Japan",
    rating: 5,
    review:
      "The temples and gardens were stunning. Sakura season made it even more magical.",
    date: "2025-08-02",
    image: "/images/p4.jpg",
  },
];

const Reviews = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    rating: 0,
    review: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRating = (rating) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.destination || !formData.review) return;

    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: new Date().toISOString().split("T")[0],
      image: "/default-avatar.png",
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", destination: "", rating: 0, review: "" });
  };

  return (
    <section>
      {/* Hero Section */}
      <header className="text-center py-16 px-4 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-center text-sky-800">
          Traveler Stories
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Real journeys. Real memories. See what our travelers have experienced
          and share your own story with us.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-20">
        {/* Add Review Form */}
        <div className="bg-white shadow-xl shadow-blue-200/40 border border-gray-100 p-8 mb-16 max-w-2xl mx-auto rounded-2xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Share Your Experience
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination (e.g., Paris, France)"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
            />

            {/* Rating Stars */}
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={24}
                  className={`cursor-pointer transition ${
                    star <= formData.rating
                      ? "text-yellow-400 fill-yellow-400 scale-110"
                      : "text-gray-300 hover:text-yellow-300"
                  }`}
                  onClick={() => handleRating(star)}
                />
              ))}
            </div>

            <textarea
              name="review"
              placeholder="Write about your experience..."
              rows="4"
              value={formData.review}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-400 outline-none"
            />

            <button
              type="submit"
              className="bg-sky-600 text-white font-medium px-6 py-3 rounded-xl hover:bg-sky-700 transition w-full shadow-md"
            >
               Submit Review
            </button>
          </form>
        </div>

        {/* Reviews Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col"
            >
              <div className="flex items-center mb-5">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 ring-2 ring-sky-100"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h3>
                  <p className="text-sm text-sky-600 font-medium">
                    {review.destination}
                  </p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${
                      i < review.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed flex-grow italic">
                “{review.review}”
              </p>

              <footer className="text-sm text-gray-400 mt-4">
                <time>{review.date}</time>
              </footer>
            </article>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mt-16">
          <p className="text-lg font-semibold text-gray-700">
             Blogs &  Videos are coming soon! Stay tuned for more travel inspiration.
          </p>
        </div>
      </main>
    </section>
  );
};

export default Reviews;
