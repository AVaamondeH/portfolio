import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    language: "english",
}

export const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        language: (state, action) => {
            state.language = action.payload
        },
    },
})

export const { language } = languageSlice.actions
export default languageSlice.reducer
export const changeLanguage = (data) => async (dispatch) => {
    localStorage.setItem("language", data)
    dispatch(language(data));
};