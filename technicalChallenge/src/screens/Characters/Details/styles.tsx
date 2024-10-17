import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const DetailsContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Content = styled.div`
  border: 1px solid ${theme.colors.primary};
  max-width: 900px;
  width: 100%;
  background-color: #181717;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    padding: 10px;
  }
`;

export const InfoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.colors.primary};
  padding-bottom: 10px;
`;

export const LabelInfo = styled.div`
  font-weight: 700;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
