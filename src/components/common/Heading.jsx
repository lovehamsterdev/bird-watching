import styled from "styled-components";

const Heading = styled.div`
  font-size: ${props => (props.size === "sm" ? "1.5em" : "3em")};
  color: ${props => props.color};
`;

export default Heading;
