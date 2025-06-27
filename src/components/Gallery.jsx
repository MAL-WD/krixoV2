import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import transport2 from '../assets/transport-2.jpg';
import ordering from '../assets/ordering.jpg';
import delivery from '../assets/delivery.jpg';
import ordering2 from '../assets/ordering.avif';

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Animation variants for the boxes
  const boxVariants = {
    hidden: (index) => ({
      x: index === 1 || index === 0 ? 500 : -500, // Boxes 0, 1 from right; 2, 3 from left
      opacity: 0,
    }),
    visible: (index) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 25,
        duration: index === 1 || index === 2 ? 1.2 : 1.0, // Longer for inner boxes (1, 2)
        delay: index === 1 || index === 2 ? 0.2 : 0.8, // Inner boxes first, outer delayed
      },
    }),
  };

  const images = [transport2, ordering, delivery, ordering2];

  return (
    <div
      ref={ref}
      className="grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10"
    >
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="box rounded-ee-4xl"
          custom={index}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={boxVariants}
        >
          <img
            style={{ borderRadius: '100vh' }}
            className="min-h-[200px] sm:min-h-[300px] md:min-h-[500px] w-full object-cover origin-center rounded-ee-4xl"
            src={src}
            alt={`Gallery image ${index + 1}`}
          />
        </motion.div>
      ))}
    </div>
  );
}