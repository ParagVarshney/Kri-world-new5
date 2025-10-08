// Footer.jsx
import React from "react";
import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-gray-100 overflow-hidden">
      {/* 🌊 Animated Wave at the Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[150px] animate-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44c58.39 9.18 114.64 23.13 172 32 
               86.86 13.67 175.55 17.15 262.3 3.86 
               C898.85 77.87 986.69 41.18 1078 31.8 
               c70.84-7.26 141.88 3.28 211.79 17.95v71.81H0V64.1 
               c76.8-12.44 155.61-20.02 234.17-17.25 
               30.7 1.07 61.33 4.09 91.22 9.59z"
            fill="#1a75ff"
          />
        </svg>
      </div>

      {/* 💙 Background Gradient Section */}
      <div className="relative bg-gradient-to-b from-[#0b64db] via-[#0845b5] to-[#042b7a] pt-40 pb-10 px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-blue-400/40 pb-10">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-2xl mb-4 uppercase tracking-wide">
              Get to Know Us
            </h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-white cursor-pointer transition-colors">About Kriworld</li>
              <li className="hover:text-white cursor-pointer transition-colors">Our Team</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Press & Media</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-2xl mb-4 uppercase tracking-wide">
              Our Services
            </h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-white cursor-pointer transition-colors">Website Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">Digital Marketing</li>
              <li className="hover:text-white cursor-pointer transition-colors">App Development</li>
              <li className="hover:text-white cursor-pointer transition-colors">Video Creation</li>
              <li className="hover:text-white cursor-pointer transition-colors">Branding Solutions</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold text-2xl mb-4 uppercase tracking-wide">
              Connect With Us
            </h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-white cursor-pointer transition-colors">Facebook</li>
              <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
              <li className="hover:text-white cursor-pointer transition-colors">LinkedIn</li>
              <li className="hover:text-white cursor-pointer transition-colors">YouTube</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-white font-semibold text-2xl mb-4 uppercase tracking-wide">
              Let Us Help You
            </h3>
            <ul className="space-y-2 text-lg">
              <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Support</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/krilogo.png" alt="Kriworld Logo" className="h-20" />
          </div>

          {/* Language & Country */}
          <div className="flex items-center gap-4 text-sm">
            <button className="flex items-center gap-2 border border-blue-300 px-3 py-1 rounded-md hover:bg-blue-800 transition-colors">
              <Globe size={16} /> English
            </button>
            <button className="border border-blue-300 px-3 py-1 rounded-md hover:bg-blue-800 transition-colors">
              India
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-lg text-blue-100 mt-6">
          © {new Date().getFullYear()} <span className="text-white font-semibold">Kriworld</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
