import { Scounter } from "@/types/menuCateTypes";
import { createSlice } from "@reduxjs/toolkit";

interface MenuCateState {
  item: Scounter[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: MenuCateState = {
  item: [],
  isLoading: false,
  error: null,
};

export const menuCateSlice = createSlice({
  name: "menuCategory",
  initialState,
  reducers: {
    setMenuCategories: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setMenuCategories } = menuCateSlice.actions;

export default menuCateSlice.reducer;
