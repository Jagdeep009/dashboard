import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: true,
    userData: {name: "jagdeep mahala", email: "jagdeep.send@gmail.com", phone: '99999999', username: "Jacky"}
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state,action) => {
            state.status = true,
            state.userData = action.payload.userData
        },
        logout: (state) =>{
            state.status = false,
            state.userData = []
        }
    }
})

export const {login,logout} = authSlice.actions;
export default authSlice.reducer;