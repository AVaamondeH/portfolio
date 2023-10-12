import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: "",
    colors: {
        purple: "#8057BF",
        black: "#000",
        white: "#f2f2f2",
        light: "#A395E9",
    }
}
// --first-color: hsl(var(--first-hue), var(--sat), var(--lig)) se traduciría a #438cb5.

// --first-color-alt: hsl(var(--first-hue), var(--sat), 71%) se traduciría a #4088b5.


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