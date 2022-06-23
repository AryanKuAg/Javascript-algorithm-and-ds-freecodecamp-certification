import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { cartWorkActions } from '../../store';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const toggleHandler = () => {
    dispatch(cartWorkActions.toggleCart())
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
