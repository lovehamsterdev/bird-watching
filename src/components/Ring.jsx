import styled, { keyframes } from "styled-components";

const strokeWidth = 20;

const strokeFillAnim = ({ from, to }) => keyframes`
  from {
    stroke-dashoffset: ${from};
  }

  to {
    stroke-dashoffset: ${to};
  }
`;

const CircleStyled = styled.circle`
  stroke: ${props => props.color};
  fill: transparent;
  stroke-width: ${strokeWidth}px;
  stroke-dasharray: ${props => props.length};
  stroke-dashoffset: ${props => props.length};
  transition: all 1s;
  transform: rotate(-90deg);
  animation: ${props => strokeFillAnim(props)} 2s forwards;
`;

export default function Ring({ color, size, ratio, clockwise }) {
  const R = size / 2 - strokeWidth;
  const c = 2 * R * Math.PI;
  const sign = clockwise ? 1 : -1;
  const offset = (1 - sign * ratio) * c;

  return <CircleStyled from={c} to={offset} cx={-size / 2} cy={size / 2} r={R} length={c} color={color} />;
}
