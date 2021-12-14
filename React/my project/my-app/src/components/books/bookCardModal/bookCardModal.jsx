import ModalWindow from "../../modalWindow/modal";
import "./bookCardModal.scss";

export function BookCardModal(props) {
  const { book, key, onClose } = props;

  return (
    <>
      <ModalWindow title={`${book.Name} `} onClose={onClose} key={key}>
        <div className="book-item book-author">Author: {book.Author}</div>

        <div className="book-item book-release">Released: {book.Released}</div>
        <div className="book-item books-link">
          <a className="books-link__item more-link" href={book.More}>
            More
          </a>
          <a className="books-link__item read-link" href={book.Read}>
            Read
          </a>

          <a className="books-link__item buy-link" href={book.Buy}>
            Buy
          </a>
        </div>
      </ModalWindow>
    </>
  );
}
