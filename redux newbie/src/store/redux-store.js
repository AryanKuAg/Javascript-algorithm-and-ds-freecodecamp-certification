// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit"

const initialCounter = {counter: 0, toggle: true}

const counterSlice = createSlice({name:'counter', initialCounter, reducers:{
    increment(state){
        state.counter++;
    },
    increaseby5(state, action){
        state.counter += action.value;
    },
    decrement(state){
        state.counter--;
    },
    toggleButton(state){
        state.toggle = !state.toggle;
    } 
} })

const initialAuth = {isLoggedIn: false}

const authSlice = createSlice({
    name:'auth',
    initialAuth,
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },logout(state){
            state.isLoggedIn = false;
        } 
    }
})


// function storeReducer (state = {counter: 0, toggle: true}, action) {

//     if(action.type === 'increment')
//     {
//         return {...state,counter: state.counter + 1}
//     }

//     if(action.type === 'increaseby5'){
//         return {...state, counter: state.counter + action.value}
//     }

//     if (action.type === 'decrement')
//     {
//         return {...state, counter: state.counter - 1}

//     }

//     if(action.type === 'toggleButton'){
//         return {...state, toggle: !state.toggle }
//     }
//     return state;
// }


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, auth : authSlice.reducer
    }
})

export const authActions = authSlice.actions
export const counterActions = counterSlice.actions

export default store