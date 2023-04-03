import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/general';
import contractReducer from './slices/contract';
import settingsReducer from './slices/settings';
import languagesReducer from './slices/languages';
import personalInforReducer from './slices/personal_infor';
import educationHistoryReducer from './slices/education_history';
import employmentHistoryReducer from './slices/employment_history';

export const store = configureStore({
    reducer: {
        general: generalReducer,
        contract: contractReducer,
        settings: settingsReducer,
        languages: languagesReducer,
        personalInfor: personalInforReducer,
        educationHistory: educationHistoryReducer,
        employmentHistory: employmentHistoryReducer,
    },
})