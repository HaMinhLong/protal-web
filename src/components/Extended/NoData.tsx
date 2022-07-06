import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// PROJECT IMPORT
import NoDataImg from "assets/images/page/nodata.png";

const NoData = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div className="noData">
      <img
        src={NoDataImg}
        alt="NoDataImg"
        style={{ marginRight: matchDownSM ? 8 : 16 }}
      />
      <p>Không có bản ghi nào được hiển thị</p>
    </div>
  );
};

export default NoData;
