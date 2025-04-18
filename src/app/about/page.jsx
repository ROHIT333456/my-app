import React from 'react';
import Header from '../_component/Header';
import { User, Users, MessageSquare, Award } from 'lucide-react';
import Footer from '../_component/Footer';

const AboutPage = () => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO & Founder",
      image: "/team1.jpg",
      bio: "With over 15 years of experience in tech, Sarah leads our company with vision and passion."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CTO",
      image: "/team2.jpg",
      bio: "Michael brings innovative solutions and technical expertise to our product development."
    },
    {
      id: 3,
      name: "Priya Patel",
      position: "Design Director",
      image: "/team3.jpg",
      bio: "Priya ensures our products are not just functional but also beautiful and intuitive."
    }
  ];

  // Company values
  const values = [
    { icon: <Users className="w-10 h-10 text-blue-500" />, title: "Collaboration", description: "We believe in the power of teamwork and open communication." },
    { icon: <Award className="w-10 h-10 text-blue-500" />, title: "Excellence", description: "We strive for quality in everything we create and deliver." },
    { icon: <MessageSquare className="w-10 h-10 text-blue-500" />, title: "Transparency", description: "We maintain honest relationships with our clients and partners." }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
      {/* Hero Section with Parallax Effect */}
      <section className="relative bg-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-600"></div>
          {/* Pattern overlay */}
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6" data-aos="fade-down">About Us</h1>
          <p className="text-xl max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
            We're a team of passionate individuals dedicated to creating innovative solutions that transform the way businesses operate.
          </p>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2018, our company began with a simple idea: to create technology that makes a positive impact on communities and businesses alike.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of three has now grown into a diverse group of experts committed to innovation and excellence in everything we do.
              </p>
              <p className="text-gray-600">
                Through partnerships and collaborations, we've expanded our reach while staying true to our core mission of connecting people through technology.
              </p>
            </div>
            <div className="md:w-1/2" data-aos="fade-left">
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
                <img src="/office.jpg" alt="Our Office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="font-medium">Our headquarters in San Francisco</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 px-4 md:px-12 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12" data-aos="fade-up">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-medium text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 px-4 md:px-12">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-12" data-aos="fade-up">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={member.id} 
                className="bg-white p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-8px]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative mb-4 rounded-xl overflow-hidden group">
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-75 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <User className="w-12 h-12 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 px-4 md:px-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
        <div className="container mx-auto max-w-4xl" data-aos="fade-up">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-lg opacity-90 mb-8">
            We'd love to hear from you. Reach out to discuss how we can help your business grow.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-700 font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    {/* <Footer/> */}
    <Footer/>

    </div>
  );
};

export default AboutPage;