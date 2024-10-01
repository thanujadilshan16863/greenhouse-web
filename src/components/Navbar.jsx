import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex-shrink-0">
          <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-700">Home</Link>
          <Link to="/features" className="text-gray-700">Features</Link>
          <Link to="/technology" className="text-gray-700">Technology</Link>
          <Link to="/contact" className="px-4 py-2 bg-green-500 text-white rounded-lg">Contact Us</Link>
          <Link to="/login" className="px-4 py-2 bg-green-400 text-white rounded-lg">Login</Link>
        </div>
      </div>
    </nav>
  );
}