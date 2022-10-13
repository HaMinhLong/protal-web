/* eslint-disable react-hooks/exhaustive-deps */
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
import LocationSelect from "components/Common/LocationSelect";
import WebsiteSelect from "components/Common/WebsiteSelect";

// TYPES IMPORT
import { MenuType, ResponseError } from "types/menuWebsite";

interface Props {
  visible: boolean;
  dataEdit: MenuType;
  closeDrawer: () => void;
  isAddNew: boolean;
  getList: () => void;
}

const WebsiteGroupDrawer = ({
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
  const [dataMenu, setDataMenu] = useState<MenuType>({});

  useEffect(() => {
    if (!visible) return;
    if (!dataEdit?.id) {
      setDataMenu({});
    } else {
      setLoading(true);
      dispatch({
        type: "menuWebsite/getOne",
        payload: {
          id: dataEdit?.id,
        },
        callback: (res) => {
          setLoading(false);
          if (res?.success === true) {
            const {
              results: { list },
            } = res;
            setDataMenu(list);
          } else if (res?.success === false) {
            createNotification("error", res?.message);
          }
        },
      });
    }
  }, [visible]);

  const validationSchema = yup.object().shape({
    text: yup.string().trim().max(50).required("Vui lòng nhập tên menu"),
    url: yup.string().trim().max(50).required("Vui lòng nhập URL"),
    icon: yup.string().trim().max(50).required("Vui lòng nhập icon"),
    location: yup.string().required("Vui lòng chọn vị trí menu"),
    status: yup.string().trim().required("Vui lòng nhập trạng thái"),
    websiteId: yup.string().required("Vui lòng chọn website"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      text: !isAddNew && dataMenu?.text ? dataMenu?.text : "",
      url: !isAddNew && dataMenu?.url ? dataMenu?.url : "",
      icon: !isAddNew && dataMenu?.icon ? dataMenu?.icon : "",
      position: isAddNew ? 1 : dataMenu?.position,
      location: isAddNew ? 1 : dataMenu?.location,
      websiteId: !isAddNew && dataMenu?.websiteId ? dataMenu?.websiteId : "",
      parent: isAddNew ? dataEdit?.id || 0 : dataMenu?.parent,
      droppable: true,
      status: dataMenu?.status === 0 ? 0 : 1,
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
      textOld: dataMenu?.text?.trim(),
      url: values?.url?.trim(),
      icon: values?.icon?.trim(),
    };

    if (dataMenu?.id && !isAddNew) {
      dispatch({
        type: "menuWebsite/update",
        payload: {
          id: dataMenu?.id,
          params: {
            ...addItem,
          },
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
        type: "menuWebsite/add",
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
            {dataMenu?.id && !isAddNew
              ? `Cập nhật thông tin ${dataMenu?.text}`
              : "Thêm mới menu website"}
            <Divider sx={{ mt: 1 }} />
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldCustom
                  name="text"
                  formik={formik}
                  errors={errors}
                  label="Tên menu"
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
                <TextFieldCustom
                  name="icon"
                  formik={formik}
                  errors={errors}
                  label="Icon"
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <WebsiteSelect
                  formik={formik}
                  setFieldValue={formik.setFieldValue}
                  addOrEdit={false}
                />
              </Grid>

              <Grid item xs={12}>
                <LocationSelect
                  formik={formik}
                  setFieldValue={formik.setFieldValue}
                  addOrEdit={false}
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

export default WebsiteGroupDrawer;
