import { configureStore } from '@reduxjs/toolkit';
import savedConvertionsSlice from './slices/SavedConvertionsSlice';

export const store = configureStore({
    reducer: {
        savedConvertions: savedConvertionsSlice
    }
})

