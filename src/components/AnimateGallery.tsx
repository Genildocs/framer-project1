import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const galleryImages = [
  {
    image:
      'https://cdn.pixabay.com/photo/2024/03/04/14/56/pagoda-8612554_1280.jpg',
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg',
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2024/01/11/09/50/village-8501168_1280.jpg',
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2023/05/22/10/49/houses-8010401_1280.jpg',
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2020/04/04/03/07/lake-5000642_1280.jpg',
  },
];

const parentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.4, staggerDirection: 1 },
  },
  exit: {
    transition: { staggerChildren: 0.3, staggerDirection: -1 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    y: 25,
  },
};

export default function AnimateGallery() {
  const [isOpen, setIsOpen] = useState(false);

  const handleImages = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 font-bold text-white rounded-lg cursor-pointer hover:bg-blue-300 fixed left-5 top-[30%]"
        onClick={handleImages}>
        {isOpen ? 'Close Images' : 'Show Images'}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex"
            variants={parentVariants}
            initial="hidden"
            animate={isOpen ? 'visible' : 'hidden'}
            exit={'exit'}>
            {galleryImages.map((images, idx) => (
              <motion.img
                key={idx}
                src={images.image}
                alt={`image-${idx + 1}`}
                className="m-2 w-[300px] rounded"
                variants={childVariants}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
