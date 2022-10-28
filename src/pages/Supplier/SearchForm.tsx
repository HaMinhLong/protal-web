// THIRD IMPORT
import React, { Dispatch, SetStateAction } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { supplier, filter } from "features/supplier/supplierSlice";
import { useDispatch, useSelector } from "app/store";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";
import SupplierGroupSelect from "components/Common/SupplierGroupSelect";

// TYPES IMPORT
import { FilterSupplier, SupplierType } from "types/supplier";

interface Props {
  setDataEdit: Dispatch<SetStateAction<SupplierType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const SearchForm = ({ setDataEdit, setVisibleDrawer, setLoading }: Props) => {
  const dispatch = useDispatch();

  const supplierState = useSelector(supplier);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: supplierState?.filter?.name || "",
      supplierGroupId: supplierState?.filter?.supplierGroupId || "",
      status: supplierState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch = (values: FilterSupplier) => {
    setLoading(true);
    const queryName: FilterSupplier = {
      name: values?.name?.trim(),
      supplierGroupId: values?.supplierGroupId,
      status: `${values?.status}`,
    };
    if (!values?.name?.trim()) {
      delete queryName.name;
    }
    if (values?.supplierGroupId === "") {
      delete queryName.supplierGroupId;
    }
    if (!values?.status) {
      delete queryName.status;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,supplierGroupId,description,status,createdAt",
    };

    dispatch(filter(values));
    dispatch({
      type: "supplier/fetch",
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
          <TextFieldCustom
            name="name"
            formik={formik}
            label="Tên nhà cung cấp"
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <SupplierGroupSelect
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
