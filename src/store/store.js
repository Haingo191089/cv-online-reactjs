import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/general';
import settingsReducer from './slices/settings';
import languagesReducer from './slices/languages';
import personalInforReducer from './slices/personal_infor';

export const store = configureStore({
    reducer: {
        general: generalReducer,
        settings: settingsReducer,
        languages: languagesReducer,
        personalInfor: personalInforReducer,
    },
})