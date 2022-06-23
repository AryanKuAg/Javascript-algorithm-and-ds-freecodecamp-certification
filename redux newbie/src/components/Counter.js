import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/redux-store';



const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  console.log('counter', counter)
  const showToggleButtons = useSelector(state => state.counter.toggle)
  const dispatch = useDispatch()

  console.log(counter, showToggleButtons)

  const toggleCounterHandler =  () => {
    dispatch(counterActions.toggleButton())
  }

  const incrementCounter = () => {
    dispatch(counterActions.increment())
  }

  const decrementCounter = () => {
    dispatch(counterActions.decrement())
  }

  const incrementByNumber = () => {
    dispatch(counterActions.increaseby5({num: 33}))
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      {showToggleButtons && <div><button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <button onClick={incrementByNumber}>incremnetByNumber</button></div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
