import { motion } from 'motion/react';

export default function AnimateShape() {
  return (
    <motion.div
      className="size-20 bg-amber-400"
      whileHover={{ skewX: 30, rotateX: 80 }}
      transition={{ duration: 5 }}></motion.div>
  );
}
