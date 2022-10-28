// THIRD IMPORT
import React, { Dispatch, SetStateAction } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { product, filter } from "features/product/productSlice";
import { useDispatch, useSelector } from "app/store";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";
import WebsiteSelect from "components/Common/WebsiteSelect";
import CategorySelect from "components/Common/CategorySelect";
import ProducerSelect from "components/Common/ProducerSelect";
import SupplierSelect from "components/Common/SupplierSelect";

// TYPES IMPORT
import { FilterProduct, ProductType } from "types/product";

interface Props {
  setDataEdit: Dispatch<SetStateAction<ProductType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const SearchForm = ({ setDataEdit, setVisibleDrawer, setLoading }: Props) => {
  const dispatch = useDispatch();

  const productState = useSelector(product);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: productState?.filter?.name || "",
      websiteId: productState?.filter?.websiteId || "",
      categoryId: productState?.filter?.categoryId || "",
      producer: productState?.filter?.producer || "",
      supplier: productState?.filter?.supplier || "",
      categoryName: productState?.filter?.categoryName || "",
      status: productState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch = (values: FilterProduct) => {
    setLoading(true);
    const queryName: FilterProduct = {
      name: values?.name?.trim(),
      websiteId: values?.websiteId,
      categoryId: values?.categoryId,
      producerId: values?.producerId,
      supplierId: values?.supplierId,
      status: `${values?.status}`,
    };
    if (!values?.name?.trim()) {
      delete queryName.name;
    }
    if (!values?.websiteId) {
      delete queryName.websiteId;
    }
    if (!values?.producerId) {
      delete queryName.producerId;
    }
    if (!values?.supplierId) {
      delete queryName.supplierId;
    }
    if (!values?.categoryId) {
      delete queryName.categoryId;
      delete queryName.categoryName;
    }
    if (values?.status === "") {
      delete queryName.status;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,name,websiteId,categoryId,price,producerId,supplierId,status,createdAt",
    };

    dispatch(filter(values));
    dispatch({
      type: "product/fetch",
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
          <TextFieldCustom name="name" formik={formik} label="Tên sản phẩm" />
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
          <ProducerSelect
            formik={formik}
            setFieldValue={formik.setFieldValue}
            addOrEdit={false}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <SupplierSelect
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
          lg={6}
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
