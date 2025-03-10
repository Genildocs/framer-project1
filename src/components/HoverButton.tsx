import { motion } from 'motion/react';

const hoverButton = {
  visible: {
    x: 0,
  },
  hidden: {},
};

export default function HoverButton() {
  return (
    <motion.button
      className="relative h-12 overflow-hidden bg-gray-900 rounded-lg w-36"
      initial="initial"
      animate="initial"
      whileHover="hover">
      <motion.span
        className="inline-flex items-center justify-center font-bold size-full"
        variants={{
          initial: { x: 0 },
          hover: { x: 150 },
        }}
        transition={{ duration: 0.5 }}>
        Book your flight
      </motion.span>
      <motion.span
        className="absolute inset-0 inline-flex items-center justify-center "
        variants={{
          initial: { x: -150 },
          hover: { x: 0 },
        }}
        transition={{ duration: 0.5 }}>
        ✈️
      </motion.span>
    </motion.button>
  );
}
