import { motion } from 'motion/react';

export default function AnimateCard() {
  return (
    <motion.div
      initial={{
        scale: 1,
        rotate: 0,
      }}
      whileHover={{ scale: 1.05, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="max-w-sm mx-auto  rounded-lg shadow-lg overflow-hidden cursor-pointer ">
      <img
        className="w-full h-48 object-cover"
        src="https://cdn.pixabay.com/photo/2023/12/28/10/23/squirrel-8473819_1280.jpg"
        alt="card image"
      />
      <div className="p-6 bg-white">
        <h2 className="text-gray-950 text-xl font-semibold mb-2">Animal</h2>
        <p className="text-gray-700 mb-4 font-medium">
          Esquilo roedor de árvore
        </p>
        <button className="px-4 py-2 bg-teal-500 text-white  rounded hover:bg-teal-300 transition">
          Learn More
        </button>
      </div>
    </motion.div>
  );
}
