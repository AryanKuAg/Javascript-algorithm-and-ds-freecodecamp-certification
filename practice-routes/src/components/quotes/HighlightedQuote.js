import classes from './HighlightedQuote.module.css';
import { useParams } from 'react-router-dom';
import quotes from '../../demo-quotes.js'

const HighlightedQuote = (props) => {
  const param = useParams()

  const quoteItem = quotes.find(d => {
  
  return d.id.toString() === param.quoteId} )

  return (
    <>
     {quoteItem && <figure className={classes.quote}>
       <p>{quoteItem.text}</p>
      <figcaption>{quoteItem.author}</figcaption>
      
    </figure>}
    {
      !quoteItem && <h2 style={{textAlign: 'center'}}>Well next time dear.</h2>
    }
    </>
   
  );
};

export default HighlightedQuote;
