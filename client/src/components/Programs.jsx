// src/components/Programs.jsx
const programs = [
  { title: "11-a-side Football Tournament", description: "Join our village tournament, register your team and compete!", img: "/src/assets/images/football.jpg" },
  { title: "Blood Donation Camp", description: "Participate in community blood donation drives.", img: "/src/assets/images/blood.jpg" },
  { title: "Community Awareness Program", description: "Helping the village through awareness programs.", img: "/src/assets/images/community.jpg" },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-12 font-poppins">Our Programs</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {programs.map((program, idx) => (
          <div key={idx} className="relative w-80 h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
            <img src={program.img} alt={program.title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity text-white p-4 text-center">
              <h3 className="text-2xl font-bold font-poppins">{program.title}</h3>
              <p className="mt-2 font-poppins">{program.description}</p>
              <a href="#register" className="mt-4 bg-green-700 px-6 py-2 rounded-lg hover:bg-green-800 transition font-poppins">Register</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
