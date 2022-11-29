/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useState, useEffect } from 'react';
import { Box, Grid, TableRow, TableCell, TableContainer, Table, TableHead, TableBody, Typography, IconButton } from '@mui/material';
import { useFormik } from 'formik';
import DeleteIcon from '@mui/icons-material/Delete';

// PROJECT IMPORT
import ProductSelect from 'components/Common/ProductSelect';
import CategorySelect from 'components/Common/CategorySelect';
import Nodata from 'components/Extended/NoData';

// TYPES IMPORT
import { CollectionProductType } from 'types/product';

const END_POINT = process.env.REACT_APP_SERVER;

interface Props {
  formikProp: any;
}

const Index = ({ formikProp }: Props) => {
  const [fetchData, setFetchData] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      categoryId: '',
      categoryName: '',
      productId: ''
    },
    onSubmit: (values) => {}
  });

  useEffect(() => {
    formik.setFieldValue('categoryId', '');
    formik.setFieldValue('categoryName', '');
  }, [formikProp?.values?.websiteId]);

  const renderTableHead = () => {
    const styleCell = { whiteSpace: 'nowrap', fontWeight: 'bold' };
    return (
      <TableRow>
        <TableCell sx={{ ...styleCell, width: '5%' }} align="center">
          #
        </TableCell>
        <TableCell sx={styleCell}>Tên sản phẩm</TableCell>
        <TableCell sx={styleCell}>Giá</TableCell>
        <TableCell sx={styleCell}>Giá Sale</TableCell>
        <TableCell align="center" sx={styleCell}>
          #
        </TableCell>
      </TableRow>
    );
  };

  const styleTableCell = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  };

  const renderTableBody = (item: CollectionProductType, index: number) => {
    return (
      <TableRow hover key={item.productId}>
        <TableCell sx={{ width: '5%' }} align="center">
          <Typography variant="body2">{index + 1}</Typography>
        </TableCell>
        <TableCell
          sx={{
            maxWidth: 350,
            ...styleTableCell,
            display: 'flex',
            alignItems: 'center'
          }}
          component="th"
          scope="row"
        >
          <img
            height="30px"
            width="30px"
            src={`${END_POINT}${item?.images?.split(',')[0]}`}
            style={{ marginRight: '10px' }}
            alt={item?.name}
          />
          {item?.name}
        </TableCell>
        <TableCell>{item?.price}</TableCell>
        <TableCell>{item?.negotiablePrice}</TableCell>
        <TableCell align="center">{renderButton(item)}</TableCell>
      </TableRow>
    );
  };

  const handleAdd = (data: CollectionProductType) => {
    formikProp.setFieldValue(
      'collectionProducts',
      formikProp?.values?.collectionProducts.concat([
        {
          ...data,
          name: data?.label,
          productId: data?.value,
          flag: 'add'
        }
      ])
    );
  };

  const handleRemove = (item: CollectionProductType) => {
    setFetchData(!fetchData);
    formikProp.setFieldValue(
      'collectionProducts',
      formikProp?.values?.collectionProducts?.map((product) => {
        if (product?.productId === item?.productId) return { ...product, flag: 'delete' };
        return product;
      })
    );
  };

  const renderButton = (item: CollectionProductType) => {
    return (
      <Box>
        <IconButton
          size="small"
          onClick={() => {
            handleRemove(item);
          }}
        >
          <DeleteIcon fontSize="small" color="error" />
        </IconButton>
      </Box>
    );
  };

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <CategorySelect
            formik={formik}
            setFieldValue={formik.setFieldValue}
            addOrEdit={false}
            websiteId={formikProp?.values?.websiteId}
            categoryGroupId={2}
          />
        </Grid>
        <Grid item xs={8}>
          <ProductSelect
            formik={formik}
            addOrEdit={false}
            websiteId={formikProp?.values?.websiteId}
            categoryId={formik?.values?.categoryId}
            handleChange={(data) => {
              handleAdd(data);
            }}
            productsSelected={formikProp?.values?.collectionProducts
              ?.filter((item) => item?.flag !== 'delete')
              ?.map((item) => {
                return item?.productId;
              })}
            fetchData={fetchData}
          />
        </Grid>
      </Grid>
      <Box>
        <TableContainer sx={{ overflow: 'auto', minHeight: '200px' }}>
          <Table>
            <TableHead>{renderTableHead()}</TableHead>
            <TableBody>
              {formikProp?.values?.collectionProducts
                ?.filter((item) => item?.flag !== 'delete')
                ?.map((item, index) => renderTableBody(item, index))}
            </TableBody>
          </Table>
          {!formikProp?.values?.collectionProducts?.length && <Nodata />}
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Index;
