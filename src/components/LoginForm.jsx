// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (email === 'admin' && password === 'admin') {
      console.log('Logged in as Admin');
      navigate('/dashboard'); // Redirect to Dashboard
    } else {
      console.log('Invalid credentials');
      // Optionally, show an error message to the user
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-center">Sign In to Your Account</h2>
        <form onSubmit={handleSubmit} className="mt-12 grid grid-cols-1 gap-6">
          {/* Email Field */}
          <input
            type="text" // Changed to text for username
            placeholder="Your Username" // Updated placeholder for username
            className="border p-4 rounded-lg w-full focus:ring focus:ring-green-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Field */}
          <input
            type="password"
            placeholder="Your Password"
            className="border p-4 rounded-lg w-full focus:ring focus:ring-green-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
              <span className="ml-2 text-gray-700">Remember me</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="#" className="text-green-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </section>
  );
}
