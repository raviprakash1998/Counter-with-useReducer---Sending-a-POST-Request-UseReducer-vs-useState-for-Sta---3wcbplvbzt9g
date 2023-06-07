import React, { useReducer } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const [counter, dispatch] = useReducer(counterReducer, 0);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div id="main">
     <span id="counter">{counter}</span>
      <button id="increment-btn" onClick={increment}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}


export default App;
