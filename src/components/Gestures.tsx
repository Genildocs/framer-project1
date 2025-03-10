import { motion } from 'motion/react';

export default function Gestures() {
  return (
    <motion.div>
      <motion.div
        className="size-[100px] bg-amber-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        drag
        dragConstraints={{ top: -50, left: -50, right: 50, bottom: 50 }}
        whileDrag={{ backgroundColor: '#f00' }}
      />
    </motion.div>
  );
}
