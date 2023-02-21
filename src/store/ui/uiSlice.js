
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState:{
        theme:true //true: dark, false: ligth
    },
    reducers: {
        setTheme: (state) => {
            state.theme = !state.theme
        },
    },
})

export const { setTheme } = uiSlice.actions