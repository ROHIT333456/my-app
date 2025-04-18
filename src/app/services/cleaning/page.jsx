'use client'
import React from 'react';

const cleaningServices = [
  { name: 'Home Cleaning', description: 'Comprehensive home cleaning services to keep your living space spotless.', price: '$50', available: true },
  { name: 'Office Cleaning', description: 'Professional cleaning for your office, ensuring a productive environment.', price: '$100', available: true },
  { name: 'Carpet Cleaning', description: 'Deep carpet cleaning to remove dirt, stains, and allergens.', price: '$70', available: false },
  { name: 'Window Cleaning', description: 'Streak-free window cleaning for a clearer view.', price: '$40', available: true }
];

const CleaningPage = () => {
  const handleBooking = (serviceName) => {
    alert(`Booking request for ${serviceName} has been submitted.`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Cleaning Services</h1>
      <p className="text-gray-700 mb-8 text-center">
        Choose from our wide range of cleaning services tailored to meet your needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cleaningServices.map((service, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow bg-white">
            <h2 className="text-xl font-semibold mb-3 text-blue-800">{service.name}</h2>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <p className="text-blue-600 font-semibold mb-4">Price: {service.price}</p>
            <button 
              onClick={() => handleBooking(service.name)}
              disabled={!service.available}
              className={`w-full px-4 py-2 rounded-md text-white ${service.available ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
            >
              {service.available ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CleaningPage;