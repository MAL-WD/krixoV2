import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const RevealX = ({ children, delay = 0.25, left,leftM, right, down, up }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView]);

  const variants = {
    hidden: leftM
      ? { opacity: 0, x: -5000 }
      : right
      ? { opacity: 0, x: 100 }
      : left
      ? { opacity: 0, x: -100 }
      : down
      ? { opacity: 0, y: -100 }
      : up
      ? { opacity: 0, y: 100 }
      : { opacity: 0, y: 50 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate={controls}
        transition={{
          duration: 1,
          delay: delay,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealX;
