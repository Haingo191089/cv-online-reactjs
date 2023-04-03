import { createSlice } from '@reduxjs/toolkit';
import * as common from '../../common/js/common';

const initialState = {
    birthday: common.convertDateToString(new Date()),
    placeOfBirth: '',
    gender:'',
    maritalStatus: ''
}

export const personalInfor = createSlice({
    name: 'personal_infor',
    initialState,
    reducers: {
        setPersonalInfor: (state, action) => {
            Object.keys(action.payload).forEach(key => {
                state[key] = action.payload[key];
            });
        },
    },
})

// Action creators are generated for each case reducer function
export const { setPersonalInfor } = personalInfor.actions

export default personalInfor.reducer