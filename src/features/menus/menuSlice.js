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
            state.isSidebarOpen = true
        },
        openSearch(state){
            state.isSearchOpen = true
        },
        openUser(state){
            state.isUserOpen = true
        },
        closeSidebar(state){
            state.isSidebarOpen = false
        },
        closeSearch(state){
            state.isSearchOpen = false
        },
        closeUser(state){
            state.isUserOpen = false
        },
    },
})

export const {openSidebar,openSearch,openUser,closeSearch,closeSidebar,closeUser} = menuSlice.actions;
export default menuSlice.reducer