import React from 'react'
import "./BeautyCard.css"

function BeautyCard({icon, text}) {
  return (
    <div className='beautyCard__div'>
      <img alt={text} src={icon} className='beautyCard__div__image'/>
      <p>{text}</p>
    <hr className='beautyCard__hr'/>
    </div>
  )
}

export default BeautyCard