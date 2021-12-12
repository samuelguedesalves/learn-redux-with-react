import React from "react";
import { useNavigate } from "react-router-dom";
import BooksListage from "../BooksListage";

const Starter: React.FC = () => {
  const navigate = useNavigate();

  const goToCreate = () => {
    navigate("/new");
  };

  return (
    <div className="container w-50 pt-4">
      <button className=" w-100 btn btn-primary" onClick={goToCreate}>
        Create New
      </button>
      <div className="w-100">
        <BooksListage />
      </div>
    </div>
  );
};

export default Starter;
