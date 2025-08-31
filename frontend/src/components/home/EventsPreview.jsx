import { Link } from "react-router-dom";

const events = [
  {
    img: "https://plus.unsplash.com/premium_photo-1684902597942-d6593a476d44?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Annual Sports Meet",
    date: "2025-10-15",
  },
  {
    img: "https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tech Workshop",
    date: "2025-11-05",
  },
  {
    img: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Cultural Night",
    date: "2025-12-10",
  },
];

export default function EventsPreview() {
  return (
    <section className="py-20 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto my-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8">
          Upcoming Events
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2">{event.date}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/events"
          className="inline-block mt-8 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition"
        >
          View All Events
        </Link>
      </div>
    </section>
  );
}
