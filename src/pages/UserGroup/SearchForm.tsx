// tHIRD IMPORT
import { Dispatch, SetStateAction } from "react";
import { useFormik } from "formik";
import { Grid, Button } from "@mui/material";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { useDispatch, useSelector } from "app/store";
import { userGroup, filter } from "features/userGroup/userGroupSlice";
import TextFieldCustom from "components/Extended/TextFieldCustom";
import StatusFilter from "components/Common/StatusFilter";
import createNotification from "components/Extended/Notification";

// TYPES IMPORT
import { FilterUserGroup, UserGroupType } from "types/userGroup";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

type Props = {
  setDataEdit: Dispatch<SetStateAction<UserGroupType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

const SearchForm = ({ setDataEdit, setVisibleDrawer, setLoading }: Props) => {
  const dispatch = useDispatch();
  const userGroupState = useSelector(userGroup);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: userGroupState?.filter?.name || "",
      status: userGroupState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  const handleSearch = (values: FilterUserGroup) => {
    setLoading(true);
    const queryName: FilterUserGroup = {
      name: values?.name?.trim(),
      status: `${values?.status}`,
    };
    if (!values?.name?.trim()) {
      delete queryName.name;
    }
    if (!values?.status) {
      delete queryName.status;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,description,status,createdAt",
    };

    dispatch(filter(values));
    dispatch({
      type: "userGroup/fetch",
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
            label="Tên nhóm tài khoản"
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
