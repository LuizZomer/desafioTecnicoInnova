import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ICharacter, IInfoArray } from "../../../utils/types";
import { LoadingWrapper } from "../../../components/Loading/LoadingWrapper";
import { DotSpinner } from "../../../components/Loading/DotSpinner";
import { MovieRender } from "./components/MovieRender";
import * as S from "./styles";
import { setDetailsArray } from "../functions";
import { BackwardButton } from "../../../components/Buttons/BackwardButton";

export const CharacterDetails = () => {
  const location = useLocation() as { state: { url: string } };
  const { url } = location.state;
  const [details, setDetails] = useState<IInfoArray[]>([]);
  const [films, setFilms] = useState<ICharacter["films"]>([]);
  const [loading, setLoading] = useState(true);

  const reqCharaterDetails = async () => {
    await axios
      .get<ICharacter>(url)
      .then(({ data }) => {
        setFilms(data.films);
        const arrayData = setDetailsArray(data);
        setDetails(arrayData);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    reqCharaterDetails();
  }, []);

  return (
    <S.DetailsContainer>
      <S.Content>
        <S.Header>
          <h1>Detalhes da personagem</h1>
          <BackwardButton destination="/character" />
        </S.Header>
        {loading && (
          <LoadingWrapper>
            <DotSpinner />
          </LoadingWrapper>
        )}
        {!loading && !!details.length && (
          <S.InfoListContainer>
            {details.map(({ label, value }) => (
              <S.InfoContainer key={label}>
                <S.LabelInfo>{label}</S.LabelInfo>
                <div>{value}</div>
              </S.InfoContainer>
            ))}
            <h3>Participa em:</h3>
            {!!films.length && (
              <S.MovieContainer>
                {films.map((film) => (
                  <MovieRender key={film} url={film} />
                ))}
              </S.MovieContainer>
            )}
          </S.InfoListContainer>
        )}
      </S.Content>
    </S.DetailsContainer>
  );
};
