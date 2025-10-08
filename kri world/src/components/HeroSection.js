import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center pt-36 pb-24 px-6 md:px-12 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80')", 
      }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-green-50/70"></div>

      {/* Floating background glow */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
        
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-left"
        >
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full text-lg font-semibold mb-6 shadow-sm"
          >
            🚀 Welcome to Kriworld — Innovating the Future
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl font-extrabold text-gray-900 leading-tight mb-6 drop-shadow-lg"
          >
            Your Trusted IT <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
              Solutions Partner
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-gray-700 text-xl sm:text-2xl leading-relaxed max-w-lg mb-10"
          >
            At Kriworld, we turn your ideas into reality with cutting-edge
            technology. From web and app development to digital marketing and
            video production — we empower your business to shine in the digital
            world.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex gap-4"
          >
            <a
              href="tel:+91XXXXXXXXXX"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-700 hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              📞 Call Us Now
            </a>
            <a
              href="/contact"
              className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-600 hover:text-white hover:scale-105 transition-transform duration-300"
            >
              ✉️ Contact Now
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-end relative"
        >
          {/* Glow Behind Image */}
          <div className="absolute inset-0 flex justify-center md:justify-end">
            <div className="w-72 h-72 sm:w-96 sm:h-96 md:w-[34rem] md:h-[34rem] bg-green-100 rounded-full blur-3xl opacity-50"></div>
          </div>

          {/* Floating Image */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-72 h-72 sm:w-96 sm:h-96 md:w-[34rem] md:h-[34rem] rounded-full overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm bg-white/40"
          >
            <img
              src="/girl.webp"
              alt="Hero Illustration"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
