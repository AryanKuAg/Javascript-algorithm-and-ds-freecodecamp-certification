import React, {useReducer} from 'react'

function reducerFunction(prevState, action) {
    console.log(prevState)

    if(action.type === 'idc'){
      return action.value;
    }
    return prevState

}

function ReducerWork() {
    const [state, dispatchFn] = useReducer(reducerFunction, 'initialState');

    function reducing () {
      dispatchFn({type: 'idc', value: 'still i dont care'});
    }
  return (
    <div><p>{state} lll</p>
      <button onClick={reducing}>Reducer work</button>
    </div>
  )
}

export default ReducerWork