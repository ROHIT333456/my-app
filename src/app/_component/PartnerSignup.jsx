'use client';
import React, { useState } from 'react';

const specificFieldOptions = {
  Electrical: ['Wiring', 'Lighting', 'Maintenance', 'Emergency Repair'],
  Cleaning: ['Home Cleaning', 'Office Cleaning', 'Carpet Cleaning', 'Window Cleaning'],
  Painting: ['Interior Painting', 'Exterior Painting', 'Commercial Painting', 'Custom Wall Art'],
  Plumbing: ['Leak Repair', 'Pipe Installation', 'Drain Cleaning', 'Water Heater Repair']
};

const PartnerSignup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    adharNo: '',
    city: '',
    address: '',
    workingField: 'Electrical',
    specificField: 'Wiring'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'workingField' ? { specificField: specificFieldOptions[value][0] } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Signup Successful!');
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Partner Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-3 border rounded" type="text" name="name" placeholder="Partner Name" value={formData.name} onChange={handleChange} required />
        <input className="w-full p-3 border rounded" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input className="w-full p-3 border rounded" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input className="w-full p-3 border rounded" type="text" name="adharNo" placeholder="Adhar Number" value={formData.adharNo} onChange={handleChange} required />
        <input className="w-full p-3 border rounded" type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input className="w-full p-3 border rounded" type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        
        <select className="w-full p-3 border rounded" name="workingField" value={formData.workingField} onChange={handleChange}>
          {Object.keys(specificFieldOptions).map((field) => (
            <option key={field} value={field}>{field}</option>
          ))}
        </select>

        <select className="w-full p-3 border rounded" name="specificField" value={formData.specificField} onChange={handleChange}>
          {specificFieldOptions[formData.workingField]?.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>

        <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700" type="submit">Signup</button>
      </form>
    </div>
  );
};

export default PartnerSignup;
