import React, {useState} from 'react'

function BetaMera(props) {

  const style = props.style;
  const [poop, setPoop] = useState('bang bang!!')

  console.log('betamera rendered!!!')

  return (
    <div style={style}>{poop}{props.children}</div>
  )
}

export default BetaMera