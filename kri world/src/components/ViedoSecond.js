import React from "react";
import { motion } from "framer-motion";
import { Search, Film, Video, Share2, BookOpen } from "lucide-react";

const services = [
  {
    title: "Corporate Video Development",
    icon: <Search size={36} className="text-pink-400" />,
    description:
      "We produce impactful corporate videos that communicate your brand message, showcase your products or services, and highlight your company's achievements. Our corporate videos are designed to engage clients, stakeholders, and employees.",
    features: [
      "Brand storytelling",
      "Product demonstrations",
      "Company culture videos",
      "Testimonial videos",
      "Event coverage",
    ],
  },
  {
    title: "Commercial Video Development",
    icon: <Film size={36} className="text-pink-400" />,
    description:
      "Our commercial video production services help you create effective advertisements that capture attention and drive results. We work with you through every concept and strategy to reach your target audience and achieve your marketing goals.",
    features: [
      "Creative concept development",
      "Scriptwriting",
      "Storyboarding",
      "Professional filming",
      "Post-production editing",
    ],
  },
  {
    title: "Animated Explainer Videos",
    icon: <Video size={36} className="text-pink-400" />,
    description:
      "We create animated explainer videos that simplify complex ideas and make your message easy to understand. Our animations are engaging, informative, and tailored to your brand’s style.",
    features: [
      "2D and 3D animations",
      "Character design",
      "Motion graphics",
      "Voiceover recording",
      "Scriptwriting and storyboarding",
    ],
  },
  {
    title: "Social Media Video Content",
    icon: <Share2 size={36} className="text-pink-400" />,
    description:
      "Boost your social media presence with our eye-catching short-form video content. We create videos optimized for engagement across all platforms, helping you increase social reach.",
    features: [
      "Short-form videos",
      "Instagram and Facebook stories",
      "Reels",
      "YouTube content",
      "Social media ads",
    ],
  },
  {
    title: "Training and Educational Videos",
    icon: <BookOpen size={36} className="text-pink-400" />,
    description:
      "Our training and educational videos provide a comprehensive learning experience for your audience. We create videos that are informative, engaging, and effective for training employees, educating customers, or teaching students.",
    features: [
      "Instructional videos",
      "E-learning modules",
      "Webinar recordings",
      "Educational tutorials",
      "Interactive video content",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const ViedoSecond = () => {
  return (
    <section className="bg-blue-50 py-4 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Services</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:bg-blue-100 hover:shadow-lg transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-3 mb-3">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-600 text-2xl mb-3">{service.description}</p>
            <h4 className="text-gray-700 font-semibold mb-1">Features:</h4>
            <ul className="list-disc list-inside text-gray-600 text-lg space-y-1">
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

export default ViedoSecond;

