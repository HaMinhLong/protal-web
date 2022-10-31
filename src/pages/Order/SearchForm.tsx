// THIRD IMPORT
import React, { Dispatch, SetStateAction } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { order, filter } from "features/order/orderSlice";
import { useDispatch, useSelector } from "app/store";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";
import WebsiteSelect from "components/Common/WebsiteSelect";
import PaymentMethodSelect from "components/Common/PaymentMethodSelect";

// TYPES IMPORT
import { FilterOrder, OrderType } from "types/order";

interface Props {
  setDataEdit: Dispatch<SetStateAction<OrderType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const SearchForm = ({ setDataEdit, setVisibleDrawer, setLoading }: Props) => {
  const dispatch = useDispatch();

  const orderState = useSelector(order);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: orderState?.filter?.name || "",
      status: orderState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch = (values: FilterOrder) => {
    setLoading(true);
    const queryName: FilterOrder = {
      name: values?.name?.trim(),
      phone: values?.phone?.trim(),
      email: values?.email?.trim(),
      websiteId: values?.websiteId,
      paymentMethodId: values?.paymentMethodId,
      status: `${values?.status}`,
    };
    if (!values?.name?.trim()) {
      delete queryName.name;
    }
    if (!values?.phone?.trim()) {
      delete queryName.phone;
    }
    if (!values?.email?.trim()) {
      delete queryName.email;
    }
    if (!values?.websiteId) {
      delete queryName.websiteId;
    }
    if (!values?.paymentMethodId) {
      delete queryName.paymentMethodId;
    }
    if (!values?.status) {
      delete queryName.status;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,name,phone,email,totalPrice,address,description,status,createdAt",
    };

    dispatch(filter(values));
    dispatch({
      type: "order/fetch",
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
          <TextFieldCustom name="name" formik={formik} label="Họ tên" />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <TextFieldCustom name="phone" formik={formik} label="Số điện thoại" />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <TextFieldCustom name="email" formik={formik} label="Email" />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <PaymentMethodSelect
            formik={formik}
            setFieldValue={formik.setFieldValue}
            addOrEdit={false}
          />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <WebsiteSelect
            formik={formik}
            setFieldValue={formik.setFieldValue}
            addOrEdit={false}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          lg={9}
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
              setDataEdit({ id: 0, status: 1 });
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
