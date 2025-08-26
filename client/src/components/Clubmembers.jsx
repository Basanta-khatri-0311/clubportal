// src/components/ClubMembers.jsx
const members = [
  { name: "Ram Shrestha", role: "President", img: "/src/assets/images/member1.jpg" },
  { name: "Sita Khatri", role: "Vice President", img: "/src/assets/images/member2.jpg" },
  { name: "Player 1", role: "Forward", img: "/src/assets/images/player1.jpg" },
  { name: "Player 2", role: "Midfielder", img: "/src/assets/images/player2.jpg" },
];

export default function ClubMembers() {
  return (
    <section id="members" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12 font-poppins">Club Members</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {members.map((member, idx) => (
          <div key={idx} className="w-60 bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-4">
            <img src={member.img} alt={member.name} className="w-full h-60 object-cover rounded-xl"/>
            <h3 className="mt-4 text-xl font-semibold font-poppins">{member.name}</h3>
            <p className="text-green-700 font-medium font-poppins">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
