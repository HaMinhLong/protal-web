// THIRD IMPORT
import { Dispatch, SetStateAction } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { website, filter } from "features/website/websiteSlice";
import { useDispatch, useSelector } from "app/store";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";
import WebsiteGroupSelect from "components/Common/WebsiteGroupSelect";

// TYPES IMPORT
import { FilterWebsite, WebsiteType } from "types/website";

interface Props {
  setDataEdit: Dispatch<SetStateAction<WebsiteType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const SearchForm = ({ setDataEdit, setVisibleDrawer, setLoading }: Props) => {
  const dispatch = useDispatch();

  const websiteState = useSelector(website);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: websiteState?.filter?.name || "",
      websiteGroupId: websiteState?.filter?.websiteGroupId || "",
      status: websiteState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch = (values: FilterWebsite) => {
    setLoading(true);
    const queryName: FilterWebsite = {
      name: values?.name?.trim(),
      websiteGroupId: values?.websiteGroupId,
      status: `${values?.status}`,
    };
    if (!values?.name?.trim()) {
      delete queryName.name;
    }
    if (!values?.status) {
      delete queryName.status;
    }
    if (values?.websiteGroupId === "") {
      delete queryName.websiteGroupId;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,description,logo,websiteGroupId,status,createdAt",
    };

    dispatch(filter(values));
    dispatch({
      type: "website/fetch",
      payload: query,
      callback: (res) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification("error", res?.message);
        }
      },
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={3}>
          <TextFieldCustom name="name" formik={formik} label="Tên website" />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <WebsiteGroupSelect
            formik={formik}
            setFieldValue={formik.setFieldValue}
            addOrEdit={false}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatusFilter
            addOrEdit={false}
            formik={formik}
            setFieldValue={formik.setFieldValue}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button variant="contained" endIcon={<SearchIcon />} type="submit">
            Tìm kiếm
          </Button>
          <Button
            variant="outlined"
            color="success"
            endIcon={<AddIcon />}
            sx={{ ml: 2 }}
            onClick={() => {
              setDataEdit({});
              setVisibleDrawer(true);
            }}
          >
            Thêm mới
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
