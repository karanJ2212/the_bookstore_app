import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: '',
  },
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
