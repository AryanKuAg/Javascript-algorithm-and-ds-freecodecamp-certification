import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = (props) => {
  const items = useSelector(state => state.cartItems)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
       {items.map(e => <CartItem key={Math.random()}
          item={{ title: e.title, quantity: e.quantity, total: 18, price: e.price }}
        />) }
      </ul>
    </Card>
  );
};

export default Cart;
