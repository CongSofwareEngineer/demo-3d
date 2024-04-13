import { LOCALE_DATA, LOCALE_KEY } from '@/config/app'
import { createSlice } from '@reduxjs/toolkit'
export const initialState = {
  modal: null,

  local: LOCALE_KEY.VN,
  language: LOCALE_DATA[LOCALE_KEY.VN],
  loadingRoutePage: false,
  banner2: {
    hoverGameArt: false
  },
  userAmin: null

}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setModal: (state, action) => {
      if (action.payload === null && state.modal?.afterClose) {
        state.modal?.afterClose()
      }
      state.modal = action.payload
    },
    setEventBanner: (state, action) => {
      state.banner2 = action.payload
    },
    setUserAdmin: (state, action) => {
      state.userAmin = action.userAmin
    },
    setLanguage: (state, action) => {
      if (!action?.payload) {
        state.language = LOCALE_DATA[state.local]
      } else {
        state.language = LOCALE_DATA[action.payload]
        state.local = action.payload
      }
    }
  }
})
export const {
  setModal,
  setLanguage,
  setUserAdmin
} = appSlice.actions
export default appSlice.reducer
