import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    allProducts: [],
};

export const basketSlice = createSlice ({
    name:"basket",
    initialState,
    reducers : {
        addToBasket : (state, action) => {
            state.items = [...state.items, action.payload]
        },
        removeFromBasket : (state, action) =>{
            const index = state.items.findIndex((basketItem) => basketItem.id === action.payload.id )

            let newBasket = [...state.items]

            if(index >= 0){
                newBasket.splice(index, 1)
            }
            else {
                console.warn(`Cannot remove products ${action.payload.id} from basket`)
            }

            state.items = newBasket
        },
        setAllProducts: (state, action) => {
            state.allProducts = action.payload;
          },

        
    },
});

export const {addToBasket, removeFromBasket, setAllProducts} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selecttotalItems = (state) => state.basket.items.reduce((total, item)=> total + item.price , 0)

export default basketSlice.reducer;