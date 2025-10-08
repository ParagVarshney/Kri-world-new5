// src/components/MobileActionButtons.jsx
import React from "react";

export default function MobileActionButtons() {
  return (
    <div className="fixed bottom-0 left-0 mb-[-3px] right-0 z-50 flex md:hidden shadow-lg">
      {/* Call Now Button */}
      <a
        href="tel:+918700661267"
        className="flex-1 bg-green-700 text-white text-center py-3 font-medium hover:bg-green-800 transition"
      >
        📞 Call Now
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918700661267"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-green-600 text-white text-center py-3 font-medium hover:bg-green-700 transition"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}

