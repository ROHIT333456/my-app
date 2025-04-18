import React from 'react';
import Footer from './Footer';

const Dashbord = () => {
  const services = [
    { name: 'Electrical', link: '/services/electrical' },
    { name: 'Plumbing', link: '/services/plumbing' },
    { name: 'Painting', link: '/services/painting' },
    { name: 'Cleaning', link: '/services/cleaning' },
  ];

  return (
    <>
    <div className="relative bg-white banner">
      {/* Main Banner Section */}
      <div className="relative bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Professional Local Services <br />
                You Can Trust
              </h1>
              <p className="text-base sm:text-lg text-blue-100">
                Expert solutions for your home and business needs. Available 24/7 with guaranteed satisfaction.
              </p>
              <div className="space-y-4">
                {['Licensed & Insured Professionals', 'Same Day Service Available', '100% Satisfaction Guaranteed'].map((text, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <div className="bg-blue-500 p-1 rounded">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm sm:text-base">{text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/services" className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors text-sm sm:text-base">
                  Book Now
                </a>
                <a href="/quote" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors text-sm sm:text-base">
                  Get Free Quote
                </a>
              </div>

              {/* Contact Info */}
              <div className="pt-6">
                <p className="text-lg sm:text-xl font-bold">Call Us: <a href="tel:+916207035060" className="underline">(+91) 6207035060</a></p>
                <p className="text-sm sm:text-base text-blue-200">Serving [Your City] and Surrounding Areas</p>
              </div>
            </div>

            {/* Right Content - Service Cards */}
            <div className="hidden md:grid grid-cols-2 gap-4">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.link}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-white text-center hover:bg-white/20 transition-colors cursor-pointer"
                >
                  <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold">{service.name}</h3>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Badge Banner */}
        <div className="bg-blue-800 py-4">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-4 text-white">
            <div className="flex items-center gap-6 text-sm sm:text-base">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9/5 Rating</span>
              </span>
              <span>|</span>
              <span>1000+ Happy Customers</span>
              // <span>|</span>
              <span>15+ Years Experience</span>
            </div>
            <div className="flex items-center gap-4">
              <img src="/api/placeholder/100/40" alt="Trust Badge" className="h-10" />
              <img src="/api/placeholder/100/40" alt="Certification Badge" className="h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Dashbord;