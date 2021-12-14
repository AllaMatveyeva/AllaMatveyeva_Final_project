import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getQuotes } from "../../../../api/api";
import QuotesPage from "./quotesPage";
import Loader from "../../../../api/loader";

import "./quotes.scss";

function Quotes() {
  console.log(useParams());
  const { id } = useParams();

  console.log(id);
  const [quotes, setQuotes] = useState({});

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      <span className="quotes-author">
        {localStorage.getItem(`character_${id}`)}
      </span>
      <ul className="quotes-block">
        {isLoading && <Loader />}
        {isError && "Error"}
        {!isLoading &&
          !isError &&
          quotes.map((quote, index) => (
            <QuotesPage quote={quote} index={index} />
          ))}
      </ul>
    </>
  );
}

export default Quotes;
