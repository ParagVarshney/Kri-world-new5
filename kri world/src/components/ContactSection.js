// ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#eaf2ff] py-8 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch With Us Today
        </motion.h2>
        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto text-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to transform your business with cutting-edge technology
          solutions? Contact us today to discuss your project and learn how we
          can help you achieve your goals.
        </motion.p>
      </div>

      {/* Contact Info Card */}
      <motion.div
        className="bg-black text-white rounded-lg p-8 shadow-lg max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-6 text-gray-300 text-2xl">
          We're here to help! If you have any questions or would like to discuss
          how our SEO and digital marketing services can benefit your business,
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <motion.div
            className="flex items-center space-x-4 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gray-800 p-3 rounded-full">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="font-semibold">Our Location</h3>
              <p className="text-gray-400 text-lg">
                Sarai Khawaja, Haryana, Faridabad 121003
              </p>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="flex items-center space-x-4 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gray-800 p-3 rounded-full">
              <Phone size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p className="text-gray-400 text-lg">+91 870-066-1267</p>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            className="flex items-center space-x-4 hover:text-blue-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gray-800 p-3 rounded-full">
              <Mail size={28} />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Address</h3>
              <p className="text-gray-400 text-lg">harishgupta@kriworld.com</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

