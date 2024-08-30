export default function Navbar() {
  return (
    <nav className="w-full bg-gray-100 py-6 px-10">
      <div className="container mx-auto flex justify-between">
        <div className="flex">
          <img src="img/logo.png" alt="Logo" className="h-8 w-8 mr-3" />
          <h1 className="text-gray-800 text-2xl font-bold">noted</h1>
        </div>
        <div className="flex">
          <img src="https://avatar.iran.liara.run/public/boy" alt="avatar" className="w-8 md:w-10" />
        </div>
      </div>
    </nav>
  );
}
