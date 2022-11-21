import { createSlice,  } from "@reduxjs/toolkit";
import { OperatorProps } from '../../components/operator/Operator';


export interface calcStateI {
    status: 'constructor' | 'calculator' | ''
    mode: 'value' | 'counter' | 'total'
    value: string
    counter: string
    total: number | string
    operator: OperatorProps
}

export const initialState: calcStateI = {
    status: '',
    mode: 'value',
    value: '',
    counter: '',
    total: '',
    operator: {
        name: 'none'
    }
}

const calcSlice = createSlice({
    name: 'calc',
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload;
        },
        changeMode: (state, action) => {
            state.mode = action.payload
        },
        resetValue: (state) => {
            state.value = '';
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
        addNumberValue: (state, action) => {
            state.value = state.value + action.payload
        },
        resetTotal: (state) => {
            state.total = '';
        },
        setTotal: (state, action) => {
            state.total = action.payload
        },
        addNumberTotal: (state, action) => {
            state.total = state.total + action.payload
        },
        resetCounter: (state) => {
            state.counter = '';
        },
        setCounter: (state, action) => {
            state.counter = action.payload
        },
        addNumberCounter: (state, action) => {
            state.counter = state.counter + action.payload
        },
        setOperator: (state, action) => {
            state.operator.name = action.payload
        }
    }
})

const {reducer, actions} = calcSlice;

export const { 
    changeStatus, 
    addNumberTotal,
    addNumberValue, 
    resetValue, 
    resetTotal, 
    setOperator, 
    setValue, 
    setTotal, 
    changeMode, 
    resetCounter, 
    setCounter, 
    addNumberCounter } = actions;

export default reducer;