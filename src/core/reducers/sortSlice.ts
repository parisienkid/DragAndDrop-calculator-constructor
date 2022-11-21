import { createSlice,  } from "@reduxjs/toolkit";

interface calcItemI {
    id: number;
    title: string;
    items: {
        id: number;
        name: string;
    }[];
}

export interface calcItemsI extends Array<calcItemI>{};

export interface initialStateI {
    calcItems: calcItemsI
    currentItemId: number
    currentItemPosition: number
    currentItemZone: string
}

export const initialState: initialStateI = {
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
    currentItemId: 0,
    currentItemPosition: 0,
    currentItemZone: ''
}

const sortSlice = createSlice({
    name: 'sort',
    initialState,
    reducers: {
        sortItems: (state, action) => {
            state.calcItems = action.payload
        },
        setCurrentItemId: (state, action) => {
            state.currentItemId = action.payload
        },
        setCurrentItemPosition: (state, action) => {
            state.currentItemPosition = action.payload
        },
        setCurrentItemZone: (state, action) => {
            state.currentItemZone = action.payload
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

export const {sortItems, setCurrentItemId, setCurrentItemPosition, pushItem, addItem, setCurrentItemZone} = actions;

export default reducer;