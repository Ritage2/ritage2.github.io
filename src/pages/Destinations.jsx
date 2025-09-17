import React, { useState } from 'react'
import destinations from '../data/destinations.json'
import DestinationCard from '../components/DestinationCard'

export default function Destinations() {
  const [query, setQuery] = useState('')
  const list = destinations.filter(d =>
    d.name.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="p-6">
      {/* Header + Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <h1 className="text-2xl font-bold mt-4 sm:mt-8">Destinations</h1>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search destinations..."
          className="w-full sm:w-64 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 "
        />
      </div>

      {/* Destinations Grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.length > 0 ? (
          list.map((d) => <DestinationCard key={d.id} d={d} />)
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No destinations found.
          </p>
        )}
      </div>
    </div>
  )
}
