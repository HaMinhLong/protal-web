// THIRD IMPORT
import { useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";

// TYPES IMPORT

// PROJECT IMPORT
import { useDispatch } from "app/store";

interface Props {
  formik: any;
  setFieldValue: any;
  addOrEdit: boolean;
}

const WebsiteGroupSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: "websiteGroup/fetchLazyLoading",
      payload: { filter: JSON.stringify({ status: 1 }) },
      callback: (res) => {
        const { list } = res?.results;
        const dataSelect = list?.map((item) => {
          return {
            value: item.id,
            label: item.name,
          };
        });
        setLists(dataSelect);
      },
    });
  };

  const styleLabel: any = {
    fontSize: "14px",
    position: "relative",
    top: "-3px",
  };

  return (
    <Autocomplete
      fullWidth
      size="small"
      disablePortal
      id="combo-box-demo"
      value={
        lists?.length > 0
          ? lists?.filter(
              (item) => item.value === formik?.values?.websiteGroupId
            )[0]
          : { value: "", label: "" }
      }
      options={lists}
      disableClearable={addOrEdit}
      renderInput={(params) => (
        <TextField
          {...params}
          name="websiteGroupId"
          label={
            addOrEdit ? (
              <span style={styleLabel}>
                <span style={{ color: "#f44336" }}>*</span> Nhóm website
              </span>
            ) : (
              "Nhóm website"
            )
          }
          error={
            formik.touched.websiteGroupId &&
            Boolean(formik.errors?.websiteGroupId)
          }
          helperText={
            formik.touched.websiteGroupId && formik.errors.websiteGroupId
          }
        />
      )}
      onChange={(e, data) => setFieldValue("websiteGroupId", data?.value)}
    />
  );
};

export default WebsiteGroupSelect;
