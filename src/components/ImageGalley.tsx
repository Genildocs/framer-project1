import { motion } from 'motion/react';

const estacoes = [
  {
    image:
      'https://cdn.pixabay.com/photo/2017/02/20/19/28/four-seasons-2083680_640.jpg',
    name: 'Verao',
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2018/06/07/16/40/japan-3460431_640.jpg',
    name: 'Inverno',
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2015/11/06/11/59/bank-1026604_640.jpg',
    name: 'Outono',
  },
  {
    image:
      'https://cdn.pixabay.com/photo/2018/05/23/17/31/klee-3424581_640.jpg',
    name: 'Primavera',
  },
];

export default function ImageGalley() {
  return (
    <>
      <div className="w-[80%] flex flex-col md:flex-row ">
        {estacoes.map((images, index) => (
          <motion.div
            key={index}
            className="relative m-[1rem] rounded-lg overflow-hidden shadow-lg "
            whileHover={{ scale: 1.05 }}>
            <img
              src={images.image}
              alt={images.name}
              className="w-full h-auto"
            />
            <motion.div
              className="absolute inset-0 flex items-center justify-center font-bold cursor-pointer bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 "
              whileHover={{ opacity: 1 }}>
              {images.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
