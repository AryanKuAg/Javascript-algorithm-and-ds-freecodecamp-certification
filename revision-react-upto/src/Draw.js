import React from 'react'
import style from "./Draw.module.css"

function Draw(props) {
  return (
    <div className={style.dance} style={{...props.data}}></div>
  )
}

export default Draw