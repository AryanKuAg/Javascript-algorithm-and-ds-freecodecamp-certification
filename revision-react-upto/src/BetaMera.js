import React from 'react'

function BetaMera(props) {
  const style = props.style;
  return (
    <div style={style}>{props.children}</div>
  )
}

export default BetaMera