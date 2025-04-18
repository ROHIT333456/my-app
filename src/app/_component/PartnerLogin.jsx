'use client';
import React, { useState } from 'react';

const PartnerLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
    alert('Login Successful!');
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Partner Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
          className="w-full p-3 border rounded" 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
        <input 
          className="w-full p-3 border rounded" 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
        />
        <button 
          className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700" 
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default PartnerLogin;