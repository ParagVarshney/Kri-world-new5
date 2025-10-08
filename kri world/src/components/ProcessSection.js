import React from "react";
import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discovery and Planning",
    description:
      "We start by understanding your business, goals, and target audience. This helps us create a detailed project plan.",
    image:
      "https://media.istockphoto.com/id/1465316262/photo/businessman-inspecting-paperwork-document-of-business-data-analysis-working-management-report.jpg?s=612x612&w=0&k=20&c=kpD3aZWVIH0VfOwdG4RX5vPRFPMftg5Dp4xCVo3Lito=", // Replace with your image
  },
  {
    title: "Design",
    description:
      "Our designers create mockups and wireframes based on your requirements. We ensure the design is visually appealing and user-friendly.",
    image:
      "https://img.freepik.com/free-photo/ui-ux-representations-with-laptop_23-2150201871.jpg?t=st=1733554822~exp=1733558422~hmac=89a94f7c77beca5b39161b3b2f780132fb88ab331fe95f2650c150727f855325&w=740", // Replace with your image
  },
  {
    title: "Development",
    description:
      "Our developers turn the design into a functional product using the latest technologies. We focus on clean code, performance, and security.",
    image:
      "https://www.peerbits.com/static/093a0004807754d5e770f2627f2ee795/c5b3e/how-to-choose-software-development-methodology.png", // Replace with your image
  },
  {
    title: "Testing and Launch",
    description:
      "We thoroughly test the product for any issues and ensure it works seamlessly across all platforms. Once approved, we launch the product.",
    image:
      "https://cdn.prod.website-files.com/60426a790b66a213de74edf9/6095acca84077b7febb223bd_project-test-phases%402x.png", // Replace with your image
  },
  {
    title: "Maintenance and Support",
    description:
      "We provide ongoing support and maintenance to keep your product updated and secure.",
    image:
      "https://gesrepair.com/wp-content/uploads/Maintenance-program-1024x634.jpg", // Replace with your image
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-[#cce8ee] py-8 px-4 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
        Our Process
      </h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 justify-center">
        {processSteps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl md:text-2xl font-semibold mb-2 text-black">
                {step.title}
              </h3>
              <p className="text-gray-700 text-2xl md:text-2xl">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;

