

import { createSlice } from '@reduxjs/toolkit';

export const countrysSlice = createSlice({
    name: 'countrys',
    initialState:{
        isLoading: true,
        isActive:false,
        isSearch:"",
        isSelectedRegion: 'All',
        AllCountrys:[],
        searchCountrys:[],
        countrieActive: null,
    },
    reducers: {
        setLoadingCountrys:(state, {payload}) => {
            state.isLoading= payload;
        },
        setIsSelectRegion:(state, {payload}) =>{
            state.isSelectedRegion = payload
        },
        setAllCountrys:(state, {payload}) => {
            state.AllCountrys = payload;
        },
        setCountrieActive:(state, {payload}) => {
            state.isActive = payload.isActive;
            state.countrieActive = payload.countrieActive;
        },
        setIsSearch: (state, {payload}) => {
            state.isSearch = payload
        },
        setSearchBusqueda: (state, {payload}) => {
            state.searchCountrys = payload
        }
    },
})

export const { 
    setLoadingCountrys,
    setIsSelectRegion,
    setAllCountrys,
    setCountrieActive,
    setIsSearch,
    setSearchBusqueda
} = countrysSlice.actions