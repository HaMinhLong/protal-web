// THIRD IMPORT
import { Autocomplete, TextField } from "@mui/material";

// TYPES IMPORT
import { Status } from "types/status";

const dataSelect: Status[] = [
  {
    value: true,
    label: "Kích hoạt",
  },
  {
    value: false,
    label: "Bị ẩn",
  },
];

interface Props {
  formik: any;
  setFieldValue: any;
}

const VisibleHomeSelect = ({ formik, setFieldValue }: Props) => {
  return (
    <>
      <Autocomplete
        fullWidth
        size="small"
        disablePortal
        disableClearable
        id="combo-box-demo"
        value={
          dataSelect?.filter((item) => item.value === formik?.values?.isHome)[0]
        }
        options={dataSelect}
        renderInput={(params) => (
          <TextField {...params} label="Hiển thị ở trang chủ" />
        )}
        onChange={(e, isHome) => setFieldValue("isHome", isHome?.value)}
      />
    </>
  );
};

export default VisibleHomeSelect;
