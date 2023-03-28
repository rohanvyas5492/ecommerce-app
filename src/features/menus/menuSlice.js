import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isUserOpen:false,
    isSidebarOpen:false,
    isSearchOpen:false,
}

const menuSlice = createSlice({
    name:'menus',
    initialState,
    reducers:{
        openSidebar(state){
            state.isSidebarOpen = !state.isSidebarOpen
        },
        openSearch(state){
            state.isSearchOpen = !state.isSearchOpen
        },
        openUser(state){
            state.isUserOpen = !state.isUserOpen
        },
    },
})

export const {openSidebar,openSearch,openUser} = menuSlice.actions;
export default menuSlice.reducer