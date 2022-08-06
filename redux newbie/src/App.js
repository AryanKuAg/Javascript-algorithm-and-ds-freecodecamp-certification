// import Counter from './components/Counter';
// import Header from './components/Header'
// import Auth from './components/Auth'
// import {useSelector} from "react-redux"

// import BubbleChart from "./Charts/BubbleChart";
import RadarChart from "./Charts/RadarChart";

// import UserProfile from "./components/UserProfile"

function App() {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  return (
    <div style={{ width: "500px", height: "500px" }}>
      {/* <Header/>
     {!isLoggedIn && <Auth/>}
     {isLoggedIn && <UserProfile />}
      <Counter /> */}
      {/* <BubbleChart /> */}
      <RadarChart />
    </div>
  );
}

export default App;
