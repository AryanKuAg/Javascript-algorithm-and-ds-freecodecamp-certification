import React, {useReducer} from 'react'

function rFunction(prevState, action) {

        switch(action.type){
            case 'abc':
                return 333;
            case 'bca':
                return 'i hate it';
            case 'self study':
                return "i made for it";
            default:
                return prevState;

        }
}

function Thricereducer() {

    const [state, dispatch] = useReducer(rFunction , 'initial state ofcourse');

    function stateDispath(someData) {
        dispatch({type: 'bca', value: someData})
    }
  return (
    <div>{state}
    <button onClick={stateDispath}>klasjflksadfkaskfjsdfj</button></div>
  )
}

export default Thricereducer