'use client'
import React from 'react';

const electricalServices = [
  { name: 'Wiring Installation', description: 'Professional wiring installation for homes and offices.', price: '$150', available: true },
  { name: 'Lighting Solutions', description: 'Indoor and outdoor lighting installation and repair.', price: '$80', available: true },
  { name: 'Electrical Maintenance', description: 'Routine electrical inspections and maintenance services.', price: '$100', available: true },
  { name: 'Emergency Repairs', description: '24/7 emergency electrical repair services.', price: '$200', available: false }
];

const ElectricalPage = () => {
  const handleBooking = (serviceName) => {
    alert(`Booking request for ${serviceName} has been submitted.`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Electrical Services</h1>
      <p className="text-gray-700 mb-4">
        Our certified electricians are ready to provide reliable electrical solutions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {electricalServices.map((service, index) => (
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

export default ElectricalPage;