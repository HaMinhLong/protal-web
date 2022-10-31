// THIRD IMPORT
import { useState } from "react";
import { Box, Grid, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

// ICONS IMPORT
import SaveIcon from "@mui/icons-material/Save";
import DoDisturbIcon from "@mui/icons-material/DoDisturb";

// PROJECT IMPORT
import DialogPopUp from "components/Extended/DialogPopUp";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import { useDispatch } from "app/store";
import createNotification from "components/Extended/Notification";
import WebsiteGroupSelect from "components/Common/WebsiteGroupSelect";
import UploadImage from "components/Extended/UploadImage";
import Loading from "components/Extended/Loading";
import TabWrapper from "components/Extended/TabWrapper";
import LocationWebsite from "components/LocationWebsite";

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
      id: dataEdit?.id || "",
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
            createNotification("success", res?.message);
            getList();
            closePopUp();
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
            createNotification("success", res?.message);
            getList();
            closePopUp();
          } else {
            setErrors(res.error);
            createNotification("error", res.message);
          }
        },
      });
    }
  };

  const closePopUp = () => {
    closeDrawer();
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
          <Grid item xs={12} lg={4}>
            <TextFieldCustom
              name="name"
              formik={formik}
              errors={errors}
              label="Tên website"
              required
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <WebsiteGroupSelect
              formik={formik}
              setFieldValue={formik.setFieldValue}
              addOrEdit={true}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <StatusFilter
              addOrEdit={true}
              formik={formik}
              setFieldValue={formik.setFieldValue}
            />
          </Grid>

          <Grid item xs={12} lg={8}>
            <TextFieldCustom
              name="description"
              formik={formik}
              errors={errors}
              label="Mô tả"
              multiline
              rows={6}
            />
          </Grid>

          <Grid item xs={12} lg={4}>
            <UploadImage
              image={
                formik.values.logo
                  ? `${process.env.REACT_APP_SERVER}${formik.values.logo}`
                  : ""
              }
              setFieldValue={formik.setFieldValue}
              field="logo"
            />
          </Grid>
        </Grid>
      ),
    },
    {
      value: 1,
      label: "Thông tin địa điểm",
      tab: <LocationWebsite formik={formik}></LocationWebsite>,
    },
  ];

  return (
    <>
      <DialogPopUp
        open={visible}
        title={
          dataEdit?.id
            ? `Cập nhật thông tin ${dataEdit?.name}`
            : "Thêm mới wesite"
        }
        handleClose={() => {
          closePopUp();
        }}
        styleBox={{ minWidth: "1000px", minHeight: "350px" }}
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
    </>
  );
};

export default WebsiteDrawer;
