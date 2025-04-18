'use client';
import React, { useState } from 'react';
import PartnerSignup from '../_component/partnerSignup';
import PartnerLogin from '../_component/partnerLogin';

const Page = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
          <h2 className="text-2xl font-bold text-white text-center">
            {isLogin ? 'Partner Login' : 'Partner Signup'}
          </h2>
          <p className="text-blue-100 text-center mt-2">
            {isLogin 
              ? 'Welcome back! Access your partner dashboard' 
              : 'Join our partner program and grow your business'}
          </p>
        </div>
        
        <div className="p-8">
          {isLogin ? <PartnerLogin /> : <PartnerSignup />}
          
          <div className="mt-8 flex justify-center space-x-4">
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                isLogin 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Sign In
            </button>
            <button
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                !isLogin 
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md' 
                  : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;