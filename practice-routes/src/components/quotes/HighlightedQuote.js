import classes from './HighlightedQuote.module.css';
import { useParams, Link } from 'react-router-dom';
import quotes from '../../demo-quotes.js'
import { useState } from 'react';



const HighlightedQuote = (props) => {
  const param = useParams()
  const [isLoadCommentActive, setLoadCommentActive] = useState(true);


  const loadCommentHandler =() => {
    setLoadCommentActive(false);
  }
  const quoteItem = quotes.find(d => {
  
  return d.id.toString() === param.quoteId} )

  return (
    <>
     {quoteItem && <div className={classes.quoteCardDiv}><figure className={classes.quote}>
       <p>{quoteItem.text}</p>
      <figcaption>{quoteItem.author}</figcaption>
      
    </figure>
  { isLoadCommentActive && <Link to={`/quotes/${param.quoteId}/comments`}>   <button className='btn' onClick={loadCommentHandler}>Load Comments</button></Link>}
    </div> }
    {
      !quoteItem && <h2 style={{textAlign: 'center'}}>Well next time dear.</h2>
    }
    </>
   
  );
};

export default HighlightedQuote;
