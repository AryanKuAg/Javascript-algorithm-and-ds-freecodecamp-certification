import React from 'react'
import "./BeautyButton.css"

function BeautyButton({title, bgColor}) {
  return (
    <button className='beautyButton' style={{backgroundColor: bgColor}}>{title}</button>
  )
}

BeautyButton.defaultProps = {
    title: 'Button',
    bgColor: 'purple',
  }

export default BeautyButton