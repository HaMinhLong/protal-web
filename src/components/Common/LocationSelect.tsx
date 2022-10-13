// THIRD IMPORT
import { Autocomplete, TextField } from "@mui/material";

// PROJECT IMPORTS
import { Status } from "types/status";

// TYPES IMPORT

interface Props {
  formik: any;
  setFieldValue: any;
  addOrEdit: boolean;
}

const LocationAll: Status[] = [
  {
    value: 1,
    label: "Menu Top",
  },
  {
    value: 2,
    label: "Menu Bottom",
  },
];

const LocationSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  return (
    <>
      <Autocomplete
        fullWidth
        size="small"
        disablePortal
        disableClearable
        id="combo-box-demo"
        value={
          LocationAll?.filter(
            (item) => item.value === formik?.values?.status
          )[0]
        }
        options={
          addOrEdit
            ? LocationAll.filter((item) => item.value !== "")
            : LocationAll
        }
        renderInput={(params) => <TextField {...params} label="Vị trí menu" />}
        onChange={(e, status) => setFieldValue("location", status?.value)}
      />
    </>
  );
};

export default LocationSelect;
