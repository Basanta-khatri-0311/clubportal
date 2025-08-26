// src/components/Hero.jsx
export default function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center text-center text-white">
      <img src="/src/assets/images/hero.jpg" alt="Football Hero" className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 animate-fadeIn">
        <h1 className="text-6xl font-extrabold mb-6 font-poppins">Sangar Samuha Football Club</h1>
        <p className="text-xl max-w-xl mx-auto font-poppins">
          Playing with heart, building community, and making a difference.
        </p>
      </div>
    </header>
  );
}
