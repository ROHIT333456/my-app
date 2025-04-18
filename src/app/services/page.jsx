'use client';
import React, { useState } from 'react';

const servicesData = {
  Cleaning: [
    { name: 'Home Cleaning', description: 'Comprehensive home cleaning services to keep your living space spotless.', price: '$50', available: true },
    { name: 'Office Cleaning', description: 'Professional cleaning for your office, ensuring a productive environment.', price: '$100', available: true },
    { name: 'Carpet Cleaning', description: 'Deep carpet cleaning to remove dirt, stains, and allergens.', price: '$70', available: false },
    { name: 'Window Cleaning', description: 'Streak-free window cleaning for a clearer view.', price: '$40', available: true }
  ],
  Electrical: [
    { name: 'Wiring Installation', description: 'Professional wiring installation for homes and offices.', price: '$150', available: true },
    { name: 'Lighting Solutions', description: 'Indoor and outdoor lighting installation and repair.', price: '$80', available: true },
    { name: 'Electrical Maintenance', description: 'Routine electrical inspections and maintenance services.', price: '$100', available: true },
    { name: 'Emergency Repairs', description: '24/7 emergency electrical repair services.', price: '$200', available: false }
  ],
  Painting: [
    { name: 'Interior Painting', description: 'Give your home a fresh look with our interior painting services.', price: '$150', available: true },
    { name: 'Exterior Painting', description: 'Protect and beautify your home with our professional exterior painting.', price: '$200', available: true },
    { name: 'Commercial Painting', description: 'High-quality painting services for commercial properties.', price: '$300', available: false },
    { name: 'Custom Wall Art', description: 'Add a personalized touch with custom wall art painting.', price: '$250', available: true }
  ],
  Plumbing: [
    { name: 'Leak Repair', description: 'Quick and reliable leak repair services for your home or office.', price: '$60', available: true },
    { name: 'Pipe Installation', description: 'Professional pipe installation with durable materials.', price: '$150', available: true },
    { name: 'Drain Cleaning', description: 'Efficient drain cleaning to clear blockages and maintain flow.', price: '$80', available: false },
    { name: 'Water Heater Repair', description: 'Expert water heater repair services ensuring hot water availability.', price: '$120', available: true }
  ]
};

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('Cleaning');

  const handleBooking = (serviceName) => {
    alert(`Booking request for ${serviceName} has been submitted.`);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Our Services</h1>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        {Object.keys(servicesData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-4 py-2 rounded-md ${activeTab === category ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData[activeTab].map((service, index) => (
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

export default ServicesPage;
