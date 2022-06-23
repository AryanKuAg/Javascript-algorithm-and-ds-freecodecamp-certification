import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import { cartWorkActions } from '../../store';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description } = props;

  const addtoCartHandler = () => {
    dispatch(cartWorkActions.addItems({title: title, price: price, description: description}))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addtoCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
