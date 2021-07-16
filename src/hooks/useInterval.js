import { useEffect, useRef } from "react";

export default function useInterval(cb, delay = 1000) {
  const cbRef = useRef();

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    function tick() {
      cbRef.current();
    }
    const it = setInterval(tick, delay);
    return () => clearInterval(it);
  }, [delay]);
}
