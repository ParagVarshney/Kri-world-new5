import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ViedoThird = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const points = [
    {
      title: "1. Experienced Team:",
      content:
        "Our team of skilled videographers, editors, and animators has years of experience in creating high-quality videos across various industries.",
    },
    {
      title: "2. Customized Solutions:",
      content:
        "We tailor every project to meet your brand’s unique goals, ensuring every video aligns with your message and target audience.",
    },
    {
      title: "3. Cutting-Edge Technology:",
      content:
        "We utilize the latest tools, techniques, and software to deliver top-notch production quality and creativity.",
    },
    {
      title: "4. Transparent Process:",
      content:
        "We maintain clear communication throughout the project lifecycle, ensuring you’re informed at every stage.",
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-center md:text-left mb-6">
            Why Choose Kriworld?
          </h2>

          {points.map((point, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`cursor-pointer border border-gray-600 rounded-md p-4 transition-all duration-300 ${
                activeIndex === index
                  ? "bg-teal-600 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
            >
              <div className="flex justify-between items-center">
                <h3
                  className={`font-semibold text-2xl ${
                    activeIndex === index ? "text-white" : "text-gray-900"
                  }`}
                >
                  {point.title}
                </h3>
                <ArrowUpRight
                  className={`${
                    activeIndex === index ? "text-white" : "text-gray-700"
                  }`}
                  size={18}
                />
              </div>

              {/* Expanded content */}
              {activeIndex === index && (
                <p className="text-lg mt-2 text-white leading-relaxed">
                  {point.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right Section - Images */}
        <div className="w-full md:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-6">
          <img
            src="https://kriworld.com/assets/img/all-images/vd-1.png"
            alt="Android Graphic"
            className="w-48 h-64 object-cover rounded-[2rem] shadow-lg"
          />
          <img
            src="https://kriworld.com/assets/img/all-images/vd-2.png"
            alt="Mobile App Graphic"
            className="w-48 h-64 object-cover rounded-[2rem] shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ViedoThird;

