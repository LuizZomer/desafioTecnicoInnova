import logo from "/Star_Wars_Logo.png";
import * as S from "./styles";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="star wars logo" width={254} height={136} />
    </S.HeaderContainer>
  );
};
