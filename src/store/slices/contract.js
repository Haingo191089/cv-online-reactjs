import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    phone: '',
    email: '',
    address: '',
}

export const contract = createSlice({
    name: 'contract',
    initialState,
    reducers: {
        setContract: (state, action) => {
            Object.keys(action.payload).forEach(key => {
                state[key] = action.payload[key];
            });
        }
    },
})

// Action creators are generated for each case reducer function
export const { setContract } = contract.actions

export default contract.reducer