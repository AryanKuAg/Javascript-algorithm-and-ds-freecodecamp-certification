import { Component } from 'react/cjs/react.production.min';
import classes from './User.module.css';

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

class User extends Component {
  render() {
    return <li className={classes.user}>{props.name}</li>;
  }
}

export default User;
