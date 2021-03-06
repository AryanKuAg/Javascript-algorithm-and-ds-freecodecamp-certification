import React, {useContext, useState, useCallback} from 'react'
import ctxData from './store/somethingtostore'
import useHooker from './Hooker';

function Ctx() {
    console.log('hhhhhhhhhhhok',useHooker())
    const myCtxData = useContext(ctxData);
    const [age, setAge] =  useState(myCtxData.age);

    const presspress = useCallback(() => {
        myCtxData.pressMe()
        setAge(myCtxData.age)
    }, [])
    
  return (
    <div>Ctx 
        <h1>{age}</h1>
        <button onClick={presspress}>Just press me!</button>
    </div>
  )
}

export default React.memo(Ctx)