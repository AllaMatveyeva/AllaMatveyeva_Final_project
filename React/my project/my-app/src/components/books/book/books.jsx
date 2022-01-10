import BookCard from "../bookCard/bookCard";

import book_hobbit from "../../../img/book_hobbit.jpg";
import book_fellowship from "../../../img/book_fellowship.jpg";
import book_towers from "../../../img/book_towers.jpg";
import book_return from "../../../img/book_return.jpg";

import "./books.scss";
import { useEffect } from "react";

const booksArr = [
  {
    Name: "The Hobbit, or There and Back Again",
    Author: "J.R.R. Tolkien",
    Released: "September 21, 1937",
    Image: `${book_hobbit}`,
    More: "https://lotr.fandom.com/wiki/The_Hobbit",
    Read: "http://thefreeonlinenovel.com/bi/the-hobbit",
    Buy: "https://www.amazon.com/s?k=the+hobbit+by+j.r.r.+tolkien&i=stripbooks-intl-ship&crid=1PHBK0CJMBZKM&sprefix=the+hobbit%2Cstripbooks-intl-ship%2C282&ref=nb_sb_ss_ts-doa-p_2_10",
  },

  {
    Name: "The Fellowship of the Ring",
    Author: "J.R.R. Tolkien",
    Released: "29 July, 1954",
    Image: `${book_fellowship}`,
    More: "https://lotr.fandom.com/wiki/The_Fellowship_of_the_Ring_(novel)",
    Read: "http://thefreeonlinenovel.com/bi/the-fellowship-of-the-ring",
    Buy: "https://www.amazon.com/s?k=the+fellowship+of+the+ring&i=stripbooks-intl-ship&crid=2S46B8U6UY0IW&sprefix=the+fello%2Cstripbooks-intl-ship%2C268&ref=nb_sb_ss_ts-doa-p_1_9",
  },
  {
    Name: "The Two Towers",
    Author: "J.R.R. Tolkien",
    Released: "Nov 11, 1954",
    Image: `${book_towers}`,
    More: "https://lotr.fandom.com/wiki/The_Two_Towers_(novel)",
    Read: "http://thefreeonlinenovel.com/bi/the-two-towers",
    Buy: "https://www.amazon.com/s?k=the+two+towers&i=stripbooks-intl-ship&crid=3TVQASKS1XAD3&sprefix=the+two%2Cstripbooks-intl-ship%2C302&ref=nb_sb_ss_ts-doa-p_1_7",
  },

  {
    Name: "The Return of the King",
    Author: "J.R.R. Tolkien",
    Released: "Oct 20, 1955",
    Image: `${book_return}`,
    More: "https://lotr.fandom.com/wiki/The_Return_of_the_King_(novel)",
    Read: "http://thefreeonlinenovel.com/bi/the-return-of-the-king",
    Buy: "https://www.amazon.com/s?k=the+return+of+the+king+tolkien&crid=20R3HPS06ZT4A&sprefix=the+return+of+the+king+t%2Cstripbooks-intl-ship%2C274&ref=nb_sb_ss_fb_1_24_ts-doa-p",
  },
];

function Books(props) {
  useEffect(() => {
    localStorage.removeItem("letter");
  });
  return (
    <>
      <div className="books-block">
        {booksArr.map((book, index) => (
          <BookCard index={index} book={book} />
        ))}
      </div>
    </>
  );
}

export default Books;
