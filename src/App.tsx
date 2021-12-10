import React, { useState } from 'react';
import { Book, addBook, removeBook, getBooks, store } from './books';
import { Provider, useDispatch, useSelector } from 'react-redux';

const App: React.FC = () => {
  return (
    <div className="App container-md">
      <Provider store={store} >
        <Form />
        {/* <Counter /> */}
        <BooksListage />
      </Provider>
    </div>
  );
}

export default App;

// const Counter: React.FC = () => {
//   const dispatch = useDispatch();
//   const counter = useSelector(getAmount);

//   return (
//     <>
//       <div className="container">
//         <div className="row mb-4 mt-4">
//           <span className='text-center fs-2' >{counter}</span>
//         </div>
//         <div className="row">
//           <div className='d-grid gap-2 col-6 mx-auto'>
//             <button type='button' className="btn btn-primary" onClick={() => dispatch(increment())} >increment</button>
//             <button type='button' className="btn btn-primary" onClick={() => dispatch(decrement())} >decrement</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

const Form: React.FC = () => {
  const [info, setInfo] = useState({ title: '', description: '' });
  const dispatch = useDispatch();

  const saveBook = () => {
    if (Boolean(info.title.trim()) && Boolean(info.description.trim())) {
      dispatch(addBook(info))
    }
  }

  return (
    <div className='container w-50 mt-4'>
      <h1 className='text-center fs-2 mb-4' >Book Explorer</h1>
      <div className="mb-3">
        <label className="form-label">title</label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="place the book title"
          onChange={e => setInfo({ ...info, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          onChange={e => setInfo({ ...info, description: e.target.value })}
        ></textarea>
      </div>

      <button type='button' className="btn btn-primary w-100" onClick={saveBook} >Add book</button>
    </div>
  )
}

const BooksListage: React.FC = () => {
  const books = useSelector(getBooks);

  return (
    <div className='container w-50 mt-3'>
      <span className='d-block fs-4 mb-2'>Books list</span>
      {
        books.map((item, index) => (
          <BookItem
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        )
        )
      }
    </div>
  )
}

const BookItem: React.FC<Book> = ({ id, title, description }) => {
  const dispatch = useDispatch();

  const removeAtList = () => {
    dispatch(removeBook({ id }))
  }

  return (
    <div className="card mb-3" >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
        <p className="card-text">{description}</p>
        {/* <a href="#" className="card-link">See more</a> */}
        {/* <a href="#" className="card-link">Another link</a> */}
        <button className='btn btn-danger w-100' onClick={removeAtList} >Remover</button>
      </div>
    </div>
  )
}
