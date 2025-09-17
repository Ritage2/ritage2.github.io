import { useEffect, useState } from "react";

export default function Weather({ cityId, cityName }) {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fallbackWeather = {
    name: cityName,
    sys: { country: "" },
    main: { temp: "N/A", humidity: "N/A" },
    weather: [{ description: "Weather info not available" }],
    wind: { speed: "N/A" }
  };

  useEffect(() => {
    if (!cityId) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      setWeather(null);

      try {
       const res = await fetch(
  `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=metric&appid=d84f8dded872fdc16922fa0bd2994457`
);

        if (!res.ok) throw new Error("Weather not found");
        const data = await res.json();
        setWeather(data);
      } catch (err) {
        setError("Unable to fetch weather. Showing fallback data.");
        setWeather(fallbackWeather);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cityId, cityName]);

  if (loading) return <p>Loading weather...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!weather) return null;

  return (
    <div className="space-y-2">
      <p className="font-semibold text-lg">
        {weather.name}{weather.sys.country ? `, ${weather.sys.country}` : ""}
      </p>
      <p> Temperature: {weather.main.temp}°C</p>
      <p> Condition: {weather.weather[0].description}</p>
      <p> Humidity: {weather.main.humidity}%</p>
      <p> Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}
