import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBook } from "../../books";

const Form: React.FC = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  const goToHome = () => {
    navigate("/");
  };

  const saveBook = () => {
    if (Boolean(info.title.trim()) && Boolean(info.description.trim())) {
      dispatch(addBook(info));
      goToHome();
    }
  };

  return (
    <div className="container w-50 mt-4">
      <div className="row mb-4">
        <button
          className="btn btn-link d-flex align-items-center text-decoration-none"
          onClick={goToHome}
        >
          <i className="fas fa-arrow-left fs-5"></i>
          <span className="d-block fs-5" style={{ marginLeft: 12 }}>
            Back
          </span>
        </button>
      </div>

      <h2 className="fs-4">Create a book</h2>
      <div className="mb-3">
        <label className="form-label">Book name</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="place the book title"
          onChange={(e) => setInfo({ ...info, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={(e) => setInfo({ ...info, description: e.target.value })}
        ></textarea>
      </div>

      <button
        type="button"
        className="btn btn-primary w-100"
        onClick={saveBook}
      >
        Add book
      </button>
    </div>
  );
};

export default Form;
