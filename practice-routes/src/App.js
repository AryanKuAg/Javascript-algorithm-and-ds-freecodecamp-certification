import Layout from "./components/layout/Layout";
import MainNavigation from "./components/layout/MainNavigation";
import QuoteForm from "./components/quotes/QuoteForm"

function App() {
  return (
    <div>
      <MainNavigation/>
      <Layout>
         <QuoteForm/>
      </Layout>
     
    </div>
  );
}

export default App;
