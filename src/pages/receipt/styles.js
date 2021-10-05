import styles from "styled-components";

export const Content = styles.div`
  width: 600px;
  background-color: white;
  box-shadow: 0 0 1em black;
  border-radius: 3px;
  padding: 10px;
  color: black;
  display: flex;
  flex-direction: row;
`;

export const ContentBox = styles.div`
  border: 1px solid #A6A6A6;
  border-radius: 3px;
  padding: 10px;
  margin-top: 10px;
`;

export const Separator = styles.div`
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 2px solid #dcdcdc;
  width: auto;
`;

export const Text = styles.div`
  display: flex;
  font-size: inherit;
`;
