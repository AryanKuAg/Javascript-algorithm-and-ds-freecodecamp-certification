import { Switch, Route} from "react-router-dom";
import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteForm from "./components/quotes/QuoteForm"
import QuoteList from "./components/quotes/QuoteList";
import quotes from "./demo-quotes";
import HighlightedQuote from './components/quotes/HighlightedQuote'

function App() {
  return (
    <div>
      <MainNavigation/>
      <Layout>
      <Switch>
        <Route path='/quotes' exact>
        <QuoteList quotes={quotes}/>

        </Route>
        <Route path='/new-quote' exact>
         <QuoteForm/>

        </Route>

      <Route path='/quotes/:quoteId'>
        <HighlightedQuote text={'special'} author={'something'}/>
      </Route>
      </Switch>
      </Layout>
     
    </div>
  );
}

export default App;
