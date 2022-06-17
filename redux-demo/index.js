const redux = require('redux') // got it

const counterReducer = (state = {counter: 33}, action) => {  // got it
    return {counter: state.counter + 1};
}

const store = redux.createStore(counterReducer);    // got it 

const counterSubscriber = () => {  // got it
    const latestState = store.getState()
 console.log(latestState)
}

store.subscribe(counterSubscriber)  // got it

store.dispatch({type: 'increment'})  // got it