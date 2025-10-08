import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    text: `I highly recommend to anyone looking for reliable and high-quality app development services. I will definitely work with them again for future projects!`,
    name: "Riya Mehta",
    location: "Delhi",
    rating: 5,
  },
  {
    text: `Their web design team did a fantastic job redesigning our website. The new design looks amazing and improved our website traffic significantly!`,
    name: "Priya Menon",
    location: "Marketing Head",
    rating: 5,
  },
  {
    text: `The development process was smooth, and they delivered everything on time. Great communication and professional team.`,
    name: "Kunal Sharma",
    location: "Mumbai",
    rating: 5,
  },
  {
    text: `Kriworld team is super talented and very supportive. They listened to our ideas and transformed them into a beautiful working product.`,
    name: "Ananya Gupta",
    location: "Bangalore",
    rating: 5,
  },
  {
    text: `Excellent service! They helped us with both website design and digital marketing. We saw real improvement in our online presence.`,
    name: "Rohit Verma",
    location: "Pune",
    rating: 5,
  },
];

const ClientReviews = () => {
  return (
    <section className="bg-[#f1f4f9] py-8 px-4 md:px-12">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-black">
        What Our Client Say <br className="hidden md:block" /> On Google Reviews
      </h2>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md p-6 mx-2 h-full flex flex-col justify-between transition-transform transform hover:scale-[1.02]">
              <p className="text-gray-700 text-2xl leading-relaxed mb-4">
                “{review.text}”
              </p>
              <div className="flex items-center space-x-2 mb-2">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-green-800 text-2xl font-bold">
                    ★
                  </span>
                ))}
              </div>
              <p className="font-semibold text-gray-900 text-lg">
                – {review.name}
                {review.location && <span className="text-gray-600"> , {review.location}</span>}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ClientReviews;

