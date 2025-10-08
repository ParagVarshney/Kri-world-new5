import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function AppFirst() {
  return (
    <section className="bg-[#faf9f6] py-44 px-6 md:px-12">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          App Development  <br/> Services
            
        </h2>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/kritika3.png" 
            alt="App Development"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-green-700 font-semibold mb-2">
            App Development Services
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Transform Your Business with Custom App Solutions from Kriworld
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6 text-2xl">
            At Kriworld, we specialize in developing high-quality mobile
            applications that cater to your unique business needs. Our team of
            experienced developers and designers are dedicated to creating apps
            that are not only functional but also provide an excellent user
            experience. Whether you need a native app, cross-platform solution,
            or a progressive web app, we have the expertise to deliver a product
            that exceeds your expectations.
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

