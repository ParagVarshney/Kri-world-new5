// AboutSecond.jsx
import React from "react";

const AboutSecond = () => {
  return (
    <section className="bg-[#f7efe7] py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <p className="text-teal-700 text-lg font-medium mb-2">Why Choose Us</p>
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience the Advantage <br /> Why We’re the Right Choice
          </h2>
          <p className="text-gray-700 text-lg md:text-2xl mb-6">
            At Kriworld, integrity, excellence, and dedication are at the core of everything we do. 
            We are passionate about helping businesses thrive in the digital age, and we take pride 
            in being a trusted partner on your journey to success.
          </p>

          {/* Info Boxes */}
          <div className="flex flex-col gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-gray-900 text-2xl mb-2">Expertise</h3>
              <p className="text-gray-700 text-lg md:text-2xl">
                With years of experience and a team of seasoned professionals, we bring expertise 
                across various digital marketing disciplines—from SEO and PPC to social media and content marketing.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-2xl text-gray-900 mb-2">Tailored Strategies</h3>
              <p className="text-gray-700 text-lg md:text-2xl">
                We understand that every business is unique. That's why we develop customized digital marketing strategies 
                that align with your goals, industry nuances, and target audience, ensuring maximum impact and ROI.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold text-2xl text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-700 text-lg md:text-2xl">
                Staying ahead in the digital landscape requires constant innovation. We leverage the latest tools, techniques, 
                and insights to keep your brand at the forefront of industry trends and technological advancements.
              </p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full md:w-1/2 flex flex-col items-center gap-6">
          <img
            src="/kritika2.png"
            alt="Employee 2"
            className="w-64 md:w-80 object-cover rounded-xl"
          />
          <img
            src="/kritika1.png"
            alt="Employee 3"
            className="w-64 md:w-80 object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSecond;

