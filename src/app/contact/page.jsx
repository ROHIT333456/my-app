'use client';

import React, { useState } from 'react';
import Header from '../_component/Header';
import Footer from '../_component/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically add your API call to send the form data
    // For now, we'll just set submitted to true
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700 mb-8">We'd love to hear from you! Please fill out the form below.</p>
        </div>

        {submitted ? (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 max-w-lg mx-auto mb-8 rounded">
            <p className="font-bold">Thank you!</p>
            <p>Your message has been submitted. We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto mb-8">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                rows="5"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full transition duration-200"
            >
              Submit
            </button>
          </form>
        )}

        {/* Contact Options */}
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Other Ways to Reach Us</h2>
          <p className="text-gray-600 mb-4 text-center">Have an urgent inquiry? Give us a call or find us on the map.</p>

          <div className="flex flex-col items-center space-y-6">
            {/* Call Us Button */}
            <a 
              href="tel:+916207035060" 
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 text-center w-full md:w-auto"
            >
              Call Us: (+91) 6207035060
            </a>

            {/* Google Map */}
            <div className="w-full">
              <iframe
                title="Company Location"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=University+Polytechnic+BIT+Mesra+Ranchi+Jharkhand"
                width="100%"
                height="300"
                className="border rounded-lg shadow-md"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;