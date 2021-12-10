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
  const counter = useSelector(getAmount)

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => dispatch(increment())} >increment</button>
      <button onClick={() => dispatch(decrement())} >decrement</button>
    </>
  )
}
