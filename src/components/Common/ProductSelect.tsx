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
  handleChange?: (value: any) => void;
  websiteId?: number | string;
}

const ProductSelect = ({
  formik,
  setFieldValue,
  addOrEdit,
  handleChange,
  websiteId,
}: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: "product/fetchLazyLoading",
      payload: {
        filter: JSON.stringify({ status: 1, websiteId: websiteId }),
        range: JSON.stringify([0, 50]),
      },
      callback: (res) => {
        const { list } = res?.results;
        const dataSelect = list?.map((item) => {
          return {
            price: item.price,
            negotiablePrice: item.negotiablePrice,
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
                (item) => item.value === formik?.values?.productId
              )[0]
            : { value: "", label: "" }
        }
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="productId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Sản phẩm <span> *</span>
                </span>
              ) : (
                "Sản phẩm"
              )
            }
            error={
              formik.touched.productId && Boolean(formik.errors?.productId)
            }
          />
        )}
        onChange={(e, data) => {
          if (handleChange) handleChange(data);
          setFieldValue("productId", data?.value);
        }}
      />
      {formik.touched.productId && formik.errors.productId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.productId}
        </FormHelperText>
      )}
    </>
  );
};

export default ProductSelect;
