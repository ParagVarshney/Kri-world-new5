import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const points = [
  {
    title: "Experienced Team",
    desc: "Our team of skilled developers and designers has years of experience in creating high-quality mobile applications across various industries.",
  },
  {
    title: "Customer-Centric Approach",
    desc: "We prioritize our clients’ needs and ensure that every project is aligned with their vision and goals.",
  },
  {
    title: "Cutting-Edge Technology",
    desc: "We use the latest tools and frameworks to deliver innovative and future-ready solutions.",
  },
  {
    title: "Transparent Process",
    desc: "We maintain clear communication and provide regular updates throughout the development process.",
  },
];

export default function AppThird() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12">
        Why Choose Kriworld?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* Left side - Accordion */}
        <div className="space-y-4">
          {points.map((point, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg p-5 flex justify-between items-center cursor-pointer transition ${
                activeIndex === index
                  ? "bg-teal-600 text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              <div>
                <h3 className="font-bold text-2xl">
                  {index + 1}. {point.title}{" "}
                  {activeIndex === index && (
                    <ExternalLink className="inline-block w-4 h-4 ml-1" />
                  )}
                </h3>
                {activeIndex === index && (
                  <p className="text-lg mt-2">{point.desc}</p>
                )}
              </div>
              <ArrowRight className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* Right side - Images */}
        <div className="grid grid-cols-2 gap-6">
          <img
            src="https://kriworld.com/assets/img/fresh-images/img-11.png"
            alt="Team Member 1"
            className="rounded-3xl object-cover w-full h-60"
          />
          <img
            src="https://kriworld.com/assets/img/fresh-images/img-12.png"
            alt="Team Member 2"
            className="rounded-3xl object-cover w-full h-60"
          />
        </div>
      </div>
    </section>
  );
}

