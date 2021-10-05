import styled from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: ${({ error }) => error && "red"};
  justify-content: center;
  margin-right: 7px;
`;

export const Input = styled.input`
  width: 100%;
  min-height: 26px;
  border-radius: 6px;
  padding: 0 16px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #cfd8e3;
  position: relative;
  transition: all 0.5s ease-out;
  ::placeholder {
    color: ${({ editing }) => editing && "black;"};
  }
`;
