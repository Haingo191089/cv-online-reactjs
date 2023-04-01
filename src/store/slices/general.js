import { createSlice } from '@reduxjs/toolkit';

import defaultAvatar from '../../images/default_avatar.png';

const initialState = {
    name: 'hai',
    jobTitle: 'fullstack',
    avatar: defaultAvatar,
}

export const general = createSlice({
    name: 'general',
    initialState,
    reducers: {
        setGeneral: (state, action) => {
            Object.keys(action.payload).forEach(key => {
                state[key] = action.payload[key];
            });
        }
    },
})

// Action creators are generated for each case reducer function
export const { setGeneral } = general.actions

export default general.reducer