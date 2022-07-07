// THIRD IMPORT
import React, { useState } from "react";
import {
  Drawer,
  Box,
  useMediaQuery,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import { NotificationContainer } from "react-notifications";
import LoadingButton from "@mui/lab/LoadingButton";
import * as yup from "yup";

// ICONS IMPORT
import SaveIcon from "@mui/icons-material/Save";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// PROJECT IMPORT
import StatusFilter from "components/Common/StatusFilter";
import { useDispatch } from "app/store";
import createNotification from "components/Extended/Notification";
import {
  isEmail,
  isFullName,
  isPhone,
  isUserName,
  passwordRegEx,
} from "utils/regexHelper";
import UserGroupSelect from "components/Common/UserGroupSelect";

// TYPES IMPORT
import { UserType } from "types/user";

interface Props {
  visible: boolean;
  dataEdit: UserType;
  closeDrawer: () => void;
  getList: () => void;
}

const UserDrawer = ({ visible, closeDrawer, dataEdit, getList }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const handleClickShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const validationSchema = yup.object().shape({
    fullName: yup
      .string()
      .trim()
      .min(2, "Vui lòng nhập tối thiểu 2 ký tự")
      .max(50, `Vui lòng nhập tối đa 50 ký tự`)
      .matches(isFullName, "Vui lòng nhập tên theo định dạng [a-z]")
      .required("Vui lòng nhập họ tên"),
    username: yup
      .string()
      .trim()
      .max(50, `Vui lòng nhập tối đa 50 ký tự`)
      .matches(isUserName, "Vui lòng nhập tên theo định dạng [a-z][0-9] và -")
      .required("Vui lòng nhập tên tài khoản"),
    email: yup
      .string()
      .trim()
      .max(50, `Vui lòng nhập tối đa 50 ký tự`)
      .matches(isEmail, "Email is not valid")
      .email("Vui lòng nhập đúng định dạng email")
      .required("Vui lòng nhập email"),
    mobile: yup
      .string()
      .trim()
      .required("Vui lòng nhập số điện thoại")
      .max(12)
      .matches(isPhone, "Vui lòng nhập đúng định dạng số điện thoại"),
    password: yup
      .string()
      .trim()
      .matches(
        passwordRegEx,
        "Vui lòng nhập mật khẩu tối thiểu 6 ký tự và không chứa ký tự đặc biệt"
      )
      .min(6, "Vui lòng nhập tối thiểu 6 ký tự")
      .max(20, "Vui lòng nhập tối đa 20 ký tự")
      .required("Password is required"),
    password_confirmation: yup
      .string()
      .trim()
      .oneOf([yup.ref("password"), null], "Nhập lại mật khẩu chưa chính xác")
      .required("Vui lòng nhập lại mật khẩu"),
    userGroupId: yup.string().required("Vui lòng chọn nhóm tài khoản"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: dataEdit?.username || "",
      password: dataEdit?.id ? "password" : "",
      password_confirmation: dataEdit?.id ? "password" : "",
      fullName: dataEdit?.fullName || "",
      email: dataEdit?.email || "",
      mobile: dataEdit?.mobile || "",
      userGroupId: dataEdit?.userGroupId || "",
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
      fullName: values?.fullName?.trim(),
      username: values?.username?.trim(),
      usernameOld: dataEdit?.username?.trim(),
    };
    if (dataEdit?.id) {
      dispatch({
        type: "user/update",
        payload: {
          id: dataEdit?.id,
          params: {
            ...addItem,
          },
        },
        callback: (res) => {
          if (res?.success) {
            createNotification("success", "Thêm mới tài khoản thành công!");
            getList();
            changeDrawer();
          } else {
            createNotification("error", res.message);
          }
          setLoading(false);
        },
      });
    } else {
      dispatch({
        type: "user/add",
        payload: addItem,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification("success", "Thêm mới tài khoản thành công!");
            getList();
            changeDrawer();
          } else {
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
  };

  const styleLabel: any = {
    fontSize: "14px",
    position: "relative",
    top: "-3px",
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
              ? `Cập nhật thông tin ${dataEdit?.fullName}`
              : "Thêm mới nhóm tài khoản"}
            <Divider sx={{ mt: 1 }} />
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={
                    <span style={styleLabel}>
                      <span style={{ color: "#f44336" }}>*</span> Tài khoản
                    </span>
                  }
                  id="username"
                  name="username"
                  size="small"
                  value={formik?.values?.username}
                  onChange={formik.handleChange}
                  error={
                    formik?.touched?.username &&
                    Boolean(formik?.errors?.username)
                  }
                  helperText={
                    formik?.touched?.username && formik?.errors?.username
                  }
                />
              </Grid>
              {!dataEdit.id && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    type={showPassword ? "text" : "password"}
                    label={
                      <span style={styleLabel}>
                        <span style={{ color: "#f44336" }}>*</span> Mật khẩu
                      </span>
                    }
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                  />
                </Grid>
              )}
              {!dataEdit.id && (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    id="password_confirmation"
                    name="password_confirmation"
                    size="small"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPasswordConfirm}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPasswordConfirm ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    type={showPasswordConfirm ? "text" : "password"}
                    label={
                      <span style={styleLabel}>
                        <span style={{ color: "#f44336" }}>*</span> Xác nhận mật
                        khẩu
                      </span>
                    }
                    value={formik.values.password_confirmation}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password_confirmation &&
                      Boolean(formik.errors?.password_confirmation)
                    }
                    helperText={
                      formik.touched.password_confirmation &&
                      formik.errors.password_confirmation
                    }
                  />
                </Grid>
              )}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={
                    <span style={styleLabel}>
                      <span style={{ color: "#f44336" }}>*</span> Họ tên
                    </span>
                  }
                  id="fullName"
                  name="fullName"
                  size="small"
                  value={formik?.values?.fullName}
                  onChange={formik.handleChange}
                  error={
                    formik?.touched?.fullName &&
                    Boolean(formik?.errors?.fullName)
                  }
                  helperText={
                    formik?.touched?.fullName && formik?.errors?.fullName
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={
                    <span style={styleLabel}>
                      <span style={{ color: "#f44336" }}>*</span> Email
                    </span>
                  }
                  name="email"
                  size="small"
                  value={formik?.values?.email}
                  onChange={formik.handleChange}
                  error={
                    formik?.touched?.email && Boolean(formik?.errors?.email)
                  }
                  helperText={formik?.touched?.email && formik?.errors?.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label={
                    <span style={styleLabel}>
                      <span style={{ color: "#f44336" }}>*</span> Số điện thoại
                    </span>
                  }
                  id="mobile"
                  name="mobile"
                  size="small"
                  value={formik?.values?.mobile}
                  onChange={formik.handleChange}
                  error={
                    formik?.touched?.mobile && Boolean(formik?.errors?.mobile)
                  }
                  helperText={formik?.touched?.mobile && formik?.errors?.mobile}
                />
              </Grid>
              <Grid item xs={12}>
                <UserGroupSelect
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

export default UserDrawer;
