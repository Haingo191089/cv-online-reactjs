import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    templateName: 'template1',
}

export const settings = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setTemplateName: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.templateName = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTemplateName } = settings.actions

export default settings.reducer