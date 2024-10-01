// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Dashboard</h2>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Soil Moisure</Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Humidity & Temp</Link>
            </li>
            <li>
              <Link to="/dashboard/settings" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Live View</Link>
            </li>
            <li>
              <Link to="/dashboard/reports" className="block p-2 text-gray-700 hover:bg-gray-200 rounded">Reports</Link>
            </li>
            <li>
              <Link to="/dashboard/logout" className="block p-2 text-red-600 hover:bg-red-200 rounded">Logout</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Card Title 1</h2>
            <p className="mt-2 text-gray-600">Some information about card 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Card Title 2</h2>
            <p className="mt-2 text-gray-600">Some information about card 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Card Title 3</h2>
            <p className="mt-2 text-gray-600">Some information about card 3.</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
