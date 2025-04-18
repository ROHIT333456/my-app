export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold">About Us</h2>
            <p className="text-sm mt-3 text-gray-400">
              We connect you with trusted local service providers, ensuring quality and convenience at your doorstep.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:underline text-gray-400">Home</a></li>
              <li><a href="services" className="hover:underline text-gray-400">Services</a></li>
              <li><a href="about" className="hover:underline text-gray-400">About</a></li>
              <li><a href="contact" className="hover:underline text-gray-400">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h2 className="text-xl font-semibold">Contact Us</h2>
            <p className="mt-3 text-gray-400">Email: support@example.com</p>
            <p className="text-gray-400">Phone: +91 98765 43210</p>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Local Service Provider. All rights reserved.
        </div>
      </footer>
    );
  }
  