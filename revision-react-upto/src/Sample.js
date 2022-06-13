import React from 'react'
import BetaMera from './BetaMera';
import { useState , useCallback} from 'react';
import  ReactDOM  from 'react-dom';
import SideEffect from './SideEffect';

function Sample(props) {
  // DATA
  const [nn, setNn] = useState(true);
  const name = props.name.repeat(10);
  const localStyle = {'color': 'red', 'fontSize': 18}

  const clickHandler = useCallback(() => {
    setNn((pre) => !pre)
  }, [])

 
  const myp = <p onClick={clickHandler}>I sometime like I should not live but I think I don't think what I think </p>
  console.log('sample rerendered')
  const poop =parseInt( Math.random() * 10000000 ) % 3 === 0 ? <p> Poop baby ppoop</p>: <p>seems like today is your day</p>

  const betamera = <BetaMera style={{'color': 'grey'}}>sfs<p>This is the children</p></BetaMera>

 

  // UI
  return (
    <React.Fragment>
    
      {myp}
      {poop}
      <button style={localStyle} >{name}</button>
      {betamera}
      {ReactDOM.createPortal(<p style={{zIndex: 100000, position: 'absolute'}}>THIS IS A PORTAL BABY</p>,document.getElementById('portal'))}
    </React.Fragment>
  )
}

export default React.memo(Sample)