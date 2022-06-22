import { createStore } from "redux";


function storeReducer (state = {counter: 0, toggle: true}, action) {

    if(action.type === 'increment')
    {
        return {...state,counter: state.counter + 1}
    }

    if(action.type === 'increaseby5'){
        return {...state, counter: state.counter + action.value}
    }

    if (action.type === 'decrement')
    {
        return {...state, counter: state.counter - 1}

    }

    if(action.type === 'toggleButton'){
        return {...state, toggle: !state.toggle }
    }
    return state;
}


const store = createStore(storeReducer)

export default store