/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

// ICONS IMPORT
import SaveIcon from "@mui/icons-material/Save";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

// PROJECT IMPORT
import DialogPopUp from "components/Extended/DialogPopUp";
import createNotification from "components/Extended/Notification";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import ProductSelect from "components/Common/ProductSelect";

// TYPES IMPORT
import { ProductOrderType } from "types/order";

interface Props {
  open: boolean;
  dataEdit: ProductOrderType;
  handleClose: () => void;
  formikProp: any;
}

const initialData: ProductOrderType = {
  id: 0,
  amount: 0,
  price: 0,
  negotiablePrice: 0,
  totalPrice: 0,
  productId: 0,
  productName: "",
  category: "",
  flag: "add",
};

const ProductOrderModal = ({
                             open,
                             dataEdit,
                             handleClose,
                             formikProp,
                           }: Props) => {
  const [dataProductOrder, setDataProductOrder] =
    useState<ProductOrderType>(initialData);

  useEffect(() => {
    if (!open) return;
    setDataProductOrder(dataEdit);
  }, [open]);

  const validationSchema = yup.object().shape({
    productId: yup.string().required("Vui lòng chọn sản phẩm"),
    amount: yup
      .number()
      .min(1, "Vui lòng nhập số lượng lớn hơn 0")
      .required("Vui lòng nhập số lượng"),
    price: yup
      .number()
      .min(1, "Vui lòng nhập giá tiền lớn hơn 0")
      .required("Vui lòng nhập giá tiền"),
    negotiablePrice: yup
      .number()
      .min(1, "Vui lòng nhập giá thỏa thuận lớn hơn 0")
      .required("Vui lòng nhập số lượng"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataProductOrder?.id || 0,
      amount: dataProductOrder?.amount || 0,
      price: dataProductOrder?.price || 0,
      negotiablePrice: dataProductOrder?.negotiablePrice || 0,
      totalPrice: dataProductOrder?.totalPrice || 0,
      flag: dataProductOrder?.flag || "add",
      orderId: dataProductOrder?.orderId || "",
      productId: dataProductOrder?.productId || "",
      productName: dataProductOrder?.productName || "",
      category: dataProductOrder?.category || "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: ProductOrderType) => {
    if (values.id) {
      const newData = formikProp.values?.productOrders?.map((item) => {
        return item.id === values.id ? values : item;
      });

      formikProp.setFieldValue("productOrders", newData);
    } else {
      if (
        formikProp?.values?.productOrders?.find(
          (item) =>
            item.productName === values.productName && item.flag !== "delete"
        ) &&
        !values.id
      ) {
        createNotification(
          "error",
          "Sản phẩm đã được thêm vào giỏ hàng trước đó!"
        );
        return;
      }
      const newData = [
        { ...values, id: Math.floor(Math.random() * 100000) },
      ].concat(formikProp.values?.productOrders);

      formikProp.setFieldValue("productOrders", newData);
    }
    closePopUp();
  };

  const handleChangeTotalPrice = (priceOne: number, priceTwo: number) => {
    formik.setFieldValue("totalPrice", priceOne * priceTwo);
  };

  const closePopUp = () => {
    handleClose();
    formik.resetForm();
    formik.setTouched({}, false);
  };

  return (
    <DialogPopUp
      open={open}
      title={
        dataProductOrder?.id
          ? `Cập nhật thông tin ${dataProductOrder?.productName}`
          : "Thêm mới sản phẩm"
      }
      handleClose={() => {
        closePopUp();
      }}
      styleBox={{ minWidth: "800px", minHeight: "350px" }}
      styleChildBox={{ p: "0px 30px 20px" }}
      styleTitle={{ p: "10px 30px" }}
      showButtonCloseDialog
    >
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6} lg={6}>
              <ProductSelect
                formik={formik}
                setFieldValue={formik.setFieldValue}
                addOrEdit={false}
                handleChange={(value) => {
                  formik.setFieldValue("productId", value.value || "");
                  formik.setFieldValue("productName", value.label || "");
                  formik.setFieldValue("price", value.price || 0);
                  formik.setFieldValue(
                    "negotiablePrice",
                    value.negotiablePrice || 0
                  );
                }}
                websiteId={formikProp?.values?.websiteId}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom
                name="category"
                formik={formik}
                required
                label="Loại sản phẩm"
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom
                name="amount"
                formik={formik}
                required
                label="Số lượng"
                type="number"
                handleChange={(value) =>
                  handleChangeTotalPrice(
                    Number(value),
                    formik?.values?.negotiablePrice
                  )
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom
                name="price"
                formik={formik}
                required
                label="Giá tiền"
                type="number"
                readOnly
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom
                name="negotiablePrice"
                formik={formik}
                required
                label="Giá thỏa thuân"
                type="number"
                handleChange={(value) =>
                  handleChangeTotalPrice(
                    Number(value),
                    formik?.values?.negotiablePrice
                  )
                }
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom
                name="totalPrice"
                formik={formik}
                required
                label="Tổng tiền"
                readOnly
              />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => closePopUp()}
              size="small"
              variant="outlined"
              sx={{ mr: "10px" }}
              endIcon={<DoDisturbIcon/>}
            >
              Hủy
            </Button>
            <Button
              size="small"
              variant="contained"
              type="submit"
              endIcon={<SaveIcon/>}
            >
              Lưu lại
            </Button>
          </Box>
        </form>
      </Box>
    </DialogPopUp>
  );
};

export default ProductOrderModal;
