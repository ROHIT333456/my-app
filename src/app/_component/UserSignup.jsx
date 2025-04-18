'use client';

import React, { useState } from 'react';
import { Mail, Lock, MapPin, Phone } from 'lucide-react';

const UserSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    city: '',
    contactNo: '',
    address: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, city, contactNo, address } = formData;

    console.log('User Registered:', { email, city, contactNo, address });
    // Add sign-up logic here (API integration)
  };

  return (
    <div className="mt-10 "> {/* Added top margin here */}
      <h2 className="text-2xl font-bold text-gray-800 text-center">Create an Account</h2>
      <p className="text-gray-500 text-center mt-2">Sign up to access exclusive services</p>

      {error && <p className="text-red-500 text-center mt-2">{error}</p>}

      <form className="mt-6" onSubmit={handleSubmit}>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              name="email"
              className="w-full bg-transparent outline-none ml-2"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              name="password"
              className="w-full bg-transparent outline-none ml-2"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* City */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">City</label>
          <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2">
            <MapPin className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              name="city"
              className="w-full bg-transparent outline-none ml-2"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Contact Number */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Contact No</label>
          <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2">
            <Phone className="w-5 h-5 text-gray-400" />
            <input
              type="tel"
              name="contactNo"
              className="w-full bg-transparent outline-none ml-2"
              placeholder="Enter your contact number"
              value={formData.contactNo}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Full Address */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Full Address</label>
          <textarea
            name="address"
            className="w-full border rounded-lg bg-gray-50 px-3 py-2 outline-none"
            placeholder="Enter your full address"
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserSignup;