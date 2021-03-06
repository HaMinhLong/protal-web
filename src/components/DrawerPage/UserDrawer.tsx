// THIRD IMPORT
import React, { useState } from "react";
import {
  Drawer,
  Box,
  useMediaQuery,
  Grid,
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
import TextFieldCustom from "components/Extended/TextFieldCustom";
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
import { UserType, ResponseError } from "types/user";

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
  const [errors, setErrors] = useState<ResponseError>({});
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
      .min(2, "Vui l??ng nh???p t???i thi???u 2 k?? t???")
      .max(50, `Vui l??ng nh???p t???i ??a 50 k?? t???`)
      .matches(isFullName, "Vui l??ng nh???p t??n theo ?????nh d???ng [a-z]")
      .required("Vui l??ng nh???p h??? t??n"),
    username: yup
      .string()
      .trim()
      .max(50, `Vui l??ng nh???p t???i ??a 50 k?? t???`)
      .matches(isUserName, "Vui l??ng nh???p t??n theo ?????nh d???ng [a-z][0-9] v?? -")
      .required("Vui l??ng nh???p t??n t??i kho???n"),
    email: yup
      .string()
      .trim()
      .max(50, `Vui l??ng nh???p t???i ??a 50 k?? t???`)
      .matches(isEmail, "Email is not valid")
      .email("Vui l??ng nh???p ????ng ?????nh d???ng email")
      .required("Vui l??ng nh???p email"),
    mobile: yup
      .string()
      .trim()
      .required("Vui l??ng nh???p s??? ??i???n tho???i")
      .max(12)
      .matches(isPhone, "Vui l??ng nh???p ????ng ?????nh d???ng s??? ??i???n tho???i"),
    password: yup
      .string()
      .trim()
      .matches(
        passwordRegEx,
        "Vui l??ng nh???p m???t kh???u t???i thi???u 6 k?? t??? v?? kh??ng ch???a k?? t??? ?????c bi???t"
      )
      .min(6, "Vui l??ng nh???p t???i thi???u 6 k?? t???")
      .max(20, "Vui l??ng nh???p t???i ??a 20 k?? t???")
      .required("Password is required"),
    password_confirmation: yup
      .string()
      .trim()
      .oneOf([yup.ref("password"), null], "Nh???p l???i m???t kh???u ch??a ch??nh x??c")
      .required("Vui l??ng nh???p l???i m???t kh???u"),
    userGroupId: yup.string().required("Vui l??ng ch???n nh??m t??i kho???n"),
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
            createNotification("success", "Th??m m???i t??i kho???n th??nh c??ng!");
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
        type: "user/add",
        payload: addItem,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification("success", "Th??m m???i t??i kho???n th??nh c??ng!");
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
    setErrors({});
    formik.resetForm();
    formik.setTouched({}, false);
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
              ? `C???p nh???t th??ng tin ${dataEdit?.username}`
              : "Th??m m???i nh??m t??i kho???n"}
            <Divider sx={{ mt: 1 }} />
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldCustom
                  name="username"
                  formik={formik}
                  label="T??i kho???n"
                  errors={errors}
                  required
                />
              </Grid>

              {!dataEdit.id && (
                <Grid item xs={12}>
                  <TextFieldCustom
                    errors={errors}
                    name="password"
                    type={showPassword ? "text" : "password"}
                    formik={formik}
                    label="M???t kh???u"
                    required
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
                  />
                </Grid>
              )}

              {!dataEdit.id && (
                <Grid item xs={12}>
                  <TextFieldCustom
                    name="password_confirmation"
                    formik={formik}
                    type={showPasswordConfirm ? "text" : "password"}
                    label="X??c nh???n m???t kh???u"
                    errors={errors}
                    required
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
                  />
                </Grid>
              )}

              <Grid item xs={12}>
                <TextFieldCustom
                  name="fullName"
                  formik={formik}
                  label="H??? t??n"
                  errors={errors}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextFieldCustom
                  name="email"
                  formik={formik}
                  label="Email"
                  errors={errors}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextFieldCustom
                  name="mobile"
                  formik={formik}
                  label="S??? ??i???n tho???i"
                  errors={errors}
                  required
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
                L??u l???i
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
