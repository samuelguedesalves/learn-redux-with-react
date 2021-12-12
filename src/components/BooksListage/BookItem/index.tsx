import React from "react";
import { useDispatch } from "react-redux";
import { Book, removeBook } from "../../../books";

const BookItem: React.FC<Book> = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const removeAtList = () => {
    dispatch(removeBook({ id }));
  };

  return (
    <div className="w-100 card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">{description}</p>
        {/* <a href="#" className="card-link">See more</a> */}
        {/* <a href="#" className="card-link">Another link</a> */}
        <button className="btn btn-danger w-100" onClick={removeAtList}>
          Remover
        </button>
      </div>
    </div>
  );
};

export default BookItem;
