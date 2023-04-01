import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isDisplay: true,
    languages: []
}

export const languages = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            const {index, name, level} = action.payload;
            if (name) {
                state.languages[index]['name'] = name;
            }
            if (level) {
                state.languages[index]['level'] = level;
            }
        },
        addLanguage: (state) => {
            state.languages.push({
                name: '',
                level: 'Beginners',
            })
        },
        removeLanguage: (state, action) => {
            state.languages = state.languages.filter((language, index) => {
                return index != action.payload.index
            });
        },
        setIsDisplay: (state, action) => {
            state.isDisplay = action.payload.isDisplay
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLanguage, addLanguage, removeLanguage, setIsDisplay } = languages.actions

export default languages.reducer