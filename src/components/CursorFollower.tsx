import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.15 }}
          className="fixed pointer-events-none z-[100] flex items-center gap-1"
          style={{
            left: position.x + 12,
            top: position.y + 12,
          }}
        >
          {/* Cursor pointer */}
          <svg 
            width="16" 
            height="16" 
            viewBox="0 0 16 16" 
            fill="none" 
            className="transform -rotate-12"
          >
            <path 
              d="M1 1L6 14L8 8L14 6L1 1Z" 
              fill="hsl(73, 100%, 50%)" 
              stroke="hsl(73, 100%, 50%)"
              strokeWidth="1.5"
            />
          </svg>
          {/* Label */}
          <span className="text-xs px-2 py-1 rounded-full bg-primary text-primary-foreground font-medium">
            You
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CursorFollower;
