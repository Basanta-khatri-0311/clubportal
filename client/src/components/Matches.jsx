// src/components/Matches.jsx
const matches = [
  { date: "10 Sep 2025", opponent: "Neighboring Club", venue: "Home Ground" },
  { date: "17 Sep 2025", opponent: "Another Club", venue: "Away" },
];

export default function Matches() {
  return (
    <section id="matches" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 font-poppins">Upcoming Matches</h2>
      <div className="flex flex-col items-center gap-6">
        {matches.map((match, idx) => (
          <div key={idx} className="bg-green-100 border-l-8 border-green-700 p-6 w-96 rounded-lg shadow hover:scale-105 transition transform">
            <p className="font-bold text-lg font-poppins">{match.date}</p>
            <p className="text-gray-700 font-poppins">{match.opponent} – {match.venue}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
