import { usePagination } from "../../hooks/usePagination";
import { Button } from "../Buttons/Button";
import * as S from "./styles";

interface IPagination {
  count: number;
  req: ({ newPage }: { newPage: string }) => void;
}

type TCountConfig = "increment" | "decrement";

export const Pagination = ({ count, req }: IPagination) => {
  const { page, setPage } = usePagination();

  const pageConfig = (action: TCountConfig) => {
    let newPage = 0;

    if (action === "decrement") {
      newPage = +page - 1;

      setPage(String(newPage));
    }

    if (action === "increment") {
      newPage = +page + 1;

      setPage(String(newPage));
    }

    req({ newPage: String(newPage) });
  };

  return (
    <S.PaginationContainer>
      <Button
        radius="5px"
        onClick={() => pageConfig("decrement")}
        disabled={Number(page) === 1}
      >
        {"<"}
      </Button>
      <div>
        Página {Number(page)} de {count}
      </div>
      <Button
        radius="5px"
        onClick={() => pageConfig("increment")}
        disabled={Number(page) === count}
      >
        {">"}
      </Button>
    </S.PaginationContainer>
  );
};
