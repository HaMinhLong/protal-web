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
import OrderStatusSelect from 'components/Common/OrderStatusSelect';
import createNotification from 'components/Extended/Notification';
import TextFieldCustom from 'components/Extended/TextFieldCustom';
import Loading from 'components/Extended/Loading';
import WebsiteSelect from 'components/Common/WebsiteSelect';
import PaymentMethodSelect from 'components/Common/PaymentMethodSelect';
import ProductOrder from 'components/ProductOrder';

// TYPES IMPORT
import { OrderType, ResponseError } from 'types/order';

interface Props {
  open: boolean;
  dataEdit: OrderType;
  handleClose: () => void;
  getList: () => void;
}

const OrderModal = ({ open, dataEdit, handleClose, getList }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));

  const [dataOrder, setDataOrder] = useState<OrderType>({ id: 0, status: 1 });
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ResponseError>({});

  useEffect(() => {
    if (!open) return;
    if (!dataEdit?.id) {
      setDataOrder({ id: 0, status: 1 });
    } else {
      setLoading(true);
      dispatch({
        type: 'order/getOne',
        payload: {
          id: dataEdit?.id
        },
        callback: (res) => {
          setLoading(false);
          if (res?.success === true) {
            const {
              results: { list }
            } = res;
            const productOrders = list?.products?.map((item) => ({
              productName: item.name,
              flag: 'update',
              ...item.productOrders
            }));
            setDataOrder({ ...list, productOrders: productOrders || [] });
          } else if (res?.success === false) {
            createNotification('error', res?.message);
          }
        }
      });
    }
  }, [open]);

  const validationSchema = yup.object().shape({
    name: yup.string().trim().max(254).required('Vui lòng nhập họ tên'),
    phone: yup.string().trim().max(254).required('Vui lòng nhập số điện thoại'),
    email: yup.string().trim().max(254).required('Vui lòng nhập email'),
    address: yup.string().trim().max(500).required('Vui lòng nhập address'),
    websiteId: yup.string().required('Vui lòng chọn website'),
    paymentMethodId: yup.string().required('Vui lòng chọn phương thức thanh toán')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: dataOrder?.id || 0,
      name: dataOrder?.name || '',
      phone: dataOrder?.phone || '',
      email: dataOrder?.email || '',
      description: dataOrder?.description || '',
      address: dataOrder?.address || '',
      websiteId: dataOrder?.websiteId || '',
      totalPrice: dataOrder?.totalPrice || 0,
      paymentMethodId: dataOrder?.paymentMethodId || '',
      status: dataOrder?.status || 1,
      productOrders: dataOrder?.productOrders || []
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = (values: OrderType) => {
    setLoading(true);
    const addItem = {
      ...values,
      name: values?.name?.trim(),
      phone: values?.phone?.trim(),
      email: values?.email?.trim()
    };

    if (dataOrder?.id) {
      dispatch({
        type: 'order/update',
        payload: {
          id: dataOrder?.id,
          params: addItem
        },
        callback: (res) => {
          if (res?.success) {
            createNotification('success', res?.message);
            getList();
            handleClose();
          } else {
            setErrors(res.error);
            createNotification('error', res.message);
          }
          setLoading(false);
        }
      });
    } else {
      dispatch({
        type: 'order/add',
        payload: addItem,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification('success', res?.message);
            getList();
            handleClose();
          } else {
            setErrors(res.error);
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
      title={dataOrder?.id ? `Cập nhật thông tin ${dataOrder?.name}` : 'Thêm mới đơn hàng'}
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
          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6} lg={4}>
              <TextFieldCustom name="name" formik={formik} errors={errors} required label="Họ tên" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <TextFieldCustom name="phone" formik={formik} errors={errors} required label="Số điện thoại" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <TextFieldCustom name="email" formik={formik} errors={errors} required label="Email" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <WebsiteSelect formik={formik} setFieldValue={formik.setFieldValue} addOrEdit={false} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <PaymentMethodSelect formik={formik} setFieldValue={formik.setFieldValue} addOrEdit={false} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <TextFieldCustom name="address" formik={formik} errors={errors} required label="Địa chỉ đặt hàng" />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <OrderStatusSelect addOrEdit={false} formik={formik} setFieldValue={formik.setFieldValue} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <TextFieldCustom name="totalPrice" formik={formik} errors={errors} label="Tổng tiền" readOnly />
            </Grid>

            <Grid item xs={12}>
              <ProductOrder formik={formik} />
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <TextFieldCustom name="description" formik={formik} errors={errors} label="Ghi chú" multiline rows={5} />
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 3,
              mb: matchDownMD ? 15 : 0,
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

export default OrderModal;
