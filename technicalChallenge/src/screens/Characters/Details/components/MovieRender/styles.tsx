import styled from "styled-components";
import { theme } from "../../../../../styles/theme";

export const CenterLoading = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MovieCard = styled.div`
  width: 320px;
  min-height: 200px;
  border: 1px solid ${theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
`;

export const BodyCard = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.span`
  font-weight: 700;
  margin-right: 5px;
`;
