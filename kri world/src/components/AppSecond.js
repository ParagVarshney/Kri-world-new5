import React from "react";
import { motion } from "framer-motion";
import { Search, Smartphone, Apple, MonitorSmartphone, Globe } from "lucide-react";

const services = [
  {
    icon: <Search className="w-8 h-8 text-pink-500" />,
    title: "Custom Mobile App Development",
    desc: "Our custom mobile app development service is designed to create tailored solutions that meet your specific requirements. We build apps for various platforms including iOS, Android, and Windows.",
    features: [
      "Custom UI/UX design",
      "Native and cross-platform development",
      "Integration with existing systems",
      "Performance optimization",
      "Scalability and security",
    ],
  },
  {
    icon: <Apple className="w-8 h-8 text-pink-500" />,
    title: "iOS App Development",
    desc: "We develop robust and user-friendly iOS applications for iPhone, iPad, and Apple Watch. Our team follows the best practices and guidelines to ensure your app is compatible with the latest iOS versions.",
    features: [
      "Swift and Objective-C development",
      "iPhone and iPad app development",
      "Apple Watch app development",
      "App Store submission and approval",
      "Ongoing maintenance and support",
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8 text-pink-500" />,
    title: "Android App Development",
    desc: "Our Android app development services cover a wide range of devices and OS versions. We create high-performance apps that provide a seamless experience across all Android devices.",
    features: [
      "Java and Kotlin development",
      "Smartphone and tablet app development",
      "Android TV and wearable apps",
      "Google Play Store submission and approval",
      "Ongoing maintenance and support",
    ],
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-pink-500" />,
    title: "Cross-Platform App Development",
    desc: "Reach a wider audience with our cross-platform app development services. We use frameworks like React Native and Flutter to build apps that run smoothly on both iOS and Android.",
    features: [
      "Single codebase for multiple platforms",
      "Faster development cycles",
      "Cost-effective solution",
      "Consistent user experience",
      "Ongoing maintenance and support",
    ],
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-500" />,
    title: "Progressive Web App (PWA) Development",
    desc: "We develop progressive web apps that combine the best of web and mobile experiences. PWAs are fast, reliable, and provide a native app-like experience directly from the browser.",
    features: [
      "Responsive design",
      "Offline functionality",
      "Push notifications",
      "App-like performance",
      "Easy updates and maintenance",
    ],
  },
];

export default function AppSecond() {
  return (
    <section className="bg-[#eaf3ff] py-4 px-6 md:px-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800">
          Our Services
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md hover:bg-blue-100 transition cursor-pointer"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 text-2xl">{service.desc}</p>
            <ul className="text-gray-700 text-lg list-disc list-inside space-y-1">
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

