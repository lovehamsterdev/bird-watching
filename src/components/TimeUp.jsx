import anime from "animejs";
import { useEffect, useRef, useState } from "react";
import Heading from "./common/Heading";
import useTimeout from "../hooks/useInterval";

export default function TimeUp() {
  const ref = useRef();
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
  }, 1000);

  useEffect(() => {
    anime({
      targets: ref.current,
      fontSize: ["3em", "4em"],
    });
  }, []);

  return show && <Heading ref={ref}>Time's Up</Heading>;
}
