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

const CategoryGroupSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: "categoryGroup/fetchLazyLoading",
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
                (item) => item.value === formik?.values?.categoryGroupId
              )[0]
            : { value: "", label: "" }
        }
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="categoryGroupId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Nhóm chuyên mục <span> *</span>
                </span>
              ) : (
                "Nhóm chuyên mục"
              )
            }
            error={
              formik.touched.categoryGroupId &&
              Boolean(formik.errors?.categoryGroupId)
            }
          />
        )}
        onChange={(e, data) => setFieldValue("categoryGroupId", data?.value)}
      />
      {formik.touched.categoryGroupId && formik.errors.categoryGroupId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.categoryGroupId}
        </FormHelperText>
      )}
    </>
  );
};

export default CategoryGroupSelect;
