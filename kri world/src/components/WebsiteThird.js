// Technologies.jsx
import React from "react";
import { motion } from "framer-motion";

const technologies = [
  {
    title: "Frontend Development:",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Angular", "Vue.js"],
  },
  {
    title: "Backend Development:",
    items: ["PHP", "Python", "Ruby on Rails", "Node.js", "Java", "ASP.NET"],
  },
  {
    title: "Database Management:",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Microsoft SQL Server",
    ],
  },
  {
    title: "E-commerce Platforms:",
    items: ["WooCommerce", "Shopify", "Magento", "BigCommerce"],
  },
];

export default function WebsiteThird() {
  return (
    <section className="bg-[#fef7f1] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" text-3xl md:text-5xl font-bold mb-4">Technologies We Use</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-2xl">
          Our team is proficient in a wide range of programming languages and
          technologies to ensure your website is built using the best tools
          available.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl p-6 text-left"
            >
              <h3 className="font-semibold text-lg mb-3">{tech.title}</h3>
              <ul className="text-gray-700 space-y-1 list-disc list-inside text-lg">
                {tech.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

