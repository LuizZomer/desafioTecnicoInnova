import { useNavigate } from "react-router-dom";
import { icons } from "../../../assets/icons";
import * as S from "./styles";

export const BackwardButton = ({ destination }: { destination: string }) => {
  const navigate = useNavigate();

  return (
    <S.Container onClick={() => navigate(destination)}>
      <img src={icons.leftArrow} /> Voltar
    </S.Container>
  );
};
