import { Switch, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteForm from "./components/quotes/QuoteForm"
import QuoteList from "./components/quotes/QuoteList";
import quotes from "./demo-quotes";
import HighlightedQuote from './components/quotes/HighlightedQuote'
import NoQuotesFound from "./components/quotes/NoQuotesFound"

function App() {
  return (
    <div>
      <MainNavigation/>
      <Layout>
      <Switch>
        <Route path='/quotes' exact>
        {quotes.length <= 0 ? <NoQuotesFound/> :<QuoteList quotes={quotes}/>}

        </Route>
        <Route path='/new-quote' exact>
         <QuoteForm/>

        </Route>

      <Route path='/quotes/:quoteId'>
        <HighlightedQuote/>
      </Route>
      </Switch>
      </Layout>
     
    </div>
  );
}

export default App;
