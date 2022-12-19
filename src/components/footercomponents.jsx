import styled from "styled-components";

export const DivMain = styled.div`
  width: 100%;
  min-height: 15rem;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #3b3b3b;
  justify-content: space-around;
  align-items: center;
`;
export const DivCentral = styled.div`
  width: 80%;
  height: auto;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: white;
`;
export const DivContent = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const DivInnerContent = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 30%;w
`;
export const DivBottom = styled.div`
  width: 80%;
  padding-top: 1rem;
  color: #ffffff;
  border-top: 2px solid #4a4a4a;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4px;
`;