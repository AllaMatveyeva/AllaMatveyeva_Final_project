import "./quotesPage.scss";

function QuotesPage(props) {
  console.log(props);

  return (
    <>
      <li className="quotes" index={props.index}>
        <span className="quotes_text">
          {props.index + 1}. {props.quote.dialog}
        </span>
      </li>
    </>
  );
}

export default QuotesPage;
