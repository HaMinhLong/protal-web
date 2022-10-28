// THIRD IMPORT
import { useState, useEffect } from "react";
import { TextField, Autocomplete, FormHelperText } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

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
      payload: {
        filter: JSON.stringify({ status: 1 }),
        range: JSON.stringify([0, 20]),
      },
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

  return (
    <>
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
                <span className="input-label">
                  Nhóm website <span> *</span>
                </span>
              ) : (
                "Nhóm website"
              )
            }
            error={
              formik.touched.websiteGroupId &&
              Boolean(formik.errors?.websiteGroupId)
            }
          />
        )}
        onChange={(e, data) => setFieldValue("websiteGroupId", data?.value)}
      />
      {formik.touched.websiteGroupId && formik.errors.websiteGroupId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.websiteGroupId}
        </FormHelperText>
      )}
    </>
  );
};

export default WebsiteGroupSelect;
