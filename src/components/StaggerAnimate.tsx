import { motion } from 'motion/react';

const parentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export default function StaggerAnimate() {
  return (
    <motion.ul
      className="flex flex-col gap-5"
      variants={parentVariants}
      initial="hidden"
      animate="visible">
      {[...Array(5)].map((_, idx) => (
        <motion.li className="stagger" key={idx} variants={childVariants}>
          {idx + 1}
        </motion.li>
      ))}
    </motion.ul>
  );
}
