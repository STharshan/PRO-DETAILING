import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    quote:
      "Fantastic service, booked the Gold package for full interior and exterior valet and couldn’t be happier with the results. The car has been restored to showroom quality. Will definitely be booking again! Thanks",
    author: "James",
  },
  {
    quote:
      "Fantastic service! Would highly recommend. I came across Pro Detailing on an add on Instagram. They were offering a full detail, usually £180 for half price.",
    author: "Danny",
  },
  {
    quote: "Really happy with the results! The car was cleaned inside and out with amazing attention to detail, and it makes it look newer than it is",
    author: "Anbiyaa Mahmood",
  },
  {
    quote:
      "Such an amazing service—he did a fantastic job and was super thorough inside and out! From booking to the actual detail, everything was professional and he spent 4 hours providing a great service, my car looks brand new. Couldn’t be happier, would definitely recommend. Thank you so much!",
    author: "Taybah Ditta",
  },
];

const ScrollingTestimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className="bg-overlay py-16 overflow-hidden"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="w-[200%] animate-scroll flex space-x-6">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] sm:min-w-[350px] md:min-w-[400px] bg-white text-black dark:bg-black dark:text-white p-6 rounded shadow-md"
          >
            {/* Quote */}
            <p className="text-sm mb-4">"{t.quote}"</p>

            {/* Author */}
            <p className="font-bold text-sm uppercase">
              {t.author}
            </p>

            {/* Source */}
            <p className="text-xs">Google Reviews</p>
          </div>
        ))}
      </div>

      {/* Scrolling Animation */}
      <style jsx="true">{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ScrollingTestimonials;
