import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialcartWork = {showCart: true, cartItems: [{title: 'test', price: 423, description: 'A very bad product!!', quantity: 1}]}

const cartWork = createSlice({
    name: 'cartWork'
    ,initialState: initialcartWork,
    reducers: {
        toggleCart(state){
            state.showCart = !state.showCart
        },
        increaseQuantity(state, action) {
            const index = state.cartItems.findIndex(e => e.title === action.payload)

            if (index >= 0){
                // console.log('index', index)
                // console.log('detail', state.cartItems[index])
                state.cartItems[index].quantity++;
                // console.log('quantity', state.showCart[index].quantity)
            }

        },decreaseQuantity(state, action){
            const index = state.cartItems.findIndex(e => e.title === action.payload)

            if (index >= 0){
                state.cartItems[index].quantity--;
            }
        },
        addItems(state, action){ // action.payload  = {object of product}
            // if title exist then raise quantity
            // else add item

            const title = action.payload.title
            const tempList = state.cartItems

            const titleIndex = tempList.findIndex(e => e.title === title)
            if(titleIndex >= 0){
                tempList[titleIndex].quantity += 1;
            }else{
                tempList.push({...action.payload, quantity: 1})
            }
            state.cartItems = tempList
            console.log('myitems', state.cartItems)
        }
    }
})


const store = configureStore({
    reducer: cartWork.reducer
})

export const cartWorkActions = cartWork.actions

export default store;