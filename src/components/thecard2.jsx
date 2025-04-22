import React, { useRef, useState } from "react";

const TheCard2 = ({ name, title, idleVideoSrc, hoverVideoSrc }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.src = hoverVideoSrc;  // Change to hover video source
      videoRef.current.play();  // Play video on hover
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.src = idleVideoSrc;  // Revert back to idle video source
      videoRef.current.play();  // Pause the video when not hovered
      videoRef.current.currentTime = 0;  // Reset the video to the start
    }
  };

  return (
    <div
      className="flex flex-col justify-between px-2 py-2 rounded-[15px] max-w-[400px] w-full my-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Section */}
      <video
        ref={videoRef}
        className="w-full h-[250px] sm:h-[300px] md:h-[400px] rounded-[15px] object-cover"
        src={idleVideoSrc}  // Set initial source as idle video
        muted
        preload="none"
        loop
      >
        {/* Fallback message if video tag isn't supported */}
        Your browser does not support the video tag.
      </video>

      {/* Optional title or additional content */}
      <div className="mt-2 text-center">
        <h3 className="font-poppins font-semibold text-lg">{title}</h3>
        <p className="font-poppins text-sm text-gray-600">{name}</p>
      </div>
    </div>
  );
};

export default TheCard2;
