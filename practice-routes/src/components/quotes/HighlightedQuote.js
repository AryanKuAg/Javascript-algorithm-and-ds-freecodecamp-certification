import classes from './HighlightedQuote.module.css';
import { useParams } from 'react-router-dom';

const HighlightedQuote = (props) => {
  const param = useParams()
  return (
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
