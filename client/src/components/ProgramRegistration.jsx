// ProgramRegistration.jsx
export default function ProgramRegistration({ registrations, setRegistrations }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newReg = {
      playerName: form.playerName.value,
      teamName: form.teamName.value,
      email: form.email.value,
      details: form.details.value
    };
    setRegistrations([...registrations, newReg]);
    form.reset();
    alert("Registration submitted!");
  };

  return (
    <section id="register" className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12 font-poppins">Register for a Program</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg">
        <input name="playerName" type="text" placeholder="Player Name" className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 font-poppins"/>
        <input name="teamName" type="text" placeholder="Team Name" className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 font-poppins"/>
        <input name="email" type="email" placeholder="Email" className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 font-poppins"/>
        <textarea name="details" placeholder="Additional Details" className="border p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 font-poppins"></textarea>
        <button className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition font-poppins">Submit Registration</button>
      </form>
    </section>
  );
}
