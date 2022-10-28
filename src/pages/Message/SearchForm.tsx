// THIRD IMPORT
import React, { Dispatch, SetStateAction } from "react";
import { Grid, Button } from "@mui/material";
import { useFormik } from "formik";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { message, filter } from "features/message/messageSlice";
import { useDispatch, useSelector } from "app/store";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";
import WebsiteSelect from "components/Common/WebsiteSelect";

// TYPES IMPORT
import { FilterMessage, MessageType } from "types/message";

interface Props {
  setDataEdit: Dispatch<SetStateAction<MessageType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const SearchForm = ({ setDataEdit, setVisibleDrawer, setLoading }: Props) => {
  const dispatch = useDispatch();

  const messageState = useSelector(message);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: messageState?.filter?.name || "",
      phone: messageState?.filter?.phone || "",
      websiteId: messageState?.filter?.websiteId || "",
      status: messageState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch = (values: FilterMessage) => {
    setLoading(true);
    const queryName: FilterMessage = {
      name: values?.name?.trim(),
      phone: values?.phone?.trim(),
      websiteId: values?.websiteId,
      status: `${values?.status}`,
    };
    if (!values?.name?.trim()) {
      delete queryName.name;
    }
    if (!values?.phone?.trim()) {
      delete queryName.phone;
    }
    if (values?.websiteId === "") {
      delete queryName.websiteId;
    }
    if (!values?.status) {
      delete queryName.status;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,phone,email,message,websiteId,status,createdAt",
    };

    dispatch(filter(values));
    dispatch({
      type: "message/fetch",
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
          <TextFieldCustom name="phone" formik={formik} label="Số điện thọai" />
        </Grid>

        <Grid item xs={12} md={6} lg={3}>
          <WebsiteSelect
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
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchForm;
