import { motion } from 'motion/react';

export default function App() {
  return (
    <div>
      <motion.div className="box" animate={{ x: 100 }} />
    </div>
  );
}
