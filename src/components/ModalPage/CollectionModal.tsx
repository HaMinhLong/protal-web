/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Box, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';

// ICONS IMPORT
import SaveIcon from '@mui/icons-material/Save';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

// PROJECT IMPORT
import DialogPopUp from 'components/Extended/DialogPopUp';
import { useDispatch } from 'app/store';
import createNotification from 'components/Extended/Notification';
import TextFieldCustom from 'components/Extended/TextFieldCustom';
import Loading from 'components/Extended/Loading';
import WebsiteSelect from 'components/Common/WebsiteSelect';
import CategorySelect from 'components/Common/CategorySelect';
import CollectionProduct from 'components/CollectionProduct';

// TYPES IMPORT
import { CollectionType, ResponseError } from 'types/collection';

interface Props {
  open: boolean;
  dataEdit: CollectionType;
  handleClose: () => void;
  getList: () => void;
}

const CollectionModal = ({ open, dataEdit, handleClose, getList }: Props) => {
  const dispatch = useDispatch();

  const theme = useTheme();

  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const [dataCollection, setDataCollection] = useState<CollectionType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ResponseError>({});

  useEffect(() => {
    if (!open) return;
    if (!dataEdit?.id) {
      setDataCollection({});
    } else {
      setLoading(true);
      dispatch({
        type: 'collection/getOne',
        payload: {
          id: dataEdit?.id
        },
        callback: (res) => {
          setLoading(false);
          if (res?.success === true) {
            const {
              results: { list }
            } = res;
            setDataCollection(list);
          } else if (res?.success === false) {
            createNotification('error', res?.message);
          }
        }
      });
    }
  }, [open]);

  const validationSchema = yup.object().shape({
    name: yup.string().trim().max(254).required('Vui lòng nhập tên bộ danh sách'),
    description: yup.string().trim().max(254),
    websiteId: yup.string().required('Vui lòng chọn website'),
    categoryId: yup.string().required('Vui lòng chọn chuyên mục')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataCollection?.id || 0,
      name: dataCollection?.name || '',
      description: dataCollection?.description || '',
      websiteId: dataCollection?.websiteId || '',
      categoryId: dataCollection?.categoryId || '',
      categoryName: dataCollection?.category?.text || '',
      collectionProducts:
        dataCollection?.products?.map((item) => ({
          productId: item?.id,
          name: item?.name,
          price: item?.price,
          negotiablePrice: item?.negotiablePrice,
          images: item?.images
        })) || [],
      status: dataCollection?.status === 0 ? 0 : 1
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = (values: CollectionType) => {
    setLoading(true);
    const addItem = {
      ...values,
      name: values?.name?.trim(),
      nameOld: dataCollection?.name?.trim()
    };

    if (dataCollection?.id) {
      dispatch({
        type: 'collection/update',
        payload: {
          id: dataCollection?.id,
          params: addItem
        },
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification('success', res?.message);
            getList();
            closePopUp();
          } else {
            createNotification('error', res.message);
          }
        }
      });
    } else {
      dispatch({
        type: 'collection/add',
        payload: addItem,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification('success', res?.message);
            getList();
            closePopUp();
          } else {
            createNotification('error', res.message);
          }
        }
      });
    }
  };

  const closePopUp = () => {
    handleClose();
    formik.resetForm();
    formik.setTouched({}, false);
    setErrors({});
  };

  return (
    <DialogPopUp
      open={open}
      title={dataCollection?.id ? `Cập nhật thông tin ${dataCollection?.name}` : 'Thêm mới bộ danh sách'}
      handleClose={() => {
        closePopUp();
      }}
      styleBox={{ minWidth: matchDownMD ? '100%' : '1300px', minHeight: '700px' }}
      styleChildBox={{ p: '0px 30px 20px' }}
      styleTitle={{ p: '10px 30px' }}
      showButtonCloseDialog
    >
      <Box>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12} md={6} lg={4}>
              <TextFieldCustom name="name" formik={formik} errors={errors} required label="Tên bộ danh sách" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <WebsiteSelect
                formik={formik}
                setFieldValue={formik.setFieldValue}
                addOrEdit={true}
                handleChange={() => {
                  formik.setFieldValue('categoryId', '');
                  formik.setFieldValue('categoryName', '');
                }}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <CategorySelect
                formik={formik}
                setFieldValue={formik.setFieldValue}
                addOrEdit={true}
                websiteId={formik?.values?.websiteId}
                categoryGroupId={2}
              />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <TextFieldCustom name="description" formik={formik} errors={errors} label="Mô tả" multiline rows={4} />
            </Grid>
            <Grid item xs={12}>
              <CollectionProduct formikProp={formik} />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 3,
              mb: matchDownMD ? 5 : 0,
              display: 'flex',
              justifyContent: 'center'
            }}
          >
            <Button onClick={() => closePopUp()} size="small" variant="outlined" sx={{ mr: '10px' }} endIcon={<DoDisturbIcon />}>
              Hủy
            </Button>
            <Button size="small" variant="contained" type="submit" endIcon={<SaveIcon />}>
              Lưu lại
            </Button>
          </Box>
        </form>
        {loading && <Loading />}
      </Box>
    </DialogPopUp>
  );
};

export default CollectionModal;
