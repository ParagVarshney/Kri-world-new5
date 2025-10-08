import React from "react";
import { motion } from "framer-motion";
import { Search, MousePointer, Users, FileText, TrendingUp, Mail } from "lucide-react";

const services = [
  {
    icon: <Search size={32} className="text-pink-500" />,
    title: "Search Engine Optimization (SEO)",
    desc: "Our SEO experts use the latest techniques to improve your website’s visibility on search engines.",
    features: [
      "Keyword research and analysis",
      "On-page optimization",
      "Link building",
      "Content creation and optimization",
      "Technical SEO",
    ],
  },
  {
    icon: <MousePointer size={32} className="text-purple-500" />,
    title: "Pay-Per-Click (PPC) Advertising",
    desc: "Maximize your ROI with our targeted PPC campaigns on Google Ads, Bing Ads and more.",
    features: [
      "Keyword research and selection",
      "Ad campaign creation",
      "Budget management",
      "Performance tracking and reporting",
      "Conversion rate optimization",
    ],
  },
  {
    icon: <Users size={32} className="text-blue-500" />,
    title: "Social Media Marketing",
    desc: "Engage with your audience on social media platforms through our strategic campaigns.",
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Profile setup and optimization",
      "Community management",
      "Social media advertising",
    ],
  },
  {
    icon: <FileText size={32} className="text-green-500" />,
    title: "Content Marketing",
    desc: "Build a strong brand presence with high-value and relevant content that attracts and engages your target audience.",
    features: [
      "Content strategy alignment",
      "Blog writing and development",
      "Article and infographic creation",
      "Video marketing",
      "Content distribution",
    ],
  },
  {
    icon: <TrendingUp size={32} className="text-orange-500" />,
    title: "Conversion Rate Optimization (CRO)",
    desc: "Improve your website’s performance with A/B testing, landing page optimization and more.",
    features: [
      "Website audits",
      "A/B testing",
      "User experience improvements",
      "Landing page optimization",
      "Conversion funnel analysis",
    ],
  },
  {
    icon: <Mail size={32} className="text-red-500" />,
    title: "Email Marketing",
    desc: "Stay connected with your audience with personalized campaigns designed to convert.",
    features: [
      "List segmentation and management",
      "Email template design",
      "A/B testing and optimization",
      "Performance analysis and reporting",
    ],
  },
];

export default function DigitalSecond() {
  return (
    <section className="bg-[#eef5ff] py-0 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          Our Services
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition"
          >
            <div className="flex items-center gap-4 mb-4">
              {service.icon}
              <h3 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 mb-4 text-2xl">{service.desc}</p>
            <ul className="list-disc text-lg list-inside text-gray-700 space-y-1">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

