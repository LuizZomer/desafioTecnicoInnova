import axios from "axios";
import { useEffect, useState } from "react";
import { IMovie } from "../../../../../utils/types";
import * as S from "./styles";
import { DotSpinner } from "../../../../../components/Loading/DotSpinner";

export const MovieRender = ({ url }: { url: string }) => {
  const [movie, setMovie] = useState<IMovie>();
  const [loading, setLoading] = useState(true);

  const reqMovie = async () => {
    await axios
      .get<IMovie>(url)
      .then(({ data }) => setMovie(data))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    reqMovie();
  }, []);

  return (
    <div>
      {loading && (
        <S.MovieCard>
          <S.CenterLoading>
            <DotSpinner />
          </S.CenterLoading>
        </S.MovieCard>
      )}
      {!loading && movie && (
        <S.MovieCard>
          <h3>{movie.title}</h3>
          <S.BodyCard>
            <p>
              <S.Label>Lançamento:</S.Label>{" "}
              {new Date(movie.release_date).toLocaleDateString()}
            </p>
            <p>
              <S.Label> Produtor:</S.Label> {movie.producer}
            </p>
            <p>
              <S.Label>Diretor:</S.Label> {movie.director}
            </p>
          </S.BodyCard>
        </S.MovieCard>
      )}
    </div>
  );
};
