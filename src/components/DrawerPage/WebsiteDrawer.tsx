// THIRD IMPORT
import React, { useState } from "react";
import {
  Drawer,
  Box,
  useMediaQuery,
  Grid,
  TextField,
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
import StatusFilter from "components/Common/StatusFilter";
import { useDispatch } from "app/store";
import createNotification from "components/Extended/Notification";
import WebsiteGroupSelect from "components/Common/WebsiteGroupSelect";
import UploadImage from "components/Extended/UploadImage";

// TYPES IMPORT
import { WebsiteType, ResponseError } from "types/website";

interface Props {
  visible: boolean;
  dataEdit: WebsiteType;
  closeDrawer: () => void;
  getList: () => void;
}

const WebsiteDrawer = ({ visible, closeDrawer, dataEdit, getList }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ResponseError>({});

  const validationSchema = yup.object().shape({
    name: yup.string().trim().max(50).required("Vui lòng nhập tên website"),
    description: yup.string().trim().max(255),
    websiteGroupId: yup.string().required("Vui lòng chọn nhóm website"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: dataEdit?.name || "",
      description: dataEdit?.description || "",
      logo: dataEdit?.logo || "",
      websiteGroupId: dataEdit?.websiteGroupId || "",
      status: dataEdit?.status === 0 ? 0 : 1,
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
      name: values?.name?.trim(),
      nameOld: dataEdit?.name?.trim(),
    };

    const addItemFormData = new FormData();
    addItemFormData.append("name", addItem.name);
    addItemFormData.append("nameOld", addItem.nameOld);
    addItemFormData.append("description", addItem.description);
    addItemFormData.append("logo", addItem.logo);
    addItemFormData.append("websiteGroupId", addItem.websiteGroupId);
    addItemFormData.append("status", addItem.status);

    if (dataEdit?.id) {
      dispatch({
        type: "website/update",
        payload: {
          id: dataEdit?.id,
          params: addItemFormData,
        },
        callback: (res) => {
          if (res?.success) {
            createNotification("success", "Thêm mới website thành công!");
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
        type: "website/add",
        payload: addItemFormData,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification("success", "Thêm mới website thành công!");
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
            {dataEdit?.id
              ? `Cập nhật thông tin ${dataEdit?.name}`
              : "Thêm mới website"}
            <Divider sx={{ mt: 1 }} />
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <UploadImage
              image={
                formik.values.logo
                  ? `${process.env.REACT_APP_SERVER}${formik.values.logo}`
                  : ""
              }
              setFieldValue={formik.setFieldValue}
              field="logo"
            />
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={
                    <span
                      style={{
                        fontSize: "14px",
                        position: "relative",
                        top: "-3px",
                      }}
                    >
                      <span style={{ color: "#f44336" }}>*</span> Tên nhóm
                      website
                    </span>
                  }
                  id="name"
                  name="name"
                  size="small"
                  value={formik?.values?.name}
                  onChange={formik.handleChange}
                  error={
                    (formik?.touched?.name && Boolean(formik?.errors?.name)) ||
                    Boolean(errors?.name)
                  }
                  helperText={
                    (formik?.touched?.name && formik?.errors?.name) ||
                    errors?.name
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Mô tả"
                  id="description"
                  name="description"
                  size="small"
                  value={formik?.values?.description}
                  onChange={formik.handleChange}
                  error={
                    formik?.touched?.description &&
                    Boolean(formik?.errors?.description)
                  }
                  helperText={
                    formik?.touched?.description && formik?.errors?.description
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <WebsiteGroupSelect
                  formik={formik}
                  setFieldValue={formik.setFieldValue}
                  addOrEdit={true}
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

export default WebsiteDrawer;
