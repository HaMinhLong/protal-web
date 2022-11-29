// THIRD IMPORT
import { useEffect, useState } from 'react';
import { Autocomplete, Box, FormHelperText, TextField } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

// TYPES IMPORT
// PROJECT IMPORT
import { useDispatch } from 'app/store';

interface Props {
  formik: any;
  addOrEdit: boolean;
  handleChange?: (value: any) => void;
  websiteId?: number | string;
  categoryId?: number | string;
  productsSelected?: number[];
  fetchData?: boolean;
}

const END_POINT = process.env.REACT_APP_SERVER;

const ProductSelect = ({ formik, addOrEdit, handleChange, websiteId, categoryId, productsSelected, fetchData }: Props) => {
  const dispatch = useDispatch();

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    setLists(lists?.filter((item) => !productsSelected?.includes(item?.value)));
  }, [productsSelected]);

  useEffect(() => {
    getList();
  }, [categoryId, fetchData, websiteId]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    dispatch({
      type: 'product/fetchLazyLoading',
      payload: {
        filter: JSON.stringify({
          status: 1,
          websiteId: websiteId,
          categoryId: categoryId || ''
        }),
        range: JSON.stringify([0, 1000])
      },
      callback: (res) => {
        const { list } = res?.results;
        const dataSelect = list?.map((item) => {
          return {
            price: item.price,
            images: item.images,
            negotiablePrice: item.negotiablePrice,
            value: item.id,
            label: item.name
          };
        });

        setLists(productsSelected ? dataSelect?.filter((item) => !productsSelected?.includes(item?.value)) : dataSelect);
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
        value={{
          value: productsSelected ? '' : formik?.values?.productId,
          label: productsSelected ? '' : formik?.values?.productName
        }}
        options={lists}
        disableClearable={addOrEdit}
        renderOption={(props, option) => (
          <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
            <img
              loading="lazy"
              width="20"
              src={`${END_POINT}${lists?.find((item) => item.value === option.value)?.images?.split(',')[0]}`}
              alt={option?.label}
            />
            {option.label}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            name="productId"
            label={
              addOrEdit ? (
                <span className="input-label">
                  Sản phẩm <span> *</span>
                </span>
              ) : (
                'Sản phẩm'
              )
            }
            error={formik.touched.productId && Boolean(formik.errors?.productId)}
          />
        )}
        onChange={(e, data) => {
          if (handleChange) handleChange(data);
        }}
      />
      {formik.touched.productId && formik.errors.productId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon fontSize="small" sx={{ mr: 0.5, width: '18px', height: '18px' }} />
          {formik.errors.productId}
        </FormHelperText>
      )}
    </>
  );
};

export default ProductSelect;
