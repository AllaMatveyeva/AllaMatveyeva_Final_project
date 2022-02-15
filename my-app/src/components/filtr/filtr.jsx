import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacters } from "../../api/api";
import Loader from "../../api/loader";
import { withTranslator } from "../../hoc/withTranslator";
import UsePagination from "../../pagination/pagination";
import CharactersCard from "../charactersCard/charactersCard";

function Filtr(props) {
  const { optionId } = useParams();
  const { valueId } = useParams();
  // const regexpValue = new RegExp(`^${valueId}`, "ig");

  const [charactersAll, setCharactersAll] = useState([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  // const charactersFiltr = charactersAll.filter((item) =>
  //   (optionId === "name" ? item.name : item.race).match(regexpValue)
  // );

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = UsePagination({
    contentPerPage: 10,
    count: charactersAll.length,
  });

  useEffect(() => {
    async function fetchData() {
      console.log("filter");
      try {
        const response = await getCharacters(optionId, valueId);
        setCharactersAll(response.data.docs);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [optionId, valueId]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && "Error"}
      {!isLoading && !isError && charactersAll.length === 0 ? (
        <span className="home__welcome home__welcome__text">
          {props.translate("filter.no")} {props.translate(`filter.${optionId}`)}
        </span>
      ) : (
        <ul className="users-block">
          {charactersAll
            .slice(firstContentIndex, lastContentIndex)
            .map((user, index) => (
              <CharactersCard key={user._id} user={user} index={index} />
            ))}
        </ul>
      )}
      <div className="pagination">
        <button
          onClick={prevPage}
          className={`page ${page === 1 && "disabled"}`}
        >
          &larr;
        </button>

        {[...Array(totalPages).keys()].map((el) => (
          <button
            onClick={() => setPage(el + 1)}
            key={el}
            className={`page ${page === el + 1 ? "active-page" : ""}`}
          >
            {el + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          className={`page ${page === totalPages && "disabled"}`}
        >
          &rarr;
        </button>
      </div>
    </>
  );
}

export default withTranslator(Filtr);
