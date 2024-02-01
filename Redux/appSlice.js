import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const initialState = {
  modal: null,
  // userInfo: null,
  // token: null,
  // language: localeVN,
  loadingRoutePage: false
  // amountCart: 0,
  // menuCategory: null,
  // pageActive: '/'
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModal: (state, action) => {
      console.log('====================================')
      console.log('set modal', action.payload)
      console.log('====================================')
      if (action.payload === null && state.modal?.afterClose) {
        state.modal?.afterClose()
      }
      state.modal = action.payload
    }
  }
})
export const {
  setModal
} = appSlice.actions
export default appSlice.reducer
