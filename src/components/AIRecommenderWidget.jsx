
import React from "react";

export default function AIRecommenderWidget({ destination }) {
  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <h2 className="text-lg font-semibold">AI Recommender</h2>
      <p className="text-gray-600 mt-2">
        Suggested activities for <span className="font-bold">{destination}</span> coming soon...
      </p>
    </div>
  );
}
