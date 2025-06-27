import React from "react";
import { motion } from "framer-motion";

const AnimatedButton = ({ children }) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedButton;