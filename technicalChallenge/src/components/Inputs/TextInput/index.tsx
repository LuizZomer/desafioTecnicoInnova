import { forwardRef, InputHTMLAttributes, useId } from "react";
import * as S from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, type = "text", ...rest }, ref) => {
    const id = useId();
    return (
      <S.InputContainer>
        <S.LabelStyled htmlFor={id}>{label}</S.LabelStyled>
        <S.InputStyled ref={ref} type={type} id={id} {...rest} />
      </S.InputContainer>
    );
  }
);

Input.displayName = "Input";
