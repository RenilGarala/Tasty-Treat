import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    //name of cart slice 
    name: 'cart',
    initialState: {
        items: []
    },
    //In slice so many reducer so we write reducers
    reducers: {
        //additem, removeItem, ClearCart is basically action
        //and this function is called reducer function 
        //and this function is modify our cart slice


        addItem: (state, action) =>{
            //Vanialla(older) redux - do not mutate the state - mandatory the state 
            // const newState = [...state]; //create new state
            // newState.items.push(action.payload); //modify the state
            // return newState;

            //Redux tool kit - we have to mutating the state here 
            state.items.push(action.payload);
            //behind the seen redux is actually work like vanialla redux and it is create immmutable state
            //redux is use immer library to do this
            //basically immer library kind of finding the differance between original state and mutated state and gives you back the new state.
        },

        removeItem: (state,action)=>{
            state.items.pop();
        },
        clearCart: (state, action) =>{
            // redux tool kit says either mutating state or returning a new state
            // first way 
            state.items.length = 0;   
            //original state = []. original state is modified

            // second way
            //return {items :[]};
            //this new object will be replace inside original state = {items :[]}
        }
    }
})

export const{addItem, removeItem, clearCart}= cartSlice.actions;

export default cartSlice.reducer;