import React from 'react'
import "./BeautyCard.css"

function BeautyCard({icon, text}) {
  return (
    <div className='beautyCard__div'>{text}
    <hr className='beautyCard__hr'/>
    </div>
  )
}

export default BeautyCard