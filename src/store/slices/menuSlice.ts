import { Menus } from "@/types/menuType";
import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
  item: Menus[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: MenuState = {
  item: [],
  isLoading: false,
  error: null,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenus: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { setMenus } = menuSlice.actions;

export default menuSlice.reducer;
