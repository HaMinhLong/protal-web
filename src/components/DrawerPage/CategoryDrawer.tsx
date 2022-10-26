// THIRD IMPORT
import { useEffect, useState } from "react";
import {
  Drawer,
  Box,
  useMediaQuery,
  Grid,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import { NotificationContainer } from "react-notifications";
import LoadingButton from "@mui/lab/LoadingButton";
import * as yup from "yup";

// ICONS IMPORT
import SaveIcon from "@mui/icons-material/Save";

// PROJECT IMPORT
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import { useDispatch } from "app/store";
import createNotification from "components/Extended/Notification";
import WebsiteSelect from "components/Common/WebsiteSelect";
import CategoryGroupSelect from "components/Common/CategoryGroupSelect";
import UploadImage from "components/Extended/UploadImage";

// TYPES IMPORT
import { CategoryType, ResponseError } from "types/category";
import VisibleHomeSelect from "components/Common/VisibleHomeSelect";

interface Props {
  visible: boolean;
  dataEdit: CategoryType;
  closeDrawer: () => void;
  getList: () => void;
  isAddNew: boolean;
}

const CategoryDrawer = ({
  visible,
  closeDrawer,
  dataEdit,
  isAddNew,
  getList,
}: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ResponseError>({});
  const [dataCategory, setDataCategory] = useState<CategoryType>({});

  useEffect(() => {
    if (!visible) return;
    if (!dataEdit?.id) {
      setDataCategory({});
    } else {
      setLoading(true);
      dispatch({
        type: "category/getOne",
        payload: {
          id: dataEdit?.id,
        },
        callback: (res) => {
          setLoading(false);
          if (res?.success === true) {
            const {
              results: { list },
            } = res;
            setDataCategory(list);
          } else if (res?.success === false) {
            createNotification("error", res?.message);
          }
        },
      });
    }
  }, [visible]);

  const validationSchema = yup.object().shape({
    text: yup.string().trim().max(50).required("Vui lòng nhập tên chuyên mục"),
    url: yup.string().trim().max(50).required("Vui lòng nhập URL"),
    description: yup.string().trim().max(255),
    websiteId: yup.string().required("Vui lòng chọn website"),
    categoryGroupId: yup.string().required("Vui lòng chọn nhóm chuyên mục"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      text: !isAddNew && dataCategory?.text ? dataCategory?.text : "",
      description:
        !isAddNew && dataCategory?.description ? dataCategory?.description : "",
      url: !isAddNew && dataCategory?.url ? dataCategory?.url : "",
      position: isAddNew ? 1 : dataCategory?.position,
      parent: isAddNew ? dataEdit?.id || 0 : dataCategory?.parent,
      isHome: isAddNew ? false : dataCategory?.isHome,
      images: !isAddNew && dataCategory?.images ? dataCategory?.images : "",
      websiteId:
        !isAddNew && dataCategory?.websiteId ? dataCategory?.websiteId : "",
      categoryGroupId:
        !isAddNew && dataCategory?.categoryGroupId
          ? dataCategory?.categoryGroupId
          : "",
      droppable: true,
      status: dataCategory?.status === 0 ? 0 : 1,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: any) => {
    setLoading(true);
    const addItem = {
      ...values,
      text: values?.text?.trim(),
      textOld: dataCategory?.text?.trim(),
    };

    if (dataCategory?.id) {
      dispatch({
        type: "category/update",
        payload: {
          id: dataCategory?.id,
          params: addItem,
        },
        callback: (res) => {
          if (res?.success) {
            createNotification("success", res?.message);
            getList();
            changeDrawer();
          } else {
            setErrors(res.error);
            createNotification("error", res.message);
          }
          setLoading(false);
        },
      });
    } else {
      dispatch({
        type: "category/add",
        payload: addItem,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification("success", res?.message);
            getList();
            changeDrawer();
          } else {
            setErrors(res.error);
            createNotification("error", res.message);
          }
        },
      });
    }
  };

  const changeDrawer = () => {
    closeDrawer();
    formik.resetForm();
    formik.setTouched({}, false);
    setErrors({});
  };

  return (
    <>
      <Drawer anchor={"right"} open={visible} onClose={changeDrawer}>
        <Box
          sx={{
            width: matchDownSM ? "100%" : "400px",
            p: 2,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            {dataCategory?.id
              ? `Cập nhật thông tin ${dataCategory?.text}`
              : "Thêm mới chuyên mục"}
            <Divider sx={{ mt: 1 }} />
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <UploadImage
              image={formik.values.images}
              setFieldValue={formik.setFieldValue}
              field="images"
              multiple
            />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldCustom
                  name="text"
                  formik={formik}
                  errors={errors}
                  label="Tên chuyên mục"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextFieldCustom
                  name="url"
                  formik={formik}
                  errors={errors}
                  label="URL"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <WebsiteSelect
                  formik={formik}
                  setFieldValue={formik.setFieldValue}
                  addOrEdit={true}
                />
              </Grid>

              <Grid item xs={12}>
                <CategoryGroupSelect
                  formik={formik}
                  setFieldValue={formik.setFieldValue}
                  addOrEdit={true}
                />
              </Grid>

              <Grid item xs={12}>
                <VisibleHomeSelect
                  formik={formik}
                  setFieldValue={formik.setFieldValue}
                />
              </Grid>

              <Grid item xs={12}>
                <TextFieldCustom
                  name="description"
                  formik={formik}
                  errors={errors}
                  label="Mô tả"
                  multiline
                  rows={3}
                />
              </Grid>

              <Grid item xs={12}>
                <StatusFilter
                  addOrEdit={true}
                  formik={formik}
                  setFieldValue={formik.setFieldValue}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <LoadingButton
                size="small"
                loading={loading}
                variant="contained"
                type="submit"
                endIcon={<SaveIcon />}
              >
                Lưu lại
              </LoadingButton>
            </Grid>
          </form>
        </Box>
      </Drawer>
      <NotificationContainer />
    </>
  );
};

export default CategoryDrawer;
