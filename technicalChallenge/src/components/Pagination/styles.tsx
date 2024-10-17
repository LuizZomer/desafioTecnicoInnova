import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    & :nth-child(2) {
      font-size: 10px;
      min-width: 100px;
      display: flex;
      justify-content: center;
    }
  }
`;
