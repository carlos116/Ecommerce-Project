import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, { payload }) => {

        const itemName = payload.title;
        const itemImage = payload.image;
        const itemPrice = payload.price;

        const existingItem = state.items.find(item => item.name === itemName)
        
        if(existingItem) {
            state.items = state.items.map(item => item.name === itemName ? {...item, amount: item.amount + 1} : item)
        } else{
        state.items = [...state.items,{
            name: itemName,
            image: itemImage,
            price: itemPrice,
            amount: 1
        }]
        }
      },
    deleteItem: (state, { payload }) => {
        const itemName = payload.name;
        state.items = state.items.filter(item => item.name !== itemName)
    },  
    increaseItemAmount: (state, { payload }) => {
            const itemName = payload.name;
            state.items = state.items.map(item => item.name === itemName ? {...item, amount: item.amount + 1} : item)
      },
    decreaseItemAmount: (state, { payload }) => {
            const itemName = payload.name;
            state.items = state.items.map(item => item.name === itemName ? {...item, amount: item.amount - 1} : item)
  }
  },
});

export const { addItem, deleteItem, increaseItemAmount, decreaseItemAmount } = cartSlice.actions;

export default cartSlice.reducer;