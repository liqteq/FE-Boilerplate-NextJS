import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    signUp: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            let { payload } = action;
            state.currentUser = payload
        },
        logout: (state) => {
            state.currentUser = null
        },
        signUp: (state, action) => {
            let { step } = action.payload;
            switch (step) {
                case 1:
                    state.signUp.credentials = action.payload
                    break;
                case 2:
                    state.signUp.dob = action.payload
                    break;
                default:
                    state.signUp.phoneNumber = action.payload
            }
        },
        clearAuth: (state, action) => {
            let { number } = action.payload;
            if (number === 1)
                state.signUp = null
            if (number === 2)
                state.currentUser = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer