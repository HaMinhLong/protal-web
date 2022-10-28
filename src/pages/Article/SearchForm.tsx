// THIRD IMPORT
import React, { Dispatch, SetStateAction } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { article, filter } from "features/article/articleSlice";
import { useDispatch, useSelector } from "app/store";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";
import WebsiteSelect from "components/Common/WebsiteSelect";
import CategorySelect from "components/Common/CategorySelect";

// TYPES IMPORT
import { FilterArticle, ArticleType } from "types/article";

interface Props {
  setDataEdit: Dispatch<SetStateAction<ArticleType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const SearchForm = ({ setDataEdit, setVisibleDrawer, setLoading }: Props) => {
  const dispatch = useDispatch();

  const articleState = useSelector(article);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: articleState?.filter?.title || "",
      websiteId: articleState?.filter?.websiteId || "",
      categoryId: articleState?.filter?.categoryId || "",
      categoryName: articleState?.filter?.categoryName || "",
      status: articleState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch = (values: FilterArticle) => {
    setLoading(true);
    const queryName: FilterArticle = {
      title: values?.title?.trim(),
      websiteId: values?.websiteId,
      categoryId: values?.categoryId,
      status: `${values?.status}`,
    };
    if (!values?.title?.trim()) {
      delete queryName.title;
    }
    if (!values?.websiteId) {
      delete queryName.websiteId;
    }
    if (!values?.categoryId) {
      delete queryName.categoryId;
      delete queryName.categoryName;
    }
    if (!values?.status) {
      delete queryName.status;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,title,websiteId,categoryId,author,source,status,createdAt",
    };

    dispatch(filter(values));
    dispatch({
      type: "article/fetch",
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
          <TextFieldCustom name="title" formik={formik} label="Tên tin tức" />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <WebsiteSelect
            formik={formik}
            setFieldValue={formik.setFieldValue}
            addOrEdit={false}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <CategorySelect
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
          md={12}
          lg={12}
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
