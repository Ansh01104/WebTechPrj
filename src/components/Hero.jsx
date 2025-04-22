import React, { useState, useCallback } from "react";
import styles from "../style";
import GetStarted from "./GetStarted";
import Card from "./Card";
import RiveSwitcher from "./RiveSwitcher"; // Import the memoized RiveSwitcher
import image1 from "../assets/images.jpg"; // Import your images directly
import image2 from "../assets/donloa.jpg"; // Add more imports as needed

const Hero = () => {
  // Correctly referencing the images from your assets
  const firstSetOfCards = [
    { id: 1, imageSrc: image1 },
    { id: 2, imageSrc: image1 },
    { id: 3, imageSrc: image1 },
    { id: 4, imageSrc: image1 },
    { id: 5, imageSrc: image1 },
  ];

  const secondSetOfCards = [
    { id: 7, imageSrc: image2 },
    { id: 8, imageSrc: image2 },
    { id: 9, imageSrc: image2 },
    { id: 10, imageSrc: image2 },
    { id: 11, imageSrc: image2 },
  ];

  const [cards, setCards] = useState(firstSetOfCards);
  const [isSwitched, setIsSwitched] = useState(false);

  // useCallback to memoize the function and prevent unnecessary re-creations
  const handleSwitchToggle = useCallback(() => {
    setIsSwitched((prev) => {
      const newIsSwitched = !prev;
      setCards(newIsSwitched ? secondSetOfCards : firstSetOfCards);
      console.log(
        newIsSwitched
          ? "Switching to second set of cards"
          : "Switching to first set of cards"
      );
      return newIsSwitched;
    });
  }, [firstSetOfCards, secondSetOfCards]);

  return (
    <section
      id="home"
      className="relative flex md:flex-row flex-col m:py-5 py-5 mb-5 mt-20"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-120% object-cover z-[0]"
      >
        <source src="src/assets/banner_finalpro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 z-[1]`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[62px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">
              The Next Generation Of HomeServers
            </span>
          </h1>
        </div>

        {/* Centered Grid Layout for Cards */}
        <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1] mt-8">
          <div className="grid grid-cols-3 gap-4">
            {/* Rive Switcher */}
            <RiveSwitcher onToggle={handleSwitchToggle} />

            
            {cards.map((card) => (
              <Card key={card.id} imageSrc={card.imageSrc} /> 
            ))}
          </div>
        </div>
        <h1 className="flex flex-wrap font-poppins justify-center w-full font-semibold ss:text-[52px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            <span className="text-gradient">
                    The Features of Tomorrow Available Today
            </span>
          </h1>
      </div>

      {/* Get Started Button (Mobile View) */}
      <div className={`ss:hidden ${styles.flexCenter} z-[1]`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
