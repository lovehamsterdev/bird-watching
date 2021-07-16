import styled from "styled-components";

const Img = styled.img`
  width: 600px;
  margin: 10px;
  transition: width 0.2s;
  @media (max-width: 500px) {
    width: 300px;
  }
`;

export default Img;
