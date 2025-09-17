import { Link } from "react-router-dom";
export default function DestinationCard({d}){
return (
<article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform">
<img src={d.image} alt={d.name} className="w-full h-44 object-cover" />
<div className="p-4">
<h3 className="font-semibold text-lg">{d.name}</h3>
<p className="text-sm text-gray-500 mt-1">{d.short}</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-sm text-sky-700 font-medium">From ${d.price}</div>
<Link to={`/destinations/${d.slug}`} className="text-sm text-amber-400">
 View
</Link>
</div>
</div>
</article>
)
}