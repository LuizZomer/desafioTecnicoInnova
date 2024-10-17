import { useEffect, useState } from "react";
import { api } from "../../../../services/Api";
import { ICharacter } from "../../../../utils/types";
import { useSearchParams } from "react-router-dom";

interface ICharacterRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

export const useCharacterList = ({ search }: { search: string }) => {
  const [charactersList, setCharactersList] = useState<ICharacter[]>([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [query] = useSearchParams();

  const page = query.get("page") || "1";

  const reqCharactersList = async (newPage?: string) => {
    setLoading(true);
    await api
      .get<ICharacterRes>(`/people?search=${search}&page=${newPage || page}`)
      .then(({ data }) => {
        setCharactersList(data.results);
        setCount(data.count);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  const refetch = ({ newPage }: { newPage: string }) => {
    reqCharactersList(newPage);
  };

  useEffect(() => {
    reqCharactersList();
  }, []);

  return {
    charactersList,
    loading,
    refetch,
    count,
  };
};
