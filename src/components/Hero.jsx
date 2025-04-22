import React, { useState, useEffect } from "react";
import Stats from "./Stats";
import { HeroHighlight } from "./ui/hero-highlight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    setShowHero(true);
  }, []);

  useEffect(() => {
    if (showHero) {
      setTimeout(() => setShowCarousel(true), 100);
    }
  }, [showHero]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };

  const images = [
    "https://servalabs.b-cdn.net/h/Atom-Pro-2.png",
    "https://servalabs.b-cdn.net/h/Atom-Pro.png",
  ];
  const captions = ["Atom-Pro", "Atom-Pro"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden z-[45]">
      <HeroHighlight>
        <div className="relative z-10 w-full h-full pt-6 px-4 sm:px-8 flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side Content */}
          <div className="w-full md:w-1/2 p-4 md:p-6 flex flex-col justify-center">
            <h1 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[52px] text-white leading-tight mb-4 text-center md:text-left">
              <span className="text-gradient">
                Features of Tomorrow Available Today
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mt-4 text-white text-center md:text-left">
              Top Features:
            </h2>
            <ul className="list-none mt-4 space-y-3">
              <Step title="All the data lives in your home" />
              <Step title="5000Mbps speed (vs 100-150Mbps now)" />
              <Step title="Up to 8TB storage, access from anywhere (Not Mars)" />
              <Step title="Protect your loved ones with Network Firewall" />
              <Step title="For those who value their data" />
            </ul>
          </div>

          {/* Right Side Image or Carousel */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0 flex justify-center">
            {showCarousel && (
              <div
                className="w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px] h-[300px] sm:h-[400px] md:h-[600px] transform transition-all duration-500"
                style={{ animation: "slideDown 2s ease-out" }}
              >
                <Slider {...sliderSettings}>
                  {images.map((image, index) => (
                    <div key={index} className="relative">
                      <p className="absolute top-0 left-0 w-full text-center text-white font-poppins font-medium text-sm sm:text-lg bg-black bg-opacity-50 py-2">
                        {captions[index % captions.length]}
                      </p>
                      <img
                        src={image}
                        alt={`Feature ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            )}
          </div>
        </div>

        <style>{`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }

          .text-gradient {
            background: linear-gradient(
              157.81deg,
              #def9fa -43.27%,
              #bef3f5 -21.24%,
              #9dedf0 12.19%,
              #7de7eb 29.82%,
              #5ce1e6 51.94%,
              #33bbcf 90.29%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }
        `}</style>
        <Stats />
      </HeroHighlight>
    </section>
  );
};

const Step = ({ title }) => (
  <li className="flex gap-3 items-start">
    <CheckIcon />
    <h2 className="text-white text-base sm:text-lg md:text-xl">{title}</h2>
  </li>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 2c-.218 0-.432.002-.642.005l-.616.017l-.299.013l-.579.034l-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553l-.034.579c-.005.098-.01.198-.013.299l-.017.616l-.004.318l-.001.324c0 .218.002.432.005.642l.017.616l.013.299l.034.579l.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046l.579.034c.098.005.198.01.299.013l.616.017l.642.005l.642-.005l.616-.017l.299-.013l.579-.034l.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553l.034-.579c.005-.098.01-.198.013-.299l.017-.616l.005-.642l-.005-.642l-.017-.616l-.013-.299l-.034-.579l-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046l-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094l-4 4a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083l1.293 1.292l3.293-3.292z"
      fill="currentColor"
      strokeWidth="0"
    />
  </svg>
);

export default Hero;
