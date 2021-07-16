import { useEffect, useState } from "react";
import { useGame } from "../GameContext";
import useInterval from "../hooks/useInterval";
import styled, { css, keyframes } from "styled-components";

const warningAnim = keyframes`
  50% {
    box-shadow: 0 0 50px 20px tomato;
  }
`;

const TimerStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  ${props =>
    props.warning &&
    css`
      animation: ${warningAnim} 1s linear 5;
    `}
`;
export default function Timer() {
  const { time, endGame } = useGame();
  const [remain, setRemain] = useState(time);
  const [warning, setWarning] = useState(false);

  useInterval(() => {
    setRemain(rm => rm - 1);
  }, 1000);

  useEffect(() => {
    if (remain <= 0) {
      endGame();
      return;
    }

    if (remain <= 5) {
      setWarning(true);
    }
  }, [remain, endGame]);

  return <TimerStyled warning={warning} />;
}
