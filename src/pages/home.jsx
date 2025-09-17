import React, { useState } from "react";
import Hero from "../components/Hero";
import DestinationCard from "../components/DestinationCard";
import destinations from "../data/destinations.json";
import { useCart } from "../context/CartContext";

export default function Home() {
  const [activeOffer, setActiveOffer] = useState(null);
  const [reservation, setReservation] = useState({
    name: "",
    email: "",
    people: "",
    date: "",
  });

  const { addToCart } = useCart();

  const topDestinations = destinations.slice(0, 3);
  const beaches = destinations.filter((d) => d.category === "Beaches").slice(0, 6);
  const mountains = destinations.filter((d) => d.category === "Mountains").slice(0, 6);

  const offers = [
    {
      id: 1,
      title: "Summer in Bali",
      description:
        "Escape to paradise with our exclusive summer package. Includes flights, 5-star hotel stay, and guided tours.",
      discount: "20% OFF",
      price: 899,
      duration: "7 Days / 6 Nights",
      img: "/images/bali2.jpg",
    },
    {
      id: 2,
      title: "Romantic Paris Getaway",
      description:
        "Celebrate love in the city of lights. Package includes luxury stay, Seine cruise, and Eiffel Tower dinner.",
      discount: "Save 15%",
      price: 1299,
      duration: "5 Days / 4 Nights",
      img: "/images/paris1.jpg",
    },
    {
      id: 3,
      title: "Discover Japan",
      description:
        "Experience cherry blossoms, culture, and modern wonders. Package includes guided city tours and bullet train passes.",
      discount: "Spring Special -10%",
      price: 1499,
      duration: "10 Days / 9 Nights",
      img: "/images/japan.jpg",
    },
  ];

  const handleReservationChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleReservationSubmit = (e, offer) => {
    e.preventDefault();

    addToCart({
      ...offer,
      details: { ...reservation },
    });

    alert(
      `Reservation for ${offer.title} confirmed for ${reservation.people} people on ${reservation.date}. We’ll email ${reservation.email} shortly.`
    );

    setReservation({ name: "", email: "", people: "", date: "" });
    setActiveOffer(null);
  };

  const renderSection = (title, list) => (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-sky-700">{title}</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((d) => (
          <DestinationCard key={d.id} d={d} />
        ))}
      </div>
    </section>
  );

  return (
    <div className="space-y-12">
      <Hero />

     {/* About Us Section */}
<section className="max-w-5xl mx-auto px-6 py-16 text-center space-y-6">
  <h2 className="text-4xl font-extrabold text-orange-600">
    Explore the World with Wanderly
  </h2>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
    Your ultimate travel companion! Discover hidden gems, plan unforgettable
    journeys, and create memories that last a lifetime. Wanderly makes
    travel effortless, inspiring, and truly extraordinary.
  </p>
  <div className="flex justify-center gap-4">
    <a
      href="/AboutUs"
      className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition transform hover:-translate-y-1"
    >
      Learn More
    </a>
    <a
      href="/planner"
      className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-orange-100 transition transform hover:-translate-y-1"
    >
      Start Planning
    </a>
  </div>
</section>


      {renderSection("Top 3 Destinations", topDestinations)}
      {renderSection("Featured Beaches", beaches)}
      {renderSection("Featured Mountains", mountains)}

      {/* Special Offers */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-sky-700">Special Offers</h2>
        <p className="text-gray-600 mt-2">
          Don’t miss out on our limited-time packages designed to give you the
          best travel experiences at unbeatable prices.
        </p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={offer.img}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {offer.discount}
                </span>
                <h3 className="text-xl font-bold text-sky-700">{offer.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{offer.description}</p>
                <p className="text-gray-500 mt-2 text-sm italic">{offer.duration}</p>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-lg font-semibold">${offer.price}</p>
                  <button
                    onClick={() =>
                      setActiveOffer(activeOffer === offer.id ? null : offer.id)
                    }
                    className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                  >
                    {activeOffer === offer.id ? "Cancel" : "Book Now"}
                  </button>
                </div>

                {activeOffer === offer.id && (
                  <form
                    onSubmit={(e) => handleReservationSubmit(e, offer)}
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
                      className="w-full bg-sky-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
                    >
                      Confirm Reservation & Add to Cart
                    </button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
