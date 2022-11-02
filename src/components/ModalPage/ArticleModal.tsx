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

// TYPES IMPORT
import { ArticleType, ResponseError } from "types/article";
import UploadImage from "components/Extended/UploadImage";

interface Props {
  open: boolean;
  dataEdit: ArticleType;
  handleClose: () => void;
  getList: () => void;
}

const ArticleModal = ({ open, dataEdit, handleClose, getList }: Props) => {
  const dispatch = useDispatch();

  const [dataArticle, setArticle] = useState<ArticleType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ResponseError>({});

  useEffect(() => {
    if (!open) return;
    if (!dataEdit?.id) {
      setArticle({});
    } else {
      setLoading(true);
      dispatch({
        type: "article/getOne",
        payload: {
          id: dataEdit?.id,
        },
        callback: (res) => {
          setLoading(false);
          if (res?.success === true) {
            const {
              results: { list },
            } = res;
            setArticle(list);
          } else if (res?.success === false) {
            createNotification("error", res?.message);
          }
        },
      });
    }
  }, [open]);

  const validationSchema = yup.object().shape({
    title: yup
      .string()
      .trim()
      .max(254)
      .required("Vui lòng nhập tiêu đề tin tức"),
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
      title: dataArticle?.title || "",
      description: dataArticle?.description || "",
      content: dataArticle?.content || "",
      url: dataArticle?.url || "",
      author: dataArticle?.author || "",
      source: dataArticle?.source || "",
      label: dataArticle?.label || "",
      images: dataArticle?.images || "",
      websiteId: dataArticle?.websiteId || "",
      categoryId: dataArticle?.categoryId || "",
      categoryName: dataArticle?.category?.text || "",
      status: dataArticle?.status === 0 ? 0 : 1,
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values: ArticleType) => {
    setLoading(true);
    const addItem = {
      ...values,
      title: values?.title?.trim(),
      titleOld: dataArticle?.title?.trim(),
    };

    if (dataArticle?.id) {
      dispatch({
        type: "article/update",
        payload: {
          id: dataArticle?.id,
          params: addItem,
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
        type: "article/add",
        payload: addItem,
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
          <Grid item xs={12} md={6} lg={8}>
            <TextFieldCustom
              name="title"
              formik={formik}
              errors={errors}
              required
              label="Tên tin tức"
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
            <TextFieldCustom
              name="author"
              formik={formik}
              errors={errors}
              label="Tác giả"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextFieldCustom
              name="source"
              formik={formik}
              errors={errors}
              label="Nguôn"
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <TextFieldCustom
              name="label"
              formik={formik}
              errors={errors}
              label="Nhãn"
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
            <StatusFilter
              addOrEdit={false}
              formik={formik}
              setFieldValue={formik.setFieldValue}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
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
        dataArticle?.id
          ? `Cập nhật thông tin ${dataArticle?.title}`
          : "Thêm mới tin tức"
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

export default ArticleModal;
