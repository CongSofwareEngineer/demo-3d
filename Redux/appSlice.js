import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
export const initialState = {
  modal: {
    body: null,
    width: '500px',
    className: '',
    header: true,
    footer: false,
    maskClose: false,
    onCancel: () => {},
    closeIcon: true,
    title: '',
    option: {},
    open: false
  },
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
