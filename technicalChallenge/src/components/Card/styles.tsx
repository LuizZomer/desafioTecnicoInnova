import styled from "styled-components";
import { theme } from "../../styles/theme";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  border: 2px solid ${theme.colors.primary};
  height: 250px;
  width: 100%;
  max-width: 230px;
  border-radius: 10px;
  padding: 20px 10px 20px;
  background: linear-gradient(
    to bottom,
    #181717 0%,
    #181717 55%,
    ${theme.colors.primary} 100%
  );

  > div:nth-child(2) {
    transition: 0.5s;
  }

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
    background: linear-gradient(
      to bottom,
      #181717 0%,
      #181717 40%,
      ${theme.colors.primary} 100%
    );

    > div:nth-child(2) {
      padding-bottom: 30px;
    }
  }
`;

export const InfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// export const
