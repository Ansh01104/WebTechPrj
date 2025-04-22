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
      className="flex flex-col justify-between px-2 py-2 rounded-[30px] max-w-[400px] md:mr-5 sm:mr-5 mr-0 my-5 feedback-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video Section */}
      <video
        ref={videoRef}
        className="w-[400px]  h-[400px] rounded-[30px] object-cover"
        src={idleVideoSrc}  // Set initial source as idle video
        muted
        loop
      >
        {/* Fallback message if video tag isn't supported */}
        Your browser does not support the video tag.
      </video>

     
    </div>
  );
};

export default TheCard2;
