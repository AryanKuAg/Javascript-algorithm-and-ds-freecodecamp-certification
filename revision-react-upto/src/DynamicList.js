import React, {useRef, useContext} from 'react'
import MyContext from './store/somethingtostore'

const theList = ['aryan', 'agrawal', 'is', 'the','super','hero','man','wait','what?']

function DynamicList() {
  let cctx = useContext(MyContext);
  console.log('cctx',cctx)
    const pRef= useRef();
  return (
    <React.Fragment>
        <p ref={pRef}>This is not for fun, right?</p>
        <button onClick={() =>{ 
            console.log(pRef.current.innerHTML)
        }}>Ref button</button>
        {
        theList.map((e) => {
            if(e.length < 4) return ;
            return <button key={e}>{e}</button>
        })}
        <p>======================================</p>
        
        </React.Fragment>
  )
}

export default DynamicList

// we use useEffect for the side effect
// we uses useEffect for the side effect.
// useEffect(() => {}, [list of dependencies])

// the function will run whenever the list of dependencies changes. 