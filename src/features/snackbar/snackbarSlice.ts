// THIRD-PARTY
import { createSlice } from "@reduxjs/toolkit";

// PROJECT IMPORTS
import { SnackbarProps } from "types/snackbar";

const initialState: SnackbarProps = {
  action: false,
  open: false,
  severity: "info",
  message: "Note archived",
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  variant: "default",
  alert: {
    color: "info",
    variant: "filled",
  },
  transition: "Fade",
  close: true,
  actionButton: false,
};

const snackbarSlice = createSlice({
  name: "snackbar",
  initialState,
  reducers: {
    openSnackbar(state, action) {
      const {
        open,
        message,
        anchorOrigin,
        variant,
        alert,
        transition,
        close,
        actionButton,
        severity,
      } = action.payload;

      state.severity = severity;
      state.action = !state.action;
      state.open = open || initialState.open;
      state.message = message || initialState.message;
      state.anchorOrigin = anchorOrigin || initialState.anchorOrigin;
      state.variant = variant || initialState.variant;
      state.alert = {
        color: alert?.color || initialState.alert.color,
        variant: alert?.variant || initialState.alert.variant,
      };
      state.transition = transition || initialState.transition;
      state.close = close === false ? close : initialState.close;
      state.actionButton = actionButton || initialState.actionButton;
    },

    closeSnackbar(state) {
      state.open = false;
    },
  },
});

export default snackbarSlice.reducer;

export const { closeSnackbar, openSnackbar } = snackbarSlice.actions;
