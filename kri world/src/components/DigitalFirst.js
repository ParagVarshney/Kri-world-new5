import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function DigitalFirst() {
  return (
    <section className="bg-[#faf9f6] py-32 md:py-44 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800">
          Digital Marketing <br/> Services
        </h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/kritika5.png" 
            alt="Digital Marketing"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-green-700 font-semibold text-lg mb-2">
            Digital Marketing Services
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Elevate Your Brand with Kriworld
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-2xl">
            At Kriworld, we understand that a strong digital presence is crucial
            for business success in today's competitive market. Our
            comprehensive digital marketing services are designed to enhance
            your online visibility, engage your audience, and drive conversions.
            We employ innovative strategies and cutting-edge tools to deliver
            measurable results that align with your business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-full font-semibold shadow-md hover:bg-green-700 transition"
          >
            Contact Us <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

