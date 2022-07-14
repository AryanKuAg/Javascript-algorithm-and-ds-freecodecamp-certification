import React from 'react'
import "./BeautyCard.css"

function BeautyCard({icon, text, startGrad, endGrad, shadow}) {
  const style = {background: `linear-gradient(135deg, ${startGrad} 0%,  ${endGrad} 100%)`, boxShadow: `-1px 64px 86px -30px ${shadow}`}
  return (
    <div className='beautyCard__div' style={style}>
      <img alt={text} src={icon} className='beautyCard__div__image'/>
      <p>{text}</p>
    <hr className='beautyCard__hr'/>
    </div>
  )
}

export default BeautyCard