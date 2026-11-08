import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const parseValue = (value) => {
  const text = String(value);
  const number = Number.parseFloat(text.replace(/[^0-9.]/g, "")) || 0;
  const suffix = text.replace(/[0-9.,\s]/g, "");
  return { number, suffix };
};

const AnimatedCounter = ({ value, duration = 1300, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [{ number, suffix }] = useState(() => parseValue(value));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(number * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, inView, number]);

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
