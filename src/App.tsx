import React from 'react';
import { decrement, getAmount, increment, store } from './books';
import { Provider, useDispatch, useSelector } from 'react-redux';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <Counter />
      </Provider>
    </div>
  );
}

export default App;

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(getAmount);

  return (
    <>
      <div className="container">
        <div className="row mb-4 mt-4">
          <span className='text-center fs-2' >{counter}</span>
        </div>
        <div className="row">
          <div className='d-grid gap-2 col-6 mx-auto'>
            <button type='button' className="btn btn-primary" onClick={() => dispatch(increment())} >increment</button>
            <button type='button' className="btn btn-primary" onClick={() => dispatch(decrement())} >decrement</button>
          </div>
        </div>
      </div>
    </>
  )
}
