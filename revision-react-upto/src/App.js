import React , {useRef, useEffect} from 'react'
import styles from "./App.module.css"
import Sample from "./Sample"
import nagin from './KumKum';
import MyForm from './MyForm';
import DynamicList from './DynamicList';
import SideEffect from './SideEffect';
import ReducerWork from './ReducerWork';
import Ctx from './Ctx';
// import MyContext from './store/somethingtostore'
import ForWard from './ForWard';
import Draw from './Draw';
import Organ from './alternative/Organ'
import Internet from './Internet';



function App() {
  const fff = useRef();
  console.log(nagin())
  // A part of the component where the data lives.
  const s = <Sample name = 'aryan button my friend'/>;
  const pp = 
  <p className={styles.panel}>This is it my friend</p> 

  function liftingTheStateUp(data){
    console.log('liftingthestateup',data)
  }
  const sideEffect = <SideEffect />


  useEffect(() => {
    fff.current.focus();
    console.log("fffffffff")
  }, [])
  







  // A part where UI lives
  return (
    <React.Fragment >
      <Internet />
      <Organ />
      <Draw data={{'height': 20, 'width': 20}}/>
      <ForWard ref={fff}/>
      <ReducerWork />
      <MyForm fx={liftingTheStateUp}/>
      <DynamicList />
      {sideEffect}
      {s}{pp}
      <Ctx/>
    </React.Fragment>
  )
}

export default App

// Dear Animal Fellowship stuffs,
// My name is Aryan, and I am really interested in the MERN Stack/Web development and would like to have more information about that. I've tried and applied to many companies in my country India but they want a college degree. I've also built projects for companies but they never responded back like accepted or rejected. I gut says they don't support me. I rely on you. Maybe you can help. I'm hard working. I can work as many as you want. Please let me know what are your thoughts about me. 
// Thank you.