// THIRD IMPORT
import React, { useState } from 'react';
import { Drawer, Box, useMediaQuery, Grid, Typography, Divider, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as yup from 'yup';

// ICONS IMPORT
import SaveIcon from '@mui/icons-material/Save';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

// PROJECT IMPORT
import TextFieldCustom from 'components/Extended/TextFieldCustom';
import StatusFilter from 'components/Common/StatusFilter';
import { useDispatch } from 'app/store';
import createNotification from 'components/Extended/Notification';
import Loading from 'components/Extended/Loading';
import ProducerGroupSelect from 'components/Common/ProducerGroupSelect';

// TYPES IMPORT
import { ProducerType, ResponseError } from 'types/producer';

interface Props {
  visible: boolean;
  dataEdit: ProducerType;
  closeDrawer: () => void;
  getList: () => void;
}

const ProducerDrawer = ({ visible, closeDrawer, dataEdit, getList }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ResponseError>({});

  const validationSchema = yup.object().shape({
    name: yup.string().trim().max(50).required('Vui lòng nhập tên nhà sản xuất'),
    description: yup.string().trim().max(255),
    producerGroupId: yup.string().required('Vui lòng chọn nhóm nhà sản xuất')
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: dataEdit?.name || '',
      description: dataEdit?.description || '',
      producerGroupId: dataEdit?.producerGroupId || '',
      status: dataEdit?.status === 0 ? 0 : 1
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = (values: any) => {
    setLoading(true);
    const addItem = {
      ...values,
      name: values?.name?.trim(),
      nameOld: dataEdit?.name?.trim()
    };
    if (dataEdit?.id) {
      dispatch({
        type: 'producer/update',
        payload: {
          id: dataEdit?.id,
          params: {
            ...addItem
          }
        },
        callback: (res) => {
          if (res?.success) {
            createNotification('success', res?.message);
            getList();
            changeDrawer();
          } else {
            setErrors(res.error);
            createNotification('error', res.message);
          }
          setLoading(false);
        }
      });
    } else {
      dispatch({
        type: 'producer/add',
        payload: addItem,
        callback: (res) => {
          setLoading(false);
          if (res?.success) {
            createNotification('success', res?.message);
            getList();
            changeDrawer();
          } else {
            setErrors(res.error);
            createNotification('error', res.message);
          }
        }
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
      <Drawer anchor={'right'} open={visible} onClose={changeDrawer}>
        <Box
          sx={{
            width: matchDownSM ? '100%' : '400px',
            p: 2
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            {dataEdit?.id ? `Cập nhật thông tin ${dataEdit?.name}` : 'Thêm mới nhà sản xuất'}
            <Divider sx={{ mt: 1 }} />
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextFieldCustom name="name" formik={formik} errors={errors} label="Tên nhà sản xuất" required />
              </Grid>

              <Grid item xs={12}>
                <ProducerGroupSelect formik={formik} setFieldValue={formik.setFieldValue} addOrEdit={true} />
              </Grid>

              <Grid item xs={12}>
                <TextFieldCustom name="description" formik={formik} errors={errors} label="Mô tả" multiline rows={3} />
              </Grid>

              <Grid item xs={12}>
                <StatusFilter addOrEdit={true} formik={formik} setFieldValue={formik.setFieldValue} />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                mt: 3,
                display: 'flex',
                justifyContent: 'flex-end'
              }}
            >
              <Button onClick={() => changeDrawer()} size="small" variant="outlined" sx={{ mr: '10px' }} endIcon={<DoDisturbIcon />}>
                Hủy
              </Button>
              <Button size="small" variant="contained" type="submit" endIcon={<SaveIcon />}>
                Lưu lại
              </Button>
            </Grid>
          </form>
        </Box>
        {loading && <Loading />}
      </Drawer>
    </>
  );
};

export default ProducerDrawer;
