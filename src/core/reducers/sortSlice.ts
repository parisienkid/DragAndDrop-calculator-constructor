import { createSlice,  } from "@reduxjs/toolkit";

const initialState = {
    calcItems: [
        {id: 1, title: 'constructor', items: [
            {id: 1, name: 'total'},
            {id: 2, name: 'operators'},
            {id: 3, name: 'numbers'},
            {id: 4, name: 'equal'}
        ]},
        {id: 2, title: 'zone', items: [
            
        ]}
    ],
    currentArea: '',
    currentItem: 0,
    currentDropItem: 0,
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        sortItems: (state, action) => {
            state.calcItems = action.payload
        },
        setCurrentItem: (state, action) => {
            state.currentItem = action.payload
        },
        setCurrentDropItem: (state, action) => {
            state.currentDropItem = action.payload
        },
        pushItem: (state, action) => {
            state.calcItems[1].items.push(action.payload);
        },
        addItem: (state, action) => {
            state.calcItems[1].items.splice(+action.payload.id, 0, action.payload.item);
        },
    }
})

const {reducer, actions} = sortSlice;

export const {sortItems, setCurrentItem, pushItem, addItem, setCurrentDropItem} = actions;

export default reducer;