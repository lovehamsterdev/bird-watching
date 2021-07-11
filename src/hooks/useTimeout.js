import { useEffect, useRef } from "react";

export default function useTimeout(cb, delay = 0) {
  const ref = useRef();

  useEffect(() => {
    ref.current = cb;
  }, [cb]);

  useEffect(() => {
    function tick() {
      ref.current();
    }
    const to = setTimeout(tick, delay);
    return () => clearTimeout(to);
  }, [delay]);
}
