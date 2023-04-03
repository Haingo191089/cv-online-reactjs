import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDisplay: true,
    employmentHistory: []
}

export const employmentHistory = createSlice({
    name: 'education_history',
    initialState,
    reducers: {
        setEmploymentHistory: (state, action) => {
            const {index, value, type} = action.payload;
            state.employmentHistory[index][type] = value;
        },
        addEmploymentHistory: (state) => {
            state.employmentHistory.push({
                from: '',
                to: '',
                content: '',
            })
        },
        removeEmploymentHistory: (state, action) => {
            state.employmentHistory = state.employmentHistory.filter((language, index) => {
                return index != action.payload.index
            });
        },
        setIsDisplay: (state, action) => {
            state.isDisplay = action.payload.isDisplay
        }
    },
})

// Action creators are generated for each case reducer function
export const { setEmploymentHistory, addEmploymentHistory, removeEmploymentHistory, setIsDisplay } = employmentHistory.actions

export default employmentHistory.reducer