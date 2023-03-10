/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Box, Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

// ICONS IMPORT
import SaveIcon from '@mui/icons-material/Save';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

// PROJECT IMPORT
import DialogPopUp from 'components/Extended/DialogPopUp';
import createNotification from 'components/Extended/Notification';
import TextFieldCustom from 'components/Extended/TextFieldCustom';
import WebsiteSelect from 'components/Common/WebsiteSelect';
import Loading from 'components/Extended/Loading';

// TYPES IMPORT
import { LocationType } from 'types/location';

interface Props {
  open: boolean;
  dataEdit: LocationType;
  handleClose: () => void;
  formikProp: any;
  getList: () => void;
}

const ProductOrderModal = ({ open, dataEdit, handleClose, formikProp, getList }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const [dataLocation, setDataLocation] = useState<LocationType>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!open) return;
    setDataLocation(dataEdit);
  }, [open]);

  const validationSchema = yup.object().shape({
    name: yup.string().required('Vui lòng nhập tên địa điểm'),
    mobile: yup.string().required('Vui lòng nhập số điện thoại'),
    address: yup.string().required('Vui lòng nhập địa chỉ'),
    location: yup.string().required('Vui lòng nhập địa điểm trên google map'),
    websiteId: yup.string().required('Vui lòng chọn website')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataLocation?.id || 0,
      name: dataLocation?.name || '',
      mobile: dataLocation?.mobile || '',
      email: dataLocation?.email || '',
      bankName: dataLocation?.bankName || '',
      address: dataLocation?.address || '',
      location: dataLocation?.location || '',
      websiteId: formikProp?.values?.id,
      status: dataLocation?.status === 0 ? 0 : 1
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = (values: LocationType) => {
    setLoading(true);
    const addItem = {
      ...values,
      name: values?.name?.trim(),
      nameOld: dataLocation?.name?.trim()
    };

    if (dataLocation?.id) {
      dispatch({
        type: 'location/update',
        payload: {
          id: dataLocation?.id,
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
        type: 'location/add',
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
  };

  return (
    <DialogPopUp
      open={open}
      title={dataLocation?.id ? `Cập nhật thông tin ${dataLocation?.name}` : 'Thêm mới địa điểm'}
      handleClose={() => {
        closePopUp();
      }}
      styleBox={{ minWidth: matchDownMD ? '100%' : '800px', minHeight: '350px' }}
      styleChildBox={{ p: '0px 30px 20px' }}
      styleTitle={{ p: '10px 30px' }}
      showButtonCloseDialog
    >
      <Box>
        <form onSubmit={formik.handleSubmit} style={{ position: 'relative' }}>
          <Grid container spacing={3} sx={{ mt: 0 }}>
            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom name="name" formik={formik} required label="Tên địa điêm" />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom name="mobile" formik={formik} required label="Số điện thoại" />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom name="email" formik={formik} label="Email" />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom name="bankName" formik={formik} label="Tài khoản ngân hàng" />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <WebsiteSelect formik={formik} setFieldValue={formik.setFieldValue} addOrEdit={true} />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <TextFieldCustom name="location" formik={formik} required label="Google map" />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <TextFieldCustom name="address" formik={formik} label="Địa chỉ" multiline rows={3} />
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
          {loading && <Loading />}
        </form>
      </Box>
    </DialogPopUp>
  );
};

export default ProductOrderModal;
