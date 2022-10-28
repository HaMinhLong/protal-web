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

const SupplierSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: "supplier/fetchLazyLoading",
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
                (item) => item.value === formik?.values?.supplierId
              )[0]
            : { value: "", label: "" }
        }
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="supplierId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Nhà cung cấp <span> *</span>
                </span>
              ) : (
                "Nhà cung cấp"
              )
            }
            error={
              formik.touched.supplierId && Boolean(formik.errors?.supplierId)
            }
          />
        )}
        onChange={(e, data) => setFieldValue("supplierId", data?.value)}
      />
      {formik.touched.supplierId && formik.errors.supplierId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.supplierId}
        </FormHelperText>
      )}
    </>
  );
};

export default SupplierSelect;
