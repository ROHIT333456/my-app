'use client';
import React, { useState } from 'react';
import Header from '../_component/Header';
import UserSignup from '../_component/UserSignup';
import UserLogin from '../_component/UserLogin';


const Page = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md transition-all duration-300 ease-in-out transform">
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 w-full border border-gray-300">
            {/* Dynamically render Signup or Login Form */}
            <div className="animate-fade-in">
              {isSignup ? <UserSignup/>:<UserLogin/>}
            </div>

            {/* Responsive Toggle Button */}
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="mt-6 w-full text-center bg-blue-600 text-white py-3 px-4 rounded-lg 
                         hover:bg-blue-700 transition-all duration-300 
                         transform hover:scale-101 active:scale-99"
            >
              {isSignup 
                ? 'Already have an account? Login' 
                : "Don't have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
