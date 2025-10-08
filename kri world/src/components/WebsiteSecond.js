import React from "react";
import { motion } from "framer-motion";
import { Search, ShoppingBag, Database, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Search size={40} className="text-pink-500" />,
    title: "Custom Website Design",
    description:
      "Our custom website design service ensures your site stands out from the competition. We create unique, aesthetically pleasing designs tailored to your brand's identity and target audience.",
    features: [
      "Unique design tailored to your brand",
      "Responsive design for all devices",
      "User-friendly interface",
      "Custom graphics and animations",
    ],
  },
  {
    icon: <ShoppingBag size={40} className="text-pink-500" />,
    title: "E-commerce Development",
    description:
      "Transform your business with our top-notch e-commerce solutions. We provide secure, scalable, and efficient e-commerce platforms that offer a seamless shopping experience.",
    features: [
      "Easy product management",
      "Secure payment gateways",
      "Customer and order management",
      "Inventory tracking and management",
    ],
  },
  {
    icon: <Database size={40} className="text-pink-500" />,
    title: "CMS Development",
    description:
      "Manage your website content effortlessly with our Content Management System (CMS) development service. We work with WordPress, Joomla, and Drupal to deliver a flexible and scalable solution.",
    features: [
      "Easy content management",
      "SEO-friendly structure",
      "Customizable plugins and themes",
      "Multilingual support",
    ],
  },
  {
    icon: <ShieldCheck size={40} className="text-pink-500" />,
    title: "Website Maintenance and Support",
    description:
      "Keep your website running smoothly with our maintenance and support services. We offer regular updates, security checks, and technical support to ensure your site stays up-to-date and secure.",
    features: [
      "Regular updates and backups",
      "Security monitoring",
      "Performance optimization",
      "Technical support",
    ],
  },
];

const WebsiteSecond = () => {
  return (
    <section className="bg-blue-50 py-2 px-6 md:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:bg-blue-100 transition-all duration-300 p-6 border border-gray-200 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>

            <p className="text-gray-600 mb-3 text-2xl">{service.description}</p>

            <h4 className="font-semibold text-gray-800 mb-2 text-lg">Features:</h4>
            <ul className="list-disc list-inside text-gray-600 space-y-1 text-lg">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WebsiteSecond;

