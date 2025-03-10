import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
  useTransform,
} from 'motion/react';
import { ChangeEvent } from 'react';

export default function UseMotion() {
  const scale = useMotionValue(1);

  // const springConfig = useSpring(scale, {
  //   stiffness: 300,
  //   damping: 20,
  // });

  const transform = useTransform(scale, [0.5, 5], [0.5, 3]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    scale.set(parseFloat(e.target.value));
  };

  return (
    <div>
      <motion.button className="box" style={{ scale: transform }} />

      <div className="mt-[6rem]">
        <input
          type="range"
          min={0.5}
          max={5}
          step={0.01}
          defaultValue={1}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
