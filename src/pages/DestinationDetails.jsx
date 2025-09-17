import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import destinations from '../data/destinations.json';
import AIRecommenderWidget from '../components/AIRecommenderWidget';
import { useCart } from '../context/CartContext';

export default function DestinationDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const destination = destinations.find(d => d.slug === slug) || destinations[0];

  const [showReservation, setShowReservation] = useState(false);
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    people: 1,
    date: ''
  });

  // Scroll to top whenever this page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleReservationChange = (e) => {
    setReservation({ ...reservation, [e.target.name]: e.target.value });
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();

    addToCart({
      id: Date.now(),
      slug: destination.slug,
      name: `Reservation at ${destination.name}`,
      price: destination.price * reservation.people,
      details: { ...reservation, destination: destination.name },
    });

    navigate('/Checkout');
  };

  return (
    <div className="pt-12 md:pt-16 max-w-6xl mx-auto px-4 space-y-10">
      {/* Hero Image */}
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl"></div>
        <h1 className="absolute bottom-6 left-6 text-4xl font-extrabold text-white drop-shadow-lg">
          {destination.name}
        </h1>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Details Section */}
        <div className="md:col-span-2 space-y-10">
          <p className="text-lg text-gray-700">{destination.short}</p>

          {destination.details && (
            <div className="space-y-8">
              {destination.details.history && <SectionCard title="History">{destination.details.history}</SectionCard>}
              {destination.details.culture && <SectionCard title="Culture">{destination.details.culture}</SectionCard>}
              {destination.details.topAttractions && (
                <SectionCard title="Top Attractions">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {destination.details.topAttractions.map((place, i) => (
                      <li
                        key={i}
                        className="bg-sky-50 p-2 rounded-lg text-sky-800 hover:bg-sky-100 transition"
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                </SectionCard>
              )}
              {destination.details.bestTime && <SectionCard title="Best Time to Visit">{destination.details.bestTime}</SectionCard>}
              {destination.details.currency && <SectionCard title="Currency 💱">{destination.details.currency}</SectionCard>}
              {destination.details.population && <SectionCard title="Population 👥">{destination.details.population}</SectionCard>}
              {destination.details.foodHighlights && (
                <SectionCard title="Food Highlights">
                  <div className="flex flex-wrap gap-2 mt-2">
                    {destination.details.foodHighlights.map((food, i) => (
                      <span
                        key={i}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm hover:bg-amber-200 transition"
                      >
                        {food}
                      </span>
                    ))}
                  </div>
                </SectionCard>
              )}
            </div>
          )}
        </div>

        {/* Reservation Section */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl shadow-lg text-black space-y-4">
            <h3 className="text-xl font-bold mb-2">Trip Package</h3>
            <p className="text-lg">
              Starting from <span className="font-extrabold">${destination.price}</span>
            </p>

            <button
              onClick={() => setShowReservation(!showReservation)}
              className="w-full bg-orange-500 hover:bg-orange-600  text-white font-bold py-2 px-4 rounded-xl transition"
            >
              {showReservation ? 'Close Reservation' : 'Reserve Now'}
            </button>

            {showReservation && (
              <form
                onSubmit={handleReservationSubmit}
                className="mt-4 p-4 border rounded-xl bg-gray-50 space-y-3 text-gray-700"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={reservation.name}
                  onChange={handleReservationChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={reservation.email}
                  onChange={handleReservationChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="number"
                  name="people"
                  min="1"
                  placeholder="Number of People"
                  value={reservation.people}
                  onChange={handleReservationChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                <input
                  type="date"
                  name="date"
                  value={reservation.date}
                  onChange={handleReservationChange}
                  required
                  className="w-full border px-3 py-2 rounded"
                />
                <button
                  type="submit"
                  className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition w-full"
                >
                  Confirm Reservation & Pay
                </button>
              </form>
            )}
          </div>

          <AIRecommenderWidget destination={destination.name} />
        </div>
      </div>
    </div>
  );
}

// Reusable Section Card
function SectionCard({ title, children }) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6 border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition">
      <h2 className="text-2xl font-semibold text-sky-700 mb-3">{title}</h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  );
}
