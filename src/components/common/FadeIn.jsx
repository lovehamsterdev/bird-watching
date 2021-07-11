import anime from "animejs";
import { useEffect, useRef } from "react";

export default function FadeIn({ watch = 0, children, duration = 100, delay = 0 }) {
  const ref = useRef();

  useEffect(() => {
    anime({
      targets: ref.current,
      opacity: [0, 1],
      easing: "linear",
      duration,
      delay,
    });
  }, [watch, duration, delay]);

  return (
    <div style={{ opacity: 0 }} ref={ref}>
      {children}
    </div>
  );
}
