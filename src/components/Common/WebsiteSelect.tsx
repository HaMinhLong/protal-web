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

const WebsiteSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: "website/fetchLazyLoading",
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
                (item) => item.value === formik?.values?.websiteId
              )[0]
            : { value: "", label: "" }
        }
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="websiteId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Website <span> *</span>
                </span>
              ) : (
                "Website"
              )
            }
            error={
              formik.touched.websiteId && Boolean(formik.errors?.websiteId)
            }
          />
        )}
        onChange={(e, data) => setFieldValue("websiteId", data?.value)}
      />
      {formik.touched.websiteId && formik.errors.websiteId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.websiteId}
        </FormHelperText>
      )}
    </>
  );
};

export default WebsiteSelect;
