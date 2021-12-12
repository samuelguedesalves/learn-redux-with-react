import React from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../../books";
import BookItem from "./BookItem";

const BooksListage = () => {
  const books = useSelector(getBooks);

  return (
    <div className="w-100 mt-3">
      <span className="d-block fs-4 mb-2">Books list</span>
      {books.map((item, index) => (
        <BookItem
          key={index}
          id={item.id}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default BooksListage;
