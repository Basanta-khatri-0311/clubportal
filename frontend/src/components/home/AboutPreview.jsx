import { Link } from "react-router-dom";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto my-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          About Our Club
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6 text-lg">
          Our club brings together passionate members who love to learn, compete, 
          and collaborate. From exciting events to outstanding achievements, 
          we celebrate teamwork and innovation.
        </p>
        <Link
          to="/about"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
