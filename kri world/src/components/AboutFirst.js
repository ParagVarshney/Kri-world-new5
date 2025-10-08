import React from "react";
import { motion } from "framer-motion";

const AboutFirst = () => {
  return (
    <section className="relative pt-24 pb-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold text-center text-gray-900 mb-12"
        >
          About Us
        </motion.h1>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/4 flex justify-center md:justify-start"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/kritika4.png"
              alt="Working professional"
              className="w-64 md:w-full rounded-2xl shadow-2xl object-cover hover:shadow-green-200 transition"
            />
          </motion.div>

          {/* Text Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-green-100"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              We Offer Business Solutions That Ensure Your Success
            </h2>
            <p className="text-gray-700 text-lg md:text-2xl leading-relaxed">
              Welcome to{" "}
              <span className="font-semibold text-green-700">Kriworld</span>,
              your trusted partner in navigating the ever-evolving digital
              landscape. We combine creativity, technology, and strategy to
              deliver impactful digital marketing and IT solutions tailored to
              your goals.
            </p>

            <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mt-6">
              Our mission is to empower businesses with innovative tools and
              data-driven strategies that unlock growth and build meaningful
              digital experiences for your audience.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-1/4 flex justify-center md:justify-end"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="/kritika5.png"
              alt="Team member working"
              className="w-48 md:w-full rounded-2xl shadow-2xl object-cover hover:shadow-green-200 transition"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFirst;
