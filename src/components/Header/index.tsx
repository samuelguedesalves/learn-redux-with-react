import React from "react";
import { useSelector } from "react-redux";
import { getBooks } from "../../books";

const Header = () => {
  const books = useSelector(getBooks);

  return (
    <div className="bg-primary py-2">
      <div className="container w-50 d-flex justify-content-between align-items-center">
        <h1 className="text-left fs-2 text-light">Book Explorer</h1>

        <div className="fs-5 text-light">
          <i className="fas fa-file" style={{ marginRight: 8 }}></i>
          <span>{books.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
