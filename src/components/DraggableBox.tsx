import { motion, useMotionValue, useTransform } from 'motion/react';

export default function DraggableBox() {
  const x = useMotionValue(0);

  const backgroundColor = useTransform(x, [-100, 100], ['#f00', '#00f']);

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      style={{ x, backgroundColor }}
      className="p-5 rounded-lg">
      DraggableBox
    </motion.div>
  );
}
