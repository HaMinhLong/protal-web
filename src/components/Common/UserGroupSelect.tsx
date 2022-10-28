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

const UserGroupSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: "userGroup/fetchLazyLoading",
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
                (item) => item.value === formik?.values?.userGroupId
              )[0]
            : { value: "", label: "" }
        }
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="userGroupId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Nhóm tài khoản <span> *</span>
                </span>
              ) : (
                "Nhóm tài khoản"
              )
            }
            error={
              formik.touched.userGroupId && Boolean(formik.errors?.userGroupId)
            }
          />
        )}
        onChange={(e, data) => setFieldValue("userGroupId", data?.value)}
      />
      {formik.touched.userGroupId && formik.errors.userGroupId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.userGroupId}
        </FormHelperText>
      )}
    </>
  );
};

export default UserGroupSelect;
