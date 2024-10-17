import { ICharacter, IInfoArray } from "../../utils/types";

export const genderAdjust = (gender: string) => {
  switch (gender) {
    case "male":
      return "Masculino";
    case "female":
      return "Feminino";
    default:
      return "Não Definido";
  }
};

export const setDetailsArray = (details: ICharacter): IInfoArray[] => [
  { label: "Nome", value: details.name },
  { label: "Ano de aniversário", value: details.birth_year },
  { label: "Gênero", value: genderAdjust(details.gender) },
  { label: "Color dos olhos", value: details.eye_color },
];
