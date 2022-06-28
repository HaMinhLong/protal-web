// THIRD-PARTY
import { createSlice } from "@reduxjs/toolkit";

// PROJECT IMPORTS
import { MenuProps } from "types/menu";

const initialState: MenuProps = {
  openItem: ["dashboard"],
  drawerOpen: false,
  randomNumber: 0,
};

const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    activeItem(state: MenuProps, action: any) {
      state.openItem = action.payload;
      state.randomNumber = Math.floor(Math.random() * 1000);
    },

    openDrawer(state: MenuProps, action: any) {
      state.drawerOpen = action.payload;
    },
  },
});

export default menu.reducer;

export const { activeItem, openDrawer } = menu.actions;
