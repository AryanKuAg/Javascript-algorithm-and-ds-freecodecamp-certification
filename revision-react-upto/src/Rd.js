import React, {useReducer, memo} from 'react'

function myReducerFunction(prev, action) {

    switch(action.type){
        case 'idc':
            return action.value;
        case 'idk':
            return action.value;
        default:
            return prev;
    }


    return prev;

}

function clickMe() {
    dispatch( {type: 'idk', value: 'notfhing to worry about!'}
    )
}

function Rd() {
    const [state, dispatch] = useReducer(myReducerFunction, 'myini');
  return (
    <div>{state} <button onClick={clickMe}>Dispatch</button></div>
  )
}

export default memo(Rd)