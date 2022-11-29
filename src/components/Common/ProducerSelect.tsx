// THIRD IMPORT
import { useState, useEffect } from 'react';
import { TextField, Autocomplete, FormHelperText } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

// TYPES IMPORT

// PROJECT IMPORT
import { useDispatch } from 'app/store';

interface Props {
  formik: any;
  setFieldValue: any;
  addOrEdit: boolean;
}

const ProducerSelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: 'producer/fetchLazyLoading',
      payload: {
        filter: JSON.stringify({ status: 1 }),
        range: JSON.stringify([0, 500])
      },
      callback: (res) => {
        const { list } = res?.results;
        const dataSelect = list?.map((item) => {
          return {
            value: item.id,
            label: item.name
          };
        });
        setLists(dataSelect);
      }
    });
  };

  return (
    <>
      <Autocomplete
        fullWidth
        size="small"
        disablePortal
        id="combo-box-demo"
        value={lists?.length > 0 ? lists?.filter((item) => item.value === formik?.values?.producerId)[0] : { value: '', label: '' }}
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="producerId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Nhà sản xuất <span> *</span>
                </span>
              ) : (
                'Nhà sản xuất'
              )
            }
            error={formik.touched.producerId && Boolean(formik.errors?.producerId)}
          />
        )}
        onChange={(e, data) => setFieldValue('producerId', data?.value)}
      />
      {formik.touched.producerId && formik.errors.producerId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon fontSize="small" sx={{ mr: 0.5, width: '18px', height: '18px' }} />
          {formik.errors.producerId}
        </FormHelperText>
      )}
    </>
  );
};

export default ProducerSelect;
