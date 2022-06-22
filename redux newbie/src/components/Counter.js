import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';



const Counter = () => {
  const counter = useSelector(state => state.counter)
  const showToggleButtons = useSelector(state => state.toggle)
  const dispatch = useDispatch()

  const toggleCounterHandler =  () => {
    dispatch({type: 'toggleButton'})
  }

  const incrementCounter = () => {
    dispatch({type: 'increaseby5', value : 5})
  }

  const decrementCounter = () => {
    dispatch({type: 'decrement'})
  }



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showToggleButtons && <div><button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button></div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
