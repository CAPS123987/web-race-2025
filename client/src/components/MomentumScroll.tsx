import React, { useRef, useState, useCallback, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useScroll,
  useTransform,
  useSpring,
  motion,
  SpringOptions,
} from "framer-motion";

interface MomentumScrollProps {
  children: React.ReactNode;
}

const MomentumScroll:React.FC<MomentumScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [scrollableHeight, setScrollableHeight] = useState<number>(0);

  const resizeScrollableHeight = useCallback(
    (entries: ResizeObserverEntry[]) => {
      for (let entry of entries) {
        setScrollableHeight(entry.contentRect.height);
      }
    },
    []
  );

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizeScrollableHeight(entries)
    );
    scrollRef.current && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const { scrollY } = useScroll();

  const negativeScrollY = useTransform(
    scrollY,
    [0, scrollableHeight],
    [0, -scrollableHeight]
  );


  const springPhysics: SpringOptions = {
    damping: 22,
    mass: 0.1,
    stiffness: 100,
    bounce: 0.5,
    duration: 0.4,
    velocity: 100,
  };

  
  const springNegativeScrollY = useSpring(negativeScrollY, springPhysics);
  
  const fasterScrollY = useTransform(
    springNegativeScrollY,
    [0, -scrollableHeight],
    [0, scrollableHeight*0.3]
  );

  return (
    <>
      <motion.div
        ref={scrollRef}
        style={{ 
            y: springNegativeScrollY,
            backgroundImage: "linear-gradient(var(--background),var(--background))",
            height: "fit-content",
            backgroundPositionY: fasterScrollY
         }}
        className="scroll-container">
        {children}
      </motion.div>
    </>
  );
};

export default MomentumScroll;