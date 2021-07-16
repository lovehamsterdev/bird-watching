import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: dodgerblue;
  color: white;
  font-size: 1.5em;
  border: none;
  width: ${props => (props.w ? props.w : "100%")};
  cursor: pointer;
`;

export default Button;
