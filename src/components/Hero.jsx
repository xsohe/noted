export default function Hero() {
  return (
    <div className="container flex-1 flex flex-col md:flex-row justify-center items-center text-left p-6">
      <div className="m-6 flex flex-col items-center md:items-start">
        <img src="img/hero-noted.png" alt="Hero" className="w-56 md:w-96 mb-4" />
        <h1 className="text-5xl md:text-8xl font-bold text-gray-800">noted</h1>
        <h3 className="text-xl md:text-2xl font-bold text-gray-800">level up your note taking</h3>
      </div>
    </div>
  );
}
