import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "Retail and E-commerce",
    description:
      "Enhance your customers' shopping experience with our retail and e-commerce solutions. We create websites and apps that support seamless browsing, secure payments, and customer engagement.",
  },
  {
    title: "Healthcare",
    description:
      "Our healthcare solutions improve patient care and streamline operations. We develop websites, apps, and videos that educate patients, train staff, and promote services.",
  },
  {
    title: "Finance",
    description:
      "We build secure and user-friendly solutions for financial institutions. Our services include web development, mobile apps, and digital marketing tailored to the finance industry.",
  },
  {
    title: "Education",
    description:
      "Our educational solutions provide interactive and engaging learning experiences. We create content for online courses, virtual classrooms, and educational programs.",
  },
  {
    title: "Travel and Hospitality",
    description:
      "Promote your travel and hospitality services with our custom solutions. We create websites, apps, and videos that showcase destinations, accommodations, and travel experiences.",
  },
  {
    title: "Technology",
    description:
      "We produce technology solutions that demonstrate products, explain services, and highlight innovations. Our services include product demos, tutorials, and promotional content.",
  },
];

export default function Industries() {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-12"
        >
          Industries We Serve
        </motion.h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              className="bg-[#e8f0fe] p-6 rounded-xl shadow-md flex flex-col justify-between h-full cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
