import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutKriworld() {
  return (
    <section className="bg-[#f3f4f7] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            About Kriworld
          </h2>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Card (Our Value) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl overflow-hidden shadow-lg p-8 relative group"
          >
            {/* Content */}
            <div className="relative z-10 text-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-green-700">
                Our Value
              </h3>
              <p className="text-2xl leading-relaxed mb-3">
                <strong>Innovation:</strong> We are committed to innovation and
                continuously seek new ways to deliver value to our clients.
              </p>
              <p className="text-2xl leading-relaxed mb-3">
                <strong>Integrity:</strong> We conduct our business with
                integrity and honesty, building trust with our clients and
                partners.
              </p>
              <p className="text-2xl leading-relaxed mb-3">
                <strong>Collaboration:</strong> We believe in the power of
                collaboration and work closely with our clients to achieve their
                goals.
              </p>
              <p className="text-2xl leading-relaxed mb-3">
                <strong>Customer Focus:</strong> We put our clients at the
                center of everything we do, understanding their needs and
                delivering tailored solutions.
              </p>
              <p className="text-2xl leading-relaxed">
                <strong>Excellence:</strong> We strive for excellence in
                everything we do, ensuring the highest quality of service and
                solutions.
              </p>
            </div>

            {/* Arrow Icon */}
            <motion.div
              whileHover={{ rotate: 45, scale: 1.2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="absolute top-4 right-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
            >
              <ArrowUpRight size={20} />
            </motion.div>
          </motion.div>

          {/* Right Side (Mission + Vision) */}
          <div className="flex flex-col gap-6">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 90 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md relative group"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Our Mission
              </h3>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Our mission is to empower businesses with innovative technology
                solutions that drive success and growth. We aim to be a trusted
                partner for our clients, helping them navigate the complexities
                of the digital world and achieve their strategic goals.
              </p>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute top-4 right-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow"
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 90 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-md relative group"
            >
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Our Vision
              </h3>
              <p className="text-2xl text-gray-700 leading-relaxed">
                Our vision is to be a global leader in IT solutions, recognized
                for our excellence, innovation, and client satisfaction. We
                strive to create a positive impact on businesses and communities
                through our technology services.
              </p>
              <motion.div
                whileHover={{ rotate: 45, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute top-4 right-4 bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center shadow"
              >
                <ArrowUpRight size={20} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
