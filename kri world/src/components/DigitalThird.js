// WhyChoose.jsx
import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function DigitalThird() {
  const [openIndex, setOpenIndex] = useState(0);

  const items = [
    {
      title: "1. Results-Driven Approach:",
      content:
        "We focus on delivering measurable results that drive business growth. Our data-driven strategies are designed to maximize your ROI and achieve your marketing goals.",
    },
    {
      title: "2. Experienced Team:",
      content:
        "Our skilled and passionate professionals bring years of expertise in digital marketing, ensuring you get the best solutions tailored to your needs.",
    },
    {
      title: "3. Customized Strategies:",
      content:
        "We don’t believe in one-size-fits-all. Every business is unique, and we craft personalized strategies aligned with your goals.",
    },
    {
      title: "4. Transparent Reporting:",
      content:
        "Stay updated with clear, transparent reporting that helps you track progress, ROI, and campaign performance in real time.",
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
                <div className="flex justify-between items-center">
                  <p className="font-medium text-lg">{item.title}</p>
                  {openIndex === index ? (
                    <ArrowUpRight className="w-5 h-5" />
                  ) : (
                    <ArrowRight className="w-5 h-5" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="mt-2 text-lg md:text-2xl">{item.content}</p>
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
