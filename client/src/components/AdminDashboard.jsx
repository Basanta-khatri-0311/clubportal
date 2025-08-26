import { useNavigate } from "react-router-dom";

export default function AdminDashboard({ registrations, setRegistrations, setIsAdmin }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAdmin(false);       // reset admin state
    navigate("/");            // redirect to homepage
  };

  return (
    <section className="min-h-screen bg-gray-50 p-10 font-poppins">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button 
          onClick={handleLogout} 
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
          Logout
        </button>
      </div>

      <h3 className="text-2xl font-semibold mb-4">Program Registrations</h3>
      {registrations.length === 0 ? (
        <p>No registrations yet.</p>
      ) : (
        <ul className="space-y-2">
          {registrations.map((reg, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow flex justify-between">
              <span>{reg.playerName} ({reg.teamName}) – {reg.email}</span>
              <button 
                onClick={() => setRegistrations(registrations.filter((_, i) => i !== idx))}
                className="text-red-600 hover:underline">
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
