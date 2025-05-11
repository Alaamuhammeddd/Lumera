import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold capitalize bg-timberWolf text-zinnwalditeBrown py-10 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Our Products</li>
              <li>Best Seller</li>
            </ul>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
export default MobileMenu;
