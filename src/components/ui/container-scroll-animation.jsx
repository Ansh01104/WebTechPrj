import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = () => (isMobile ? [0.95, 1] : [1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], isMobile ? [10, 0] : [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -100]);

  return (
    <div
      className="h-[24rem] sm:h-[32rem] md:h-[52rem] flex items-center justify-center relative p-3 sm:p-6 md:p-1 mb-10 sm:mb-6 md:mb-20 overflow-hidden"
      ref={containerRef}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute top-0 left-0 w-[120%] h-[120%] object-cover z-0"
      >
        <source src="https://servalabs.b-cdn.net/web/iframer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full relative" style={{ perspective: "1000px" }}>
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => (
  <motion.div style={{ translateY: translate }} className="max-w-3xl mx-auto text-center">
    {titleComponent}
  </motion.div>
);

export const Card = ({ rotate, scale, children }) => (
  <motion.div
    style={{
      rotateX: rotate,
      scale,
      boxShadow:
        "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
    }}
    className="w-full max-w-[90%] sm:max-w-5xl mx-auto h-[20rem] sm:h-[30rem] md:h-[40rem] p-3 sm:p-1 bg-[#222222] rounded-[15px] sm:rounded-[20px] shadow-2xl border border-gray-500"
  >
    <div className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 p-4 sm:p-6">
      {children}
    </div>
  </motion.div>
);
