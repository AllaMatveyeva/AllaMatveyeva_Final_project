import { useState } from "react";
import { BookCardModal } from "../bookCardModal/bookCardModal";
import "./bookCard.scss";

function BookCard(props) {
  const { index, book } = props;
  console.log(props);
  const [showModal, setIsShowModal] = useState(false);

  return (
    <>
      <div
        className="bookCard"
        index={index}
        onClick={() => setIsShowModal(true)}
      >
        <div className="bookCard__item bookCard__img-container">
          <img className=" book__image" src={book.Image} alt="Book"></img>
          <p className="bookCard__item bookCard__title name">{book.Name}</p>
        </div>
      </div>

      {showModal && (
        <BookCardModal
          book={book}
          index={index}
          onClose={() => setIsShowModal(false)}
        />
      )}
    </>
  );
}

export default BookCard;