// THIRD-PARTY
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";

// PROJECT IMPORTS
interface Props {
  name: string | undefined;
  open: boolean;
  handleClose: (status: boolean) => void;
}

export default function AlertDelete({ name, open, handleClose }: Props) {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      keepMounted
      maxWidth="xs"
      aria-labelledby="item-delete-title"
      aria-describedby="item-delete-description"
    >
      {open && (
        <>
          <DialogTitle id="item-delete-title">
            <p>{name} - Bạn có chắc chắn muốn xóa không?</p>
          </DialogTitle>{" "}
          <DialogActions sx={{ mr: 2 }}>
            <Button onClick={() => handleClose(false)} variant="outlined">
              Hủy
            </Button>
            <Button
              variant="contained"
              onClick={() => handleClose(true)}
              autoFocus
            >
              Xóa
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  );
}
