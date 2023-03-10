// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Box, Typography, Button, Tooltip, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';

// ICONS IMPORT
import ClearIcon from '@mui/icons-material/Clear';
import SaveIcon from '@mui/icons-material/Save';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';

// PROJECT IMPORT
import DialogPopUp from 'components/Extended/DialogPopUp';
import createNotification from 'components/Extended/Notification';
import Loading from 'components/Extended/Loading';
import WebsiteMultipleSelect from 'components/Common/WebsiteMultipleSelect';

interface Props {
  open: boolean;
  id: number;
  handleClose: () => void;
}

interface WebsiteUserType {
  value: number;
  label: string;
  flag: string;
  oldFlag: string;
}

const GrantPermissionModal = ({ open, id, handleClose }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const [loading, setLoading] = useState<boolean>(false);
  const [websiteUsers, setWebsiteUsers] = useState<WebsiteUserType[]>([]);

  useEffect(() => {
    if (open) getList();
  }, [open]);

  const getList = () => {
    setLoading(true);
    dispatch({
      type: 'websiteUser/fetch',
      payload: {
        id: id
      },
      callback: (res) => {
        setLoading(false);
        if (res?.success) {
          const {
            results: { list }
          } = res;
          const data = list?.[0]?.websites?.map((item) => {
            return {
              value: item?.id,
              label: item?.name,
              flag: 'update',
              oldFlag: 'update'
            };
          });
          setWebsiteUsers(data);
        } else {
          createNotification('error', res?.message);
        }
      }
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      websites: websiteUsers || []
    },
    onSubmit: (values) => {
      handleSubmit(values);
    }
  });

  const handleSubmit = (values) => {
    setLoading(true);
    dispatch({
      type: 'websiteUser/update',
      payload: {
        id: id,
        params: {
          websites: values?.websites
        }
      },
      callback: (res) => {
        setLoading(false);

        if (res?.success) {
          createNotification('success', res?.message);
          closePopUp();
        } else {
          createNotification('error', res?.message);
        }
      }
    });
  };

  console.log('websites', formik?.values?.websites);

  const closePopUp = () => {
    handleClose();
    setWebsiteUsers([]);
    formik.resetForm();
    formik.setTouched({}, false);
  };

  return (
    <DialogPopUp
      open={open}
      title={'Cấp quyền'}
      handleClose={() => {
        closePopUp();
      }}
      styleBox={{ minWidth: matchDownSM ? '100%' : '500px', maxWidth: '500px', minHeight: '350px' }}
      styleChildBox={{ p: '20px 30px 20px' }}
      styleTitle={{ p: '10px 30px' }}
      showButtonCloseDialog
    >
      <Box>
        <WebsiteMultipleSelect formik={formik} setFieldValue={formik.setFieldValue} addOrEdit={false} />
        <Typography variant="h4" sx={{ mt: 1, fontWeight: 500 }}>
          Danh sách website tài khoản được truy cập:
        </Typography>
        <form onSubmit={formik.handleSubmit} style={{ position: 'relative' }}>
          <Box sx={{ minHeight: '150px' }}>
            {formik?.values?.websites
              ?.filter((item) => item?.flag !== 'delete')
              ?.map((item) => (
                <Typography
                  variant="h5"
                  sx={{ mt: 0.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  key={item?.value}
                >
                  {item?.label}
                  <Tooltip placement="left" title="Xóa">
                    <IconButton
                      onClick={() => {
                        if (item?.flag === 'add')
                          formik.setFieldValue(
                            'websites',
                            formik?.values?.websites?.filter((website) => website?.value !== item?.value)
                          );
                        else
                          formik.setFieldValue(
                            'websites',
                            formik?.values?.websites?.map((website) =>
                              website?.value === item?.value ? { ...website, flag: 'delete' } : website
                            )
                          );
                      }}
                    >
                      <ClearIcon color="error" sx={{ cursor: 'pointer' }} />
                    </IconButton>
                  </Tooltip>
                </Typography>
              ))}
          </Box>

          <Box
            sx={{
              mt: 3,
              mb: matchDownSM ? 15 : 0,
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

export default GrantPermissionModal;
