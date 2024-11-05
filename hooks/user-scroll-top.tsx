"use client";

import { ChevronUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const buttonVariants = {
    hidden: { opacity: 0 }, // Start off-screen to the right
    visible: { opacity: 1 }, // Move into view
    exit: { opacity: 0 }, // Exit animation
  };

  return (
    <div>
      {showButton && (
        <motion.button
          onClick={scrollToTop}
          className="scroll-to-top boxshadow-scoail transition-all hover:border-none" // Apply your CSS class here
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit" // Trigger exit animation
          transition={{ duration: 1 }} // Duration of the animation
        >
          <ChevronUp />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
