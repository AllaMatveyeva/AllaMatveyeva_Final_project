import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getQuotes } from "../../../../api/api";
import QuotesPage from "./quotesPage";
import Loader from "../../../../api/loader";

import "./quotes.scss";
import store from "../../../../store/store";

function Quotes() {
  console.log(useParams());
  const { id } = useParams();

  console.log(id);
  const [quotes, setQuotes] = useState({});

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const unsubscribe = store.subscribe(() => store.getState());

  // console.log(unsubscribe());

  const charactersFromStore = store.getState().characters;
  function quotesAuthor() {
    if (
      charactersFromStore.characters.length === 0 ||
      !charactersFromStore.characters
    ) {
      return localStorage.getItem(`quotesAuthor_${id}`) || null;
    } else {
      const characterWithId = charactersFromStore.characters.filter(
        (item) => item._id === id
      );
      localStorage.setItem(`quotesAuthor_${id}`, characterWithId[0].name);
      return characterWithId[0].name;
    }
  }
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
      <span className="quotes-author">{quotesAuthor()}</span>
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
