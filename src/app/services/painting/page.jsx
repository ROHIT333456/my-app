'use client'
import React from 'react';

const paintingServices = [
  { name: 'Interior Painting', description: 'Give your home a fresh look with our interior painting services.', price: '$150', available: true },
  { name: 'Exterior Painting', description: 'Protect and beautify your home with our professional exterior painting.', price: '$200', available: true },
  { name: 'Commercial Painting', description: 'High-quality painting services for commercial properties.', price: '$300', available: false },
  { name: 'Custom Wall Art', description: 'Add a personalized touch with custom wall art painting.', price: '$250', available: true }
];

const PaintingPage = () => {
  const handleBooking = (serviceName) => {
    alert(`Booking request for ${serviceName} has been submitted.`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Painting Services</h1>
      <p className="text-gray-700 mb-4">
        Choose from our wide range of painting services tailored to meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paintingServices.map((service, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 mb-2">{service.description}</p>
            <p className="text-blue-600 mb-2">Price: {service.price}</p>
            <button 
              onClick={() => handleBooking(service.name)}
              disabled={!service.available}
              className={`px-4 py-2 rounded-md text-white ${service.available ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              {service.available ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintingPage;
