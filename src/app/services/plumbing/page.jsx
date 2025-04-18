'use client'
import React from 'react';

const plumbingServices = [
  { name: 'Leak Repair', description: 'Quick and reliable leak repair services for your home or office.', price: '$60', available: true },
  { name: 'Pipe Installation', description: 'Professional pipe installation with durable materials.', price: '$150', available: true },
  { name: 'Drain Cleaning', description: 'Efficient drain cleaning to clear blockages and maintain flow.', price: '$80', available: false },
  { name: 'Water Heater Repair', description: 'Expert water heater repair services ensuring hot water availability.', price: '$120', available: true }
];

const PlumbingPage = () => {
  const handleBooking = (serviceName) => {
    alert(`Booking request for ${serviceName} has been submitted.`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Plumbing Services</h1>
      <p className="text-gray-700 mb-4">
        Our experienced plumbers provide top-notch services for all your plumbing needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plumbingServices.map((service, index) => (
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

export default PlumbingPage;