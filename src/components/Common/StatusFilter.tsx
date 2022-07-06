// THIRD IMPORT
import { Autocomplete, TextField } from "@mui/material";

// PROJECT IMPORT
import SortStatus from "components/Common/SortStatus";

// TYPES IMPORT

interface Props {
  formik: any;
  setFieldValue: any;
}

const StatusFilter = ({ formik, setFieldValue }: Props) => {
  return (
    <>
      <Autocomplete
        fullWidth
        size="small"
        disablePortal
        id="combo-box-demo"
        value={
          SortStatus?.filter((item) => item.value === formik?.values?.status)[0]
        }
        options={SortStatus}
        renderInput={(params) => <TextField {...params} label="Trạng thái" />}
        onChange={(e, status) => setFieldValue("status", status?.value)}
      />
    </>
  );
};

export default StatusFilter;
