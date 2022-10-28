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

const PaymentMethodSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: "paymentMethod/fetchLazyLoading",
      payload: {
        filter: JSON.stringify({ status: 1 }),
        range: JSON.stringify([0, 50]),
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
                (item) => item.value === formik?.values?.paymentMethodId
              )[0]
            : { value: "", label: "" }
        }
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="paymentMethodId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Phương thức thanh toán <span> *</span>
                </span>
              ) : (
                "Phương thức thanh toán"
              )
            }
            error={
              formik.touched.paymentMethodId &&
              Boolean(formik.errors?.paymentMethodId)
            }
          />
        )}
        onChange={(e, data) => setFieldValue("paymentMethodId", data?.value)}
      />
      {formik.touched.paymentMethodId && formik.errors.paymentMethodId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.paymentMethodId}
        </FormHelperText>
      )}
    </>
  );
};

export default PaymentMethodSelect;
