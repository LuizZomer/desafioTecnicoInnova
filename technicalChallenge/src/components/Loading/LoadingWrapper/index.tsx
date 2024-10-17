import * as S from "./styles";

export const LoadingWrapper = ({ children }: { children: React.ReactNode }) => (
  <S.LoadingContainer>{children}</S.LoadingContainer>
);
