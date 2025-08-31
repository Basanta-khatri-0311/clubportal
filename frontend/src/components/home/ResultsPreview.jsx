import { Link } from "react-router-dom";

const results = [
  {
    img: "https://images.unsplash.com/photo-1732315797079-fe90763b8bd9?q=80&w=1137&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Intercollege Football Championship",
    winner: "Team Alpha",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1682434492795-3346075a61ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Debate Competition Winner",
    winner: "John Doe",
  },
  {
    img: "https://images.unsplash.com/photo-1633297345330-261df10cf6a6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Coding Hackathon",
    winner: "Team Innovators",
  },
];

export default function ResultsPreview() {
  return (
    <section className="py-20 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto my-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Highlights & Recognition
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {results.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">Winner: {item.winner}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/results"
          className="inline-block mt-8 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition"
        >
          View All Results
        </Link>
      </div>
    </section>
  );
}
