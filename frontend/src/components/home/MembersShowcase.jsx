import { Link } from "react-router-dom";

const members = [
  {
    img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Alice Johnson",
    role: "President",
  },
  {
    img: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Smith",
    role: "Vice President",
  },
  {
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sophie Lee",
    role: "Secretary",
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "David Kim",
    role: "Treasurer",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emma Brown",
    role: "Event Coordinator",
  },
  {
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Liam Wilson",
    role: "Member",
  },
];

export default function MembersShowcase() {
  return (
    <section className="py-20 bg-white rounded-2xl shadow-lg max-w-6xl mx-auto my-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
          Meet Our Members
        </h2>
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/about"
          className="inline-block mt-8 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-500 transition"
        >
          View All Members
        </Link>
      </div>
    </section>
  );
}
