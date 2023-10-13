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

export const themeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        theme: (state, action) => {
            state.theme = action.payload
        },
    },
})

export const { theme } = themeSlice.actions
export default themeSlice.reducer
export const changeTheme = (data) => async (dispatch) => {
    localStorage.setItem("theme", data)
    dispatch(theme(data));
};