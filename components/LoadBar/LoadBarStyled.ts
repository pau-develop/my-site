import styled from "styled-components";

const LoadBarStyled = styled.div`
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  position: absolute;
  width: 300px;
  height: 100px;
  background-color: black;
  border: 2px solid rgb(95, 81, 255);
  color: rgb(95, 81, 255);
  z-index: 20;
  display: flex;
  flex-direction: column;
  span {
    margin: auto auto;
  }
  div {
    margin: auto auto;
    width: 90%;
    height: 20%;
    background-color: rgb(95, 81, 255);
    border: 1px solid rgb(95, 81, 255);
  }
`;

export default LoadBarStyled;
