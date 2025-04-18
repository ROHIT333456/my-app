'use client';

import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    // Add authentication logic here
  };
  
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 text-center">User Login</h2>
      <p className="text-gray-500 text-center mt-2">Sign in to access your account</p>
      
      <form className="mt-6" onSubmit={handleLogin}>
        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <Mail className="w-5 h-5 text-gray-400" />
            <input
              type="email"
              className="w-full bg-transparent outline-none ml-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        
        {/* Password Input */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <div className="flex items-center border rounded-lg bg-gray-50 px-3 py-2 focus-within:ring-2 focus-within:ring-blue-500">
            <Lock className="w-5 h-5 text-gray-400" />
            <input
              type="password"
              className="w-full bg-transparent outline-none ml-2"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        
        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default UserLogin;