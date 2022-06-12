import React, {useContext, useState} from 'react'
import ctxData from './store/somethingtostore'

function Ctx() {
    const myCtxData = useContext(ctxData);
    const [age, setAge] =  useState(myCtxData.age);
    function presspress() {
        myCtxData.pressMe()
        setAge(myCtxData.age)
    }
  return (
    <div>Ctx 
        <h1>{age}</h1>
        <button onClick={presspress}>Just press me!</button>
    </div>
  )
}

export default Ctx