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
  readOnly?: boolean;
  handleChange?: () => void;
}

const WebsiteMultipleSelect = ({ formik, setFieldValue, addOrEdit, readOnly, handleChange }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);
  const [dataAll, setDataAll] = useState<any>([]);

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    const websiteUserSelected = formik?.values?.websites?.map((item) => {
      if (item?.flag !== 'delete') return item?.value;
      return -1;
    });

    setLists(dataAll?.filter((item) => !websiteUserSelected?.includes(item?.value)));
  }, [formik?.values?.websites]);

  const getList = () => {
    dispatch({
      type: 'website/fetchLazyLoading',
      payload: {
        filter: JSON.stringify({ status: 1 }),
        range: JSON.stringify([0, 50])
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
        setDataAll(dataSelect);
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
        multiple
        value={[]}
        readOnly={readOnly}
        options={lists}
        disableClearable={addOrEdit}
        renderInput={(params) => (
          <TextField
            {...params}
            name="websites"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Vui lòng chọn website <span> *</span>
                </span>
              ) : (
                'Vui lòng chọn website'
              )
            }
            error={formik.touched.websites && Boolean(formik.errors?.websites)}
          />
        )}
        onChange={(e, data) => {
          const selected: any = data?.[0];
          const websiteDeleted = formik?.values?.websites?.find((item) => item?.value === selected?.value);
          console.log('websiteDeleted', websiteDeleted);
          if (websiteDeleted) {
            setFieldValue(
              'websites',
              formik?.values?.websites?.map((item) => {
                if (item?.value === selected?.value) return { ...item, flag: item?.oldFlag };
                return item;
              })
            );
          } else {
            setFieldValue('websites', [{ ...selected, flag: 'add', oldFlag: 'add' }].concat(formik?.values?.websites));
          }
          if (handleChange) handleChange();
        }}
      />
      {formik.touched.websites && formik.errors.websites && (
        <FormHelperText error className="error-custom">
          <ErrorIcon fontSize="small" sx={{ mr: 0.5, width: '18px', height: '18px' }} />
          {formik.errors.websites}
        </FormHelperText>
      )}
    </>
  );
};

export default WebsiteMultipleSelect;
