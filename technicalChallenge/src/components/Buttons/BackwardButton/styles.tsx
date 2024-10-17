import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    gap: 10px;
  }
`;
