import Counter from './components/Counter';
import Header from './components/Header'
import Auth from './components/Auth'
import {useSelector} from "react-redux"
import UserProfile from "./components/UserProfile"

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <div>
      <Header/>
     {!isLoggedIn && <Auth/>}
     {isLoggedIn && <UserProfile />}
      <Counter />
    </div>
    
  );
}

export default App;
