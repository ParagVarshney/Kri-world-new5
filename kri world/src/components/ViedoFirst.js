import React from "react";

const ViedoFirst = () => {
  return (
    <section className="bg-[#f7efe7] py-44 px-6 md:px-12">
      {/* Main Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-gray-900">
        Video Development <br/> Services
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="/kritika4.png"
            alt="Video Development"
            className="rounded-lg shadow-lg w-full md:w-10/12 object-cover"
          />
        </div>

        {/* Right Content */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Bring Your Vision to Life with Kriworld
          </h3>
          <p className="text-gray-700 text-2xl leading-relaxed mb-6">
            At kriworld.com, we specialize in creating captivating and
            professional videos that tell your story and engage your audience.
            Our team of experienced videographers, editors, and animators are
            dedicated to producing high-quality videos that meet your specific
            needs and objectives. From corporate videos and commercials to
            animated explainer videos and social media content, we have the
            expertise to deliver compelling visual experiences.
          </p>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-medium hover:bg-teal-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ViedoFirst;

