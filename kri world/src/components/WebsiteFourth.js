// WhyChoose.jsx
import React, { useState } from "react";

export default function WebsiteFourth() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "1. Experienced Team:",
      content:
        "Our team of skilled developers and designers has years of experience in creating high-quality websites across various industries.",
    },
    {
      title: "2. Customer-Centric Approach:",
      content:
        "We focus on understanding client requirements and delivering solutions that align with their business goals.",
    },
    {
      title: "3. Cutting-Edge Technology:",
      content:
        "We use the latest tools and technologies to ensure your website stays ahead of the competition.",
    },
    {
      title: "4. Affordable Pricing:",
      content:
        "We provide high-quality web solutions at competitive prices without compromising on quality.",
    },
  ];

  return (
    <section className="bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Accordion */}
        <div>
          <h2 className="text-white text-3xl font-bold text-center md:text-left mb-8">
            Why Choose Kriworld?
          </h2>
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className={`cursor-pointer rounded-lg border transition-all ${
                  openIndex === index
                    ? "bg-teal-600 text-white p-4"
                    : "bg-white text-black p-4"
                }`}
              >
                <p className="font-medium text-lg ">{item.title}</p>
                {openIndex === index && (
                  <p className="mt-2 text-sm md:text-lg">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Images */}
        <div className="flex justify-center gap-6">
          <img
            src="https://kriworld.com/assets/img/fresh-images/img-10.png" 
            alt="Team member"
            className="w-48 h-64 object-cover rounded-3xl"
          />
          <img
            src="https://kriworld.com/assets/img/fresh-images/img-9.png" 
            alt="Team member"
            className="w-48 h-64 object-cover rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

