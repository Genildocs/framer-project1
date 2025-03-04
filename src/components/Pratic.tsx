import { motion } from 'motion/react';

export default function Pratic() {
  return (
    <div>
      <motion.div
        className="box !rounded-[0]"
        // animate={{
        //   scale: [1, 2, 1, 2, 1],
        //   rotate: [0, 0, 270, 270, 0],

        //   borderRadius: ['20%', '20%', '50%', '50%', '20%'],

        //   border: ['1px', 'solid'],
        //   borderColor: [
        //     'rgb(51 66 255)',
        //     'rgb(255, 51, 224 )',
        //     'rgb(51 255 54)',
        //     'rgb(51, 255, 233 )',
        //     'rgb(255, 249, 51)',
        //   ],

        //   backgroundColor: [
        //     'rgb(251 146 60)',
        //     'rgb(251 146 60)',
        //     'rgb(239 68 68)',
        //     'rgb(239 68 68)',
        //     'rgb(251 146 60)',
        //   ],
        // }}
        initial={{ scale: 1, rotate: 10 }}
        whileHover={{ scale: 1.2, rotate: 0 }}
      />
    </div>
  );
}
