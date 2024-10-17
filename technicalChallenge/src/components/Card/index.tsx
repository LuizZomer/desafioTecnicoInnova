import { genderAdjust } from "../../screens/Characters/functions";
import { ICharacter } from "../../utils/types";
import * as S from "./styles";

export interface ICharacterProps {
  character: ICharacter;
  onClick?: () => void;
}

export const Card = ({ character, onClick }: ICharacterProps) => {
  const heightAdjust = (height: string) => Number(height) / 100;

  return (
    <S.CardContainer onClick={() => onClick && onClick()}>
      <S.InfoCardContainer>
        <h3>{character.name}</h3>
        <p>{genderAdjust(character.gender)}</p>
        <p>{`${heightAdjust(character.height)} m`}</p>
      </S.InfoCardContainer>
      <div>
        <p>Ver detalhes</p>
      </div>
    </S.CardContainer>
  );
};
