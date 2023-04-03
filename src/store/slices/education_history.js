import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDisplay: true,
    educationHistory: []
}

export const educationHistory = createSlice({
    name: 'education_history',
    initialState,
    reducers: {
        setEducationHistory: (state, action) => {
            const {index, value, type} = action.payload;
            state.educationHistory[index][type] = value;
        },
        addEducationHistory: (state) => {
            state.educationHistory.push({
                from: '',
                to: '',
                content: '',
            })
        },
        removeEducationHistory: (state, action) => {
            state.educationHistory = state.educationHistory.filter((language, index) => {
                return index != action.payload.index
            });
        },
        setIsDisplay: (state, action) => {
            state.isDisplay = action.payload.isDisplay
        }
    },
})

// Action creators are generated for each case reducer function
export const { setEducationHistory, addEducationHistory, removeEducationHistory, setIsDisplay } = educationHistory.actions

export default educationHistory.reducer