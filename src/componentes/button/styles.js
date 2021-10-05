/* eslint-disable no-confusing-arrow */
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: ${props => (props.variant === "align" ? "6px" : "0")};
  height: 25px;
  border-radius: 4px;
  width: 100%;
  border-style: none;
  background-color: ${props => (props.background ? props.background : "#fff")};
  color: #fff;
  cursor: pointer;

  ${({ variant }) =>
    variant === "primary" &&
    `
    background-color: #6875f5;
    color: #fff;
    border: 1px solid  #6875f5;
  `}

  ${({ variant }) =>
    variant === "info" &&
    `
    background-color: #374151;
    color: #fff;
    border: 1px solid  #374151;
  `}

  ${({ variant }) =>
    variant === "danger" &&
    `
    background-color: #f3413b;
    color: #fff;
    border: 1px solid  #c81e1e;
  `}
  
  ${({ variant }) =>
    variant === "delete" &&
    `
  background-color: #d91529;
  color: #fff;
  border: 1px solid  #c81e1e;
`}
  ${({ variant }) =>
    variant === "tertiary" &&
    `
    background-color: #c9cbce;
    color: black;
    border: 0px;
  `}
  
  ${({ variant }) =>
    variant === "secondary" &&
    `
    background-color: #046c4e;
    color: #fff;
    border: 1px solid  #046c4e;
  `}

  ${({ variant }) =>
    variant === "return" &&
    `
  background-color: #dddddd;
  color: #000;
`}

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #dddddd;
    cursor: default;
    border: none;
  `}
`;
