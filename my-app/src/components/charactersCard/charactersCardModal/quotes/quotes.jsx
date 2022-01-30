import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getQuotes } from "../../../../api/api";
import QuotesPage from "./quotesPage";
import Loader from "../../../../api/loader";
import quotesAuthor from "./quotesAuthor";

import "./quotes.scss";
import UsePagination from "../../../../pagination/pagination";

function Quotes() {
  console.log(useParams());
  const { id } = useParams();

  console.log(id);
  const [quotes, setQuotes] = useState([]);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
    count: quotes.length,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getQuotes(id);
        setQuotes(response.data.docs);
        console.log(response.data.docs);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <span className="quotes-author">{quotesAuthor(id)}</span>
      <ul className="quotes-block">
        {isLoading && <Loader />}
        {isError && "Error"}
        {!isLoading &&
          !isError &&
          quotes
            .slice(firstContentIndex, lastContentIndex)
            .map((quote, index, key) => (
              <QuotesPage quote={quote} index={index} key={quote._id} />
            ))}
      </ul>
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

export default Quotes;
