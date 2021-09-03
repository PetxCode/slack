import { createSlice } from '@reduxjs/toolkit'

const initialState = {
roomID: null
}

const appCounter = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    enterRoom: (state, {payload}) => {
      state.roomID = payload.roomID
    }
  }
});

export const {
enterRoom
} = appCounter.actions

export const selectRoom =state => state.appSlice.roomID;
export default appCounter.reducer