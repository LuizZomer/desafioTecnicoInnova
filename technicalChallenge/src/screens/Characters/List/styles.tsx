import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;
  padding: 0px 80px;
`;

export const ListingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
  padding: 0 10px;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PaginationContent = styled.div`
  max-width: 548px;
  width: 100%;
`;
