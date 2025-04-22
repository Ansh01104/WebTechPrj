import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {    Highlight } from "./ui/hero-highlight";
import {
  
  GDrive,
 
  Picswa,
   
  GPhotos,bg_placeholder,
} from "../assets";

const FirstVisitOverlay = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false); // New state for video loading
  const videoRef = useRef(null);

  const cards = [
    {
      id: 1,
      label: (
        <img
          src= "https://servalabs.b-cdn.net/web/desktop.png"
          alt="Atom"
          className="w-full h-full p-2 object-cover"
        />
      ),
    },
    {
      id: 2,
      label: (
        <img
          src= "https://servalabs.b-cdn.net/web/GDrive.svg"
          alt="Atom"
          className="w-full h-full p-3 object-cover"
        />
      ),
    },
    {
      id: 3,
      label: (
        <img
          src={Picswa}
          alt="Atom"
          className="w-full h-full p-2 object-cover"
        />
      ),
    },
     
    {
      id: 4,
      label: (
        <img src= "https://servalabs.b-cdn.net/web/GPhotos.svg" alt="Atom" className="w-full h-full object-cover " />
      ),
    },
    {
      id: 5,
      label: (
        <img src= "https://servalabs.b-cdn.net/web/Onedrive.svg" alt="Atom" className="w-full h-full p-2 object-cover" />
      ),
    },
    {
      id: 6,
      label: (
        <img src= "https://servalabs.b-cdn.net/web/icloud.svg" alt="Atom" className="w-full h-full p-2 object-cover" />
      ),
    },
    {
      id: 7,
      label: (
        <img src= "https://servalabs.b-cdn.net/web/pendrive.svg" alt="Atom" className="w-full h-full p-2 object-cover" />
      ),
    },
    {
      id: 8,
      label: (
        <img src= "https://servalabs.b-cdn.net/web/hdd.png" alt="Atom" className="w-full h-full p-2 object-cover" />
      ),
    },
  ];

  useEffect(() => {
    setShowOverlay(true);
    document.body.style.overflow = "hidden";
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  }, []);

  const handleDismiss = () => {
    setIsContentVisible(false); // Start hiding the content
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();

      videoRef.current.onended = () => {
        setShowOverlay(false);
        localStorage.setItem("hasVisitedBefore", "true");
        document.body.style.overflow = "unset";
      };
    }
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true); // Video is loaded
  };

  return (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 w-screen h-screen z-50 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Placeholder image while video is loading */}
          {!videoLoaded && (
            <img
              src= {bg_placeholder}loading="lazy"
              alt="Background placeholder"
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}

          {/* Video element with preload and load handler */}
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover ${
              !videoLoaded ? "hidden" : ""
            }`}
            playsInline
            muted
            src=  "https://servalabs.b-cdn.net/web/god.mp4"
            preload="none"
            onLoadedData={handleVideoLoaded} // Show video once it's loaded
          />

          <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500" />

          {isContentVisible && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 2.5 }}
              transition={{ duration: 0.1 }}
              className="w-full h-full flex flex-col items-center justify-center relative z-10"
            >
              <div className="w-full px-4 flex flex-col items-center space-y-8">
                {/* First line of text and icons */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl px-4 md:text-4xl mb-2 lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                  Are you interested in replacing these services
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center space-x-4 inline-flex ml-2"
                >
                  {cards.map((card, index) => (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="w-[100px] h-[100px] bg-white bg-opacity-10 backdrop-blur-sm rounded-lg border border-white border-opacity-20 flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-white text-2xl font-bold">
                        {card.label}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Second line with Highlighted text */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl px-4 md:text-4xl mb-2 lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
                >
                  <Highlight className="relative text-white">
                    and 10 more with a single product?
                  </Highlight>
                </motion.h2>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  onClick={handleDismiss}
                  className="mt-10 px-8 py-3 bg-white text-black rounded-[10px] text-xl font-medium hover:text-white hover:bg-purple-600 hover:scale-105 active:scale-95 transition-all duration-400 transform"
                >
                  YES
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FirstVisitOverlay;