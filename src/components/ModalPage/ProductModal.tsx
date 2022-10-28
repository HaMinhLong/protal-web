/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";

// ICONS IMPORT
import SaveIcon from "@mui/icons-material/Save";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

// PROJECT IMPORT
import DialogPopUp from "components/Extended/DialogPopUp";
import { useDispatch } from "app/store";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import Loading from "components/Extended/Loading";
import WebsiteSelect from "components/Common/WebsiteSelect";
import CategorySelect from "components/Common/CategorySelect";
import CkEditor from "components/Extended/CkEditor";
import { removeVietnameseTones } from "utils/utils";
import TabWrapper from "components/Extended/TabWrapper";
import ProducerSelect from "components/Common/ProducerSelect";
import SupplierSelect from "components/Common/SupplierSelect";

// TYPES IMPORT
import { ProductType, ResponseError } from "types/product";
import UploadImage from "components/Extended/UploadImage";

interface Props {
  open: boolean;
  dataEdit: ProductType;
  handleClose: () => void;
  getList: () => void;
}

const ProductModal = ({ open, dataEdit, handleClose, getList }: Props) => {
  const dispatch = useDispatch();

  const [dataProduct, setDataProduct] = useState<ProductType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ResponseError>({});

  useEffect(() => {
    if (!open) return;
    if (!dataEdit?.id) {
      setDataProduct({});
    } else {
      setLoading(true);
      dispatch({
        type: "product/getOne",
        payload: {
          id: dataEdit?.id,
        },
        callback: (res) => {
          setLoading(false);
          if (res?.success === true) {
            const {
              results: { list },
            } = res;
            setDataProduct(list);
          } else if (res?.success === false) {
            createNotification("error", res?.message);
          }
        },
      });
    }
  }, [open]);

  const validationSchema = yup.object().shape({
    name: yup.string().trim().max(254).required("Vui lòng nhập tên sản phẩm"),
    url: yup.string().trim().max(254).required("Vui lòng nhập url"),
    description: yup.string().trim().max(1000),
    author: yup.string().trim().max(254),
    source: yup.string().trim().max(254),
    label: yup.string().trim().max(254),
    websiteId: yup.string().required("Vui lòng chọn website"),
    categoryId: yup.string().required("Vui lòng chọn chuyên mục"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: dataProduct?.name || "",
      url: dataProduct?.url || "",
      price: dataProduct?.price || 0,
      negotiablePrice: dataProduct?.negotiablePrice || 0,
      description: dataProduct?.description || "",
      content: dataProduct?.content || "",
      images: dataProduct?.images || "",
      websiteId: dataProduct?.websiteId || "",
      categoryId: dataProduct?.categoryId || "",
      producerId: dataProduct?.producerId || "",
      supplierId: dataProduct?.supplierId || "",
      categoryName: dataProduct?.category?.text || "",
      status: dataProduct?.status === 0 ? 0 : 1,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: ProductType) => {
    setLoading(true);
    const addItem = {
      ...values,
      name: values?.name?.trim(),
      nameOld: dataProduct?.name?.trim(),
    };

    if (dataProduct?.id) {
      dispatch({
        type: "product/update",
        payload: {
          id: dataProduct?.id,
          params: addItem,
        },
        callback: (res) => {
          if (res?.success) {
            createNotification("success", res?.message);
            getList();
            handleClose();
          } else {
            setErrors(res.error);
            createNotification("error", res.message);
          }
          setLoading(false);
        },
      });
    } else {
      dispatch({
        type: "product/add",
        payload: addItem,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification("success", res?.message);
            getList();
            handleClose();
          } else {
            setErrors(res.error);
            createNotification("error", res.message);
          }
        },
      });
    }
  };

  const convertTitleToUrl = (value: string) => {
    const noTones = removeVietnameseTones(value);
    const url = noTones?.split(" ")?.join("-")?.toLowerCase();
    formik.setFieldValue("url", url);
  };

  const closePopUp = () => {
    handleClose();
    formik.resetForm();
    formik.setTouched({}, false);
    setErrors({});
  };

  const tabWrapper = [
    {
      value: 0,
      label: "Thông tin cơ bản",
      tab: (
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={4}>
            <TextFieldCustom
              name="name"
              formik={formik}
              errors={errors}
              required
              label="Tên sản phẩm"
              handleChange={(value) => {
                convertTitleToUrl(value);
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextFieldCustom
              name="url"
              formik={formik}
              errors={errors}
              required
              label="Đường dẫn"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <ProducerSelect
              formik={formik}
              setFieldValue={formik.setFieldValue}
              addOrEdit={true}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <WebsiteSelect
              formik={formik}
              setFieldValue={formik.setFieldValue}
              addOrEdit={true}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <CategorySelect
              formik={formik}
              setFieldValue={formik.setFieldValue}
              addOrEdit={true}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <SupplierSelect
              formik={formik}
              setFieldValue={formik.setFieldValue}
              addOrEdit={true}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextFieldCustom
              name="price"
              formik={formik}
              errors={errors}
              label="Giá"
              type="number"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextFieldCustom
              name="negotiablePrice"
              formik={formik}
              errors={errors}
              label="Giá thỏa thuận"
              type="number"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <StatusFilter
              addOrEdit={false}
              formik={formik}
              setFieldValue={formik.setFieldValue}
            />
          </Grid>

          <Grid item xs={12} md={12} lg={8}>
            <TextFieldCustom
              name="description"
              formik={formik}
              errors={errors}
              label="Nội dung ngắn"
              multiline
              rows={6}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <UploadImage
              image={formik.values.images}
              setFieldValue={formik.setFieldValue}
              field="images"
              multiple
            />
          </Grid>
        </Grid>
      ),
    },
    {
      value: 1,
      label: "Nội dung",
      tab: (
        <CkEditor
          handleChange={(data) => {
            formik?.setFieldValue("content", data);
          }}
          data={formik?.values?.content}
        />
      ),
    },
  ];

  return (
    <DialogPopUp
      open={open}
      title={
        dataProduct?.id
          ? `Cập nhật thông tin ${dataProduct?.name}`
          : "Thêm mới sản phẩm"
      }
      handleClose={() => {
        closePopUp();
      }}
      styleBox={{ minWidth: "1300px", minHeight: "700px" }}
      styleChildBox={{ p: "0px 30px 20px" }}
      styleTitle={{ p: "10px 30px" }}
      showButtonCloseDialog
    >
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <TabWrapper tabWrapper={tabWrapper} />
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
              endIcon={<DoDisturbIcon />}
            >
              Hủy
            </Button>
            <Button
              size="small"
              variant="contained"
              type="submit"
              endIcon={<SaveIcon />}
            >
              Lưu lại
            </Button>
          </Box>
        </form>
        {loading && <Loading />}
      </Box>
    </DialogPopUp>
  );
};

export default ProductModal;
