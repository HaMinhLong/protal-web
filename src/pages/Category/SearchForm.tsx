// THIRD IMPORT
import { Dispatch, SetStateAction } from 'react';
import { Grid, Button, useMediaQuery, useTheme } from '@mui/material';
import { useFormik } from 'formik';

// ICON IMPORT
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

// PROJECT IMPORT
import { category, filter, save } from 'features/category/categorySlice';
import { useDispatch, useSelector } from 'app/store';
import StatusFilter from 'components/Common/StatusFilter';
import createNotification from 'components/Extended/Notification';
import WebsiteSelect from 'components/Common/WebsiteSelect';
import CategoryGroupSelect from 'components/Common/CategoryGroupSelect';

// TYPES IMPORT
import { FilterCategory } from 'types/category';

interface Props {
  selectedCategory: string | number;
  setSelectedCategory: Dispatch<SetStateAction<string | number>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setIsAddNew: Dispatch<SetStateAction<boolean>>;
}

const PAGE_SIZE = 1000;

const SearchForm = ({ selectedCategory, setSelectedCategory, setVisibleDrawer, setLoading, setIsAddNew }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchDownXS = useMediaQuery(theme.breakpoints.down('sm'));

  const categoryState = useSelector(category);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      websiteId: categoryState?.filter?.websiteId || '',
      categoryGroupId: categoryState?.filter?.categoryGroupId || '',
      status: categoryState?.filter?.status || ''
    },
    onSubmit: (values) => {
      handleSearch(values);
    }
  });

  const handleSearch = (values: FilterCategory) => {
    setLoading(true);
    if (!values?.websiteId) {
      dispatch(save({}));
      setLoading(false);
      return;
    }
    const queryName: FilterCategory = {
      websiteId: values?.websiteId,
      categoryGroupId: values?.categoryGroupId,
      status: `${values?.status}`
    };

    if (!values?.status) {
      delete queryName.status;
    }

    if (values?.categoryGroupId === '') {
      delete queryName.categoryGroupId;
    }

    if (values?.websiteId === '') {
      delete queryName.websiteId;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      attributes: 'id,text,droppable,parent,url,position,websiteId,categoryGroupId,isHome,status,createdAt'
    };

    dispatch(filter(values));
    dispatch({
      type: 'category/fetch',
      payload: query,
      callback: (res) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification('error', res?.message);
        }
      }
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={12} xl={8}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={4}>
              <WebsiteSelect formik={formik} setFieldValue={formik.setFieldValue} addOrEdit={false} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <CategoryGroupSelect formik={formik} setFieldValue={formik.setFieldValue} addOrEdit={false} />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <StatusFilter addOrEdit={false} formik={formik} setFieldValue={formik.setFieldValue} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={4} sx={{ display: 'flex', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
          <Button fullWidth={matchDownXS} variant="contained" endIcon={<SearchIcon />} type="submit">
            Tìm kiếm
          </Button>
          <Button
            fullWidth={matchDownXS}
            variant="outlined"
            color="success"
            endIcon={<AddIcon />}
            sx={{ ml: matchDownXS ? 0 : 2, mt: matchDownXS ? 1 : 0 }}
            onClick={() => {
              setVisibleDrawer(true);
              setIsAddNew(true);
            }}
            disabled={!selectedCategory}
          >
            Thêm mới
          </Button>
          <Button
            fullWidth={matchDownXS}
            variant="outlined"
            color="success"
            endIcon={<AddIcon />}
            sx={{ ml: matchDownXS ? 0 : 2, mt: matchDownXS ? 1 : 0 }}
            onClick={() => {
              setVisibleDrawer(true);
              setSelectedCategory('');
              setIsAddNew(true);
            }}
          >
            Thêm mới Root
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
