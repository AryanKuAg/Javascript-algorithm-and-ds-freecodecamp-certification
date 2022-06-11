import React from 'react'
import BetaMera from './BetaMera';

function Sample(props) {
  // DATA
  const name = props.name.repeat(10);
  const localStyle = {'color': 'red', 'fontSize': 18}

  const myp = <p>I sometime like I should not live but I think I don't think what I think </p>

  const poop =parseInt( Math.random() * 10000000 ) % 3 === 0 ? <p> Poop baby ppoop</p>: <p>seems like today is your day</p>

  const betamera = <BetaMera style={{'color': 'grey'}}>sfs<p>This is the children</p></BetaMera>



  // UI
  return (
    <div>
      {myp}
      {poop}
      <button style={localStyle}>{name}</button>
      {betamera}
    </div>
  )
}

export default Sample