import React from 'react';
import Header from '../_component/Header';
import Footer from '../_component/Footer';

const PartnerPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center animate-fade-in-down">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Partner Page</h1>
        <p className="text-lg">Connecting businesses for a brighter future.</p>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-12 animate-slide-in-left">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Our Partnership</h2>
        <p className="text-gray-600 max-w-2xl">We believe in collaboration and building long-lasting partnerships that benefit everyone. Our network includes industry leaders and innovative startups.</p>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4 md:px-12 animate-slide-in-right">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((partner) => (
            <div key={partner} className="bg-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img src={`/partner${partner}.png`} alt={`Partner ${partner}`} className="w-full h-32 object-contain" />
              <h3 className="text-lg font-medium mt-4">Partner {partner}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-12 text-center animate-fade-in-up">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Become a Partner</h2>
        <p className="text-gray-600 mb-6">We'd love to hear from you. Let's grow together!</p>
        <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">Contact Us</a>
      </section>
      <Footer/>
    </div>
  );
};

export default PartnerPage;
