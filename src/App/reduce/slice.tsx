import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  api: []
}

export const slice: any = createSlice({
  name: 'apiResult',
  initialState,
  reducers: {
    apiAction: (state, action) => {
      state.api = action.payload
    }
  }
});

export const { apiAction } = slice.actions
export default slice.reducer;