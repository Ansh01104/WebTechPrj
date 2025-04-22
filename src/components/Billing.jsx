import { apple, google } from "../assets";
import styles from "../style"; // Removed unnecessary layout import
import { useState } from "react"; // Import useState to manage hover state

const Billing = () => {
  // State to handle hover
  const [isHovered, setIsHovered] = useState(false);

  // Video sources
  const idleVideoSrc = "src/assets/idle.mp4";
  const hoverVideoSrc = "src/assets/idle.mp4"; // Add the hover video path

  const handleMouseEnter = () => {
    setIsHovered(true); // Trigger hover state
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Reset hover state
  };

  return (
    <section id="product" className="relative flex md:flex-row flex-col-reverse sm:py-16 py-6">
      
      {/* Left-aligned text section */}
      <div className={`flex-1 flex-col relative text-white z-[0]`}>
        <h1 className="text-[4rem] font-bold text-left max-w-[1120px]">
          Lightning fast. Edge ready.
        </h1>
        <div className="mt-6 text-left">
          <p className={`${styles.paragraph} max-w-1120px`}>
            The Neon serverless driver, designed for fast queries over HTTP.
          </p>
          <h2 className="text-[3rem] mt-4">
            10 <span className="text-blue-400">ms</span>
          </h2>
          <p className={`${styles.paragraph} max-w-[1120px]`}>
            Import it easily and achieve high performance in your queries.
          </p>
        </div>

        {/* Buttons for app download */}
        <div className="flex flex-row mt-10">
          <img
            src={apple}
            alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
          />
          <img
            src={google}
            alt="google_play"
            className="w-[144px] h-[43px] object-contain cursor-pointer"
          />
        </div>
      </div>

      {/* Right-side video with increased height */}
      <div
        className="relative flex justify-center items-center w-full h-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover relative z-[1]"
        >
          <source src={isHovered ? hoverVideoSrc : idleVideoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Billing;
