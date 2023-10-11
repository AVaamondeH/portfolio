import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: "",
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        theme: (state, action) => {
            state.theme = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { theme } = counterSlice.actions
export default counterSlice.reducer
export const changeTheme = (data) => async (dispatch) => {
        dispatch(theme(data));
};