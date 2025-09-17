import { useState } from "react";
import Weather from "./Weather";


const activitiesDB = {
  Adventure: [
    "Hiking tour",
    "Scuba diving",
    "Mountain climbing",
    "Safari trip",
    "Kayaking adventure",
    "Zip-lining",
    "Desert dune bashing",
    "Skydiving",
    "Cycling tour",
    "Camping under the stars",
  ],
  Relax: [
    "Spa day",
    "Beach lounging",
    "Yoga retreat",
    "Meditation session",
    "Hot spring visit",
    "Picnic in the park",
    "Luxury cruise",
    "Massage therapy",
    "Reading by the beach",
    "Nature walk",
  ],
  Romantic: [
    "Candlelight dinner",
    "Couples massage",
    "Sunset cruise",
    "Horse-drawn carriage ride",
    "Wine tasting",
    "Stargazing",
    "Private boat ride",
    "Romantic picnic",
    "Hot air balloon ride",
    "Visit to a scenic viewpoint",
  ],
};


function getRandomActivities(mood, count = 3) {
  const all = activitiesDB[mood] || ["Explore the city"];
  const shuffled = [...all].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function Planner() {
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [budget, setBudget] = useState("");
  const [mood, setMood] = useState("");
  const [plan, setPlan] = useState({ cityId: null, cityName: "", budget: "", mood: "" });
  const [activities, setActivities] = useState([]);


  const cities = [
    { name: "Cairo", id: 360630 },
    { name: "Paris", id: 2988507 },
    { name: "New York", id: 5128581 },
    { name: "London", id: 2643743 },
    { name: "Tokyo", id: 1850147 },
    { name: "Los Angeles", id: 5368361 },
    { name: "Chicago", id: 4887398 },
    { name: "Berlin", id: 2950159 },
    { name: "Madrid", id: 3117735 },
    { name: "Rome", id: 3169070 },
    { name: "Sydney", id: 2147714 },
    { name: "Melbourne", id: 2158177 },
    { name: "Moscow", id: 524901 },
    { name: "Dubai", id: 292223 },
    { name: "Istanbul", id: 745044 },
    { name: "Toronto", id: 6167865 },
    { name: "Vancouver", id: 6173331 },
    { name: "Beijing", id: 1816670 },
    { name: "Seoul", id: 1835848 },
    { name: "Bangkok", id: 1609350 },
    { name: "Singapore", id: 1880252 },
    { name: "Hong Kong", id: 1819729 },
    { name: "Barcelona", id: 3128760 },
    { name: "Amsterdam", id: 2759794 },
    { name: "Lisbon", id: 2267057 },
    { name: "Vienna", id: 2761369 },
    { name: "Prague", id: 3067696 },
    { name: "Budapest", id: 3054643 },
    { name: "Mexico City", id: 3530597 },
    { name: "Rio de Janeiro", id: 3451190 },
    { name: "Buenos Aires", id: 3435910 },
    { name: "Lagos", id: 2332459 },
    { name: "Johannesburg", id: 993800 },
    { name: "Nairobi", id: 184745 },
    { name: "Mumbai", id: 1275339 },
    { name: "Delhi", id: 1273294 },
    { name: "Kolkata", id: 1275004 },
    { name: "Karachi", id: 1174872 },
    { name: "Tehran", id: 112931 },
    { name: "Baghdad", id: 98182 },
    { name: "Riyadh", id: 108410 },
    { name: "Casablanca", id: 2553604 },
    { name: "Lima", id: 3936456 },
    { name: "Santiago", id: 3871336 },
    { name: "Bali", id: 1650357 },
    { name: "Phuket", id: 1151254 },
    { name: "Maldives", id: 1282028 },
    { name: "Honolulu", id: 5856195 },
    { name: "San Francisco", id: 5391959 },
    { name: "Miami", id: 4164138 },
    { name: "Athens", id: 264371 },
    { name: "Copenhagen", id: 2618425 },
    { name: "Stockholm", id: 2673730 },
    { name: "Oslo", id: 3143244 },
    { name: "Helsinki", id: 658225 },
    { name: "Reykjavik", id: 3413829 },
    { name: "Cape Town", id: 3369157 },
  ];

  const handleGeneratePlan = () => {
    if (!selectedCityId) {
      alert("Please select a destination");
      return;
    }
    const city = cities.find((c) => c.id === parseInt(selectedCityId));
    setPlan({
      cityId: city.id,
      cityName: city.name,
      budget: budget.trim(),
      mood,
    });

 
    setActivities(getRandomActivities(mood, 4));
  };

  return (
    <div className="p-6 md:p-12 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-sky-800">
        Plan Your Perfect Trip
      </h2>

      {/* Form Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 space-y-6">
        <select
          value={selectedCityId || ""}
          onChange={(e) => setSelectedCityId(e.target.value)}
          className="border border-gray-300 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-xl p-3 w-full transition"
        >
          <option value="">Select Destination</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Budget ($)"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="border border-gray-300 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-xl p-3 w-full transition"
        />

        <select
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="border border-gray-300 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 rounded-xl p-3 w-full transition"
        >
          <option value="">Select Mood</option>
          <option value="Adventure">Adventure</option>
          <option value="Relax">Relax</option>
          <option value="Romantic">Romantic</option>
        </select>

        <button
          type="button"
          onClick={handleGeneratePlan}
          className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl py-3 transition"
        >
          Generate Plan
        </button>
      </div>

      {/* Results */}
      {plan.cityId && (
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Fake Activities */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-sky-700">
              Recommended Activities
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {activities.map((activity, i) => (
                <li key={i}>{activity}</li>
              ))}
            </ul>
            {plan.budget && (
              <p className="mt-4 text-sm text-gray-600">
                Estimated Budget: ${plan.budget}
              </p>
            )}
          </div>

          {/* Weather */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-sky-700">
              Weather Forecast
            </h3>
            <Weather cityId={plan.cityId} cityName={plan.cityName} />
          </div>
        </div>
      )}
    </div>
  );
}
