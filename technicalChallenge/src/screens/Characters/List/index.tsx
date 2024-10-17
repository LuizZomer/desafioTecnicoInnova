import { useNavigate, useSearchParams } from "react-router-dom";
import { DotSpinner } from "../../../components/Loading/DotSpinner";
import { LoadingWrapper } from "../../../components/Loading/LoadingWrapper";
import { useCharacterList } from "./Hook/useCharacterList";
import * as S from "./styles";
import { Input } from "../../../components/Inputs/TextInput";
import { Button } from "../../../components/Buttons/Button";
import { Card } from "../../../components/Card";
import { Pagination } from "../../../components/Pagination";

export const CharacterList = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams();

  const search = query.get("search") || "";

  const setPage = (value: string) => {
    setQuery((prev) => {
      prev.set("page", value);
      return prev;
    });
  };

  const setSearch = (value: string) => {
    setQuery((prev) => {
      prev.set("search", value);
      return prev;
    });
  };

  const { charactersList, loading, refetch, count } = useCharacterList({
    search,
  });

  return (
    <S.Container>
      <S.SearchContainer>
        <Input
          label="Nome do personagem:"
          placeholder="Ex: Luke"
          onChange={({ target }) => setSearch(target.value)}
          defaultValue={search}
          onKeyUp={({ key }) => {
            if (key === "Enter") {
              setPage("1");
              refetch({ newPage: "1" });
            }
          }}
        />
        <Button
          onClick={() => {
            setPage("1");
            refetch({ newPage: "1" });
          }}
        >
          Filtrar
        </Button>
      </S.SearchContainer>
      {loading && (
        <LoadingWrapper>
          <DotSpinner />
        </LoadingWrapper>
      )}
      {!loading && charactersList && (
        <S.ListingContainer>
          <S.CardContainer>
            {charactersList.map((character, i) => (
              <Card
                key={i}
                character={character}
                onClick={() =>
                  navigate("details", { state: { url: character.url } })
                }
              />
            ))}
          </S.CardContainer>
          <S.PaginationContainer>
            <S.PaginationContent>
              <Pagination count={count} req={refetch} />
            </S.PaginationContent>
          </S.PaginationContainer>
        </S.ListingContainer>
      )}
    </S.Container>
  );
};
