import { Link } from "react-router-dom";
export default function ErrorPage() {
return (
<div className="text-center mt-20">
<h1 className="text-4xl font-bold text-red-600">404</h1>
<p className="mt-4">Page not found.</p>
<Link to="/home" className="mt-6 inline-block text-blue-600 underline">Go back Home</Link>
</div>
);
}