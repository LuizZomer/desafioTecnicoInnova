import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const ButtonStyled = styled.button<{ $radius: string }>`
  height: 38px;
  width: 100px;
  color: ${theme.colors.white};
  background-color: ${theme.colors.primary};
  border-radius: ${({ $radius }) => $radius};
  border: none;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    background-color: #965ddd;
  }
`;
