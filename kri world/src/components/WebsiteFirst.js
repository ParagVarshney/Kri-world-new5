import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WebsiteFirst() {
  return (
    <section className="bg-[#f9fbfc] py-32 md:py-44">
      {/* 🔹 Main Heading */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">
          Website Development<br/> Services<br/>
           
        </h1>
      </div>

      {/* 🔹 Content Section */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* ✅ Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <img
            src="/kritika4.png"
            alt="Website Development"
            className="rounded-[150px_0px_150px_0px] shadow-lg w-[90%] md:w-[80%] object-cover"
          />
        </motion.div>

        {/* ✅ Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#eaf3fa] rounded-2xl p-8 md:p-10 shadow-md"
        >
          <h3 className="text-green-600 text-xl md:text-2xl font-semibold mb-3">
            Website Development Services
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
            Build Your Digital Presence with Kriworld
          </h2>
          <p className="text-gray-700 text-lg md:text-2xl leading-relaxed mb-6">
            At Kriworld, we specialize in creating robust, visually appealing, and
            user-friendly websites that help businesses establish a strong digital
            presence. Whether you need a simple informational site or a complex
            e-commerce platform, our team of experienced developers and designers
            is here to bring your vision to life.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            Contact Us <ArrowUpRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

