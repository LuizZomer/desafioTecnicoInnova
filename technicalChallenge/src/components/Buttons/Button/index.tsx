import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  radius?: string;
}

export const Button = ({ children, radius = "10px", ...rest }: IButton) => (
  <S.ButtonStyled $radius={radius} {...rest}>
    {children}
  </S.ButtonStyled>
);
