/* eslint-disable no-nested-ternary */
// THIRD IMPORT
import React from 'react';
import { Dialog, Box, Typography, useMediaQuery, IconButton, DialogContent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  open: boolean;
  title?: string;
  handleClose: () => void;
  children: React.ReactElement;
  styleDialog?: any;
  styleBox?: any;
  styleTitle?: any;
  styleChildBox?: any;
  showButtonCloseDialog?: boolean;
}

const DialogPopUp = ({
  children,
  title,
  open,
  handleClose,
  styleDialog,
  styleBox,
  styleTitle,
  styleChildBox,
  showButtonCloseDialog
}: Props) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      keepMounted
      aria-labelledby="item-delete-title"
      aria-describedby="item-delete-description"
      fullScreen
      sx={{
        // '& .MuiBackdrop-root': { backgroundColor: 'transparent' },
        '&>div:nth-of-type(3)': {
          '&>div': {
            m: 0,
            borderRadius: matchDownSM ? '0px' : '15px',
            width: matchDownSM ? '100%' : 'auto',
            height: matchDownSM ? '100vh' : 'auto',
            background: '#F9FAFB',
            ...styleDialog
          }
        }
      }}
    >
      {open && (
        <Box>
          <DialogContent
            sx={{
              maxHeight: '90vh',
              minHeight: '450px',
              overflowY: 'auto',
              p: '0px',
              position: 'relative',
              width: matchDownSM ? '100%' : matchDownMD ? '750px' : '800px',
              ...styleBox
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                borderBottom: '1px solid #BCC7D2',
                pb: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#F9FAFB',
                zIndex: 9999,
                ...styleTitle
              }}
            >
              <Typography
                sx={{
                  fontSize: '18px',
                  fontWeight: 600,
                  '&:first-letter': { textTransform: 'capitalize' }
                }}
              >
                {title}
              </Typography>
              {showButtonCloseDialog && (
                <IconButton onClick={() => handleClose()} size="small">
                  <ClearIcon fontSize="small" />
                </IconButton>
              )}
            </Box>
            <Box sx={{ ...styleChildBox }} className="box-popup">
              {children}
            </Box>
          </DialogContent>
        </Box>
      )}
    </Dialog>
  );
};

export default DialogPopUp;
