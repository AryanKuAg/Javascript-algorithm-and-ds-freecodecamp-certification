import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialcartWork = {showCart: true, cartItems: [{title: 'test', price: 423, description: 'A very bad product!!', quantity: 1}]}

const cartWork = createSlice({
    name: 'cartWork'
    ,initialState: initialcartWork,
    reducers: {
        toggleCart(state){
            state.showCart = !state.showCart
        },
        addItems(state, action){ // action.payload  = {object of product}
            // if title exist then raise quantity
            // else add item

            const title = action.payload.title

            const titleIndex = state.cartItems.findIndex(e => e.title === title)
            if(titleIndex >= 0){
                state.cartItems[titleIndex].quantity += 1;
            }else{
                state.cartItems.add(action.payload)
            }
        }
    }
})


const store = configureStore({
    reducer: cartWork.reducer
})

export const cartWorkActions = cartWork.actions

export default store;