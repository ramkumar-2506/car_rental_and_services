import { motion } from "framer-motion";

const directions = {
  up: { y: 34, x: 0, scale: 1 },
  left: { x: 34, y: 0, scale: 1 },
  right: { x: -34, y: 0, scale: 1 },
  zoom: { x: 0, y: 18, scale: 0.94 },
};

const Reveal = ({
  as = "div",
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.65,
  once = true,
  ...props
}) => {
  const Component = motion[as] || motion.div;
  const initial = directions[direction] || directions.up;

  return (
    <Component
      initial={{ opacity: 0, ...initial }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, amount: 0.18 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default Reveal;
