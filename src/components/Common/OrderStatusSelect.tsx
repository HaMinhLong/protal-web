// THIRD IMPORT
import { Autocomplete, TextField } from "@mui/material";

// PROJECT IMPORTS
import { Status } from "types/status";

const SortStatus: Status[] = [
  {
    value: 1,
    label: "Đặt đơn hàng thành công",
  },
  {
    value: 2,
    label: "Tiếp nhận đơn hàng",
  },
  {
    value: 3,
    label: "Đóng gói đơn hàng",
  },
  {
    value: 4,
    label: "Vận chuyển đơn hàng",
  },
  {
    value: 5,
    label: "Giao hàng thành công",
  },
];

interface Props {
  formik: any;
  setFieldValue: any;
  addOrEdit: boolean;
}

const StatusFilter = ({ formik, setFieldValue, addOrEdit }: Props) => {
  return (
    <>
      <Autocomplete
        fullWidth
        size="small"
        disablePortal
        disableClearable
        id="combo-box-demo"
        value={
          SortStatus?.filter((item) => item.value === formik?.values?.status)[0]
        }
        options={
          addOrEdit
            ? SortStatus.filter((item) => item.value !== "")
            : SortStatus
        }
        renderInput={(params) => (
          <TextField {...params} label="Trạng thái đơn hàng" />
        )}
        onChange={(e, status) => setFieldValue("status", status?.value)}
      />
    </>
  );
};

export default StatusFilter;
