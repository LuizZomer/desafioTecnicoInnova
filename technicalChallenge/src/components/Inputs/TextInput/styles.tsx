import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const InputContainer = styled.div`
  max-width: 352px;
  width: 100%;
  min-width: 100px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LabelStyled = styled.label`
  font-size: 20px;
`;

export const InputStyled = styled.input`
  height: 38px;
  border: 2px solid ${theme.colors.primary};
  border-radius: 10px;
  color: ${theme.colors.white};
  background-color: transparent;
  transition: 0.5s;
  padding-left: 10px;

  &:focus {
    outline: none;
    border-color: #965ddd;
  }

  &::placeholder {
    color: #cec9c9;
  }
`;
