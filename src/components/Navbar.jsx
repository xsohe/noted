export default function Navbar({ children }) {
  return (
    <nav className="w-full bg-gray-50 py-6 px-10">
      <div className="container mx-auto flex justify-between">{children}</div>
    </nav>
  );
}
