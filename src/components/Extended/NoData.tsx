// THIRD IMPORT
import { useTheme } from '@mui/material/styles';
import BrowserNotSupportedOutlinedIcon from '@mui/icons-material/BrowserNotSupportedOutlined';

// PROJECT IMPORT

const NoData = () => {
  const theme = useTheme();
  return (
    <div className="noData">
      <BrowserNotSupportedOutlinedIcon sx={{ mr: 1, color: theme.palette.primary.dark }} />
      <p style={{ fontSize: '14px' }}>Không có bản ghi nào được hiển thị</p>
    </div>
  );
};

export default NoData;
