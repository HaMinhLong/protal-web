// THIRD IMPORT
import { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  Grid,
  useMediaQuery,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
  Pagination,
} from "@mui/material";
import moment from "moment";
import { useTheme } from "@mui/material/styles";
import { useFormik } from "formik";
import { NotificationContainer } from "react-notifications";

// ICON IMPORT
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import StatusFilter from "components/Common/StatusFilter";
import { user, filter } from "features/user/userSlice";
import SwitchStatus from "components/Extended/SwitchStatus";
import createNotification from "components/Extended/Notification";
import Loading from "components/Extended/Loading";
import NoData from "components/Extended/NoData";
import UserDrawer from "components/DrawerPage/UserDrawer";
import AlertDelete from "components/Extended/AlertDelete";
import UserGroupSelect from "components/Common/UserGroupSelect";

// TYPES IMPORT
import { FilterUser, UserType } from "types/user";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const userGroupState = useSelector(user);
  const userGroups = userGroupState.data.list;
  const pagination = userGroupState.data.pagination;

  const [loading, setLoading] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [dataEdit, setDataEdit] = useState<UserType>({
    id: 0,
    username: "",
    password: "",
    fullName: "",
    email: "",
    mobile: 0,
    status: 0,
    createdAt: "",
  });
  const [confirmDelete, setConfirmDelete] = useState(false);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: userGroupState?.filter?.email || "",
      userGroupId: userGroupState?.filter?.userGroupId || "",
      status: userGroupState?.filter?.status || "",
    },
    onSubmit: (values) => {
      handleSearch(values);
    },
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const { query } = userGroupState;
    const queryFilter = userGroupState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,username,fullName,email,mobile,status,createdAt,userGroupId",
    };
    if (query?.filter !== "{}") {
      params = {
        ...params,
        filter: query?.filter,
      };
    }
    if (query?.range !== "{}") {
      params = {
        ...params,
        range: query?.range,
      };
    }
    if (query?.sort !== "{}") {
      params = {
        ...params,
        sort: query?.sort,
      };
    }

    dispatch(filter(queryFilter));
    dispatch({
      type: "user/fetch",
      payload: params,
      callback: (res: any) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification("error", res?.message);
        }
      },
    });
  };

  const handleSearch = (values: FilterUser) => {
    setLoading(true);
    const queryName = {
      email: values?.email?.trim(),
      userGroupId: values?.userGroupId,
      status: values?.status,
    };
    if (!values?.email?.trim()) {
      delete queryName.email;
    }
    if (!values?.userGroupId) {
      delete queryName.userGroupId;
    }
    if (values?.status === "") {
      delete queryName.status;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,username,fullName,email,mobile,status,createdAt,userGroupId",
    };

    dispatch(filter(values));
    dispatch({
      type: "user/fetch",
      payload: query,
      callback: (res) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification("error", res?.message);
        }
      },
    });
  };

  const handleTableChange = (e: ChangeEvent<unknown>, page: number) => {
    setLoading(true);
    const queryFilter = userGroupState.filter;

    const queryName = {
      email: queryFilter?.email?.trim(),
      userGroupId: queryFilter?.userGroupId,
      status: queryFilter?.status,
    };
    if (!queryFilter?.email?.trim()) {
      delete queryName.email;
    }
    if (!queryFilter?.userGroupId) {
      delete queryName.userGroupId;
    }
    if (queryFilter?.status === "") {
      delete queryName.status;
    }
    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([
        page * pagination.pageSize - pagination.pageSize,
        page * pagination.pageSize,
      ]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,username,fullName,email,mobile,status,createdAt,userGroupId",
    };

    dispatch({
      type: "user/fetch",
      payload: query,
      callback: (res) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification("error", res?.message);
        }
      },
    });
  };

  const handleStatus = (value: number, id: number | undefined) => {
    const status = value;
    const item = {
      status,
    };
    dispatch({
      type: "user/updateStatus",
      payload: {
        id: id,
        params: item,
      },
      callback: (res) => {
        if (res?.success === true) {
          createNotification("success", "Cập nhật trạng thái thành công!");
        } else {
          createNotification("error", res?.message);
        }
      },
    });
  };

  const handleRemove = (confirmDelete: boolean) => {
    setConfirmDelete(false);
    if (confirmDelete) {
      dispatch({
        type: "user/delete",
        payload: {
          id: dataEdit?.id,
        },
        callback: (res) => {
          if (res?.success === true) {
            createNotification("success", "Xóa bản ghi thành công!");
            getList();
          } else if (res?.success === false) {
            createNotification("error", res && res.message);
          }
        },
      });
    }
  };

  const renderSearchForm = () => {
    return (
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              fullWidth
              label="Email"
              id="email"
              name="email"
              size="small"
              value={formik?.values?.email}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <UserGroupSelect
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

  const renderTableHead = () => {
    const styleCell = { whiteSpace: "nowrap", fontWeight: "bold" };
    return (
      <TableRow>
        <TableCell sx={{ ...styleCell, width: "5%" }} align="center">
          #
        </TableCell>
        <TableCell sx={styleCell}>Họ tên</TableCell>
        <TableCell sx={styleCell}>Email</TableCell>
        <TableCell sx={styleCell}>Số điện thoại</TableCell>
        <TableCell sx={styleCell}>Nhóm tài khoản</TableCell>
        <TableCell align="right" sx={{ fontWeight: "bold" }}>
          Ngày tạo
        </TableCell>
        <TableCell align="right" sx={styleCell}>
          Trạng thái
        </TableCell>
        <TableCell align="right" sx={styleCell}>
          Hành động
        </TableCell>
      </TableRow>
    );
  };

  const renderTableBody = (item: UserType, index: number) => {
    return (
      <TableRow hover key={item.id}>
        <TableCell sx={{ width: "5%" }} align="center">
          <Typography variant="body2">
            {index + PAGE_SIZE * (pagination?.current - 1) + 1}
          </Typography>
        </TableCell>
        <TableCell
          sx={{ width: "20%", overflow: "hidden", maxWidth: 300 }}
          component="th"
          scope="row"
        >
          {item.fullName}
        </TableCell>
        <TableCell>{item?.email}</TableCell>
        <TableCell>{item?.mobile}</TableCell>
        <TableCell>{item?.userGroup?.name}</TableCell>
        <TableCell align="right">
          {moment(item?.createdAt).format("DD/MM/YYYY HH:mm")}
        </TableCell>
        <TableCell align="right">{renderStatus(item)}</TableCell>
        <TableCell align="right">{renderMenuButton(item)}</TableCell>
      </TableRow>
    );
  };

  const renderStatus = (item: UserType) => {
    return (
      <SwitchStatus
        status={item?.status}
        id={item?.id}
        handleStatus={handleStatus}
      />
    );
  };

  const renderMenuButton = (item: UserType) => (
    <>
      <Button
        variant="outlined"
        endIcon={<EditIcon />}
        onClick={() => {
          setDataEdit(item);
          setVisibleDrawer(true);
        }}
      >
        Sửa
      </Button>
      <Button
        variant="outlined"
        color="error"
        sx={{ ml: 1 }}
        endIcon={<DeleteIcon />}
        onClick={() => {
          setConfirmDelete(true);
          setDataEdit(item);
        }}
      >
        Xóa
      </Button>
    </>
  );

  return (
    <>
      <MainCard title={renderSearchForm()} content={false}>
        <Box sx={{ position: "relative", pb: 2 }}>
          <TableContainer sx={{ overflow: "auto" }}>
            <Table>
              <TableHead>{renderTableHead()}</TableHead>
              <TableBody>
                {userGroups?.map((item, index) => renderTableBody(item, index))}
              </TableBody>
            </Table>
            {userGroups?.length > 0 && (
              <Pagination
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "flex-end",
                }}
                size={matchDownSM ? "small" : "medium"}
                count={Math.floor(pagination?.total / pagination?.pageSize) + 1}
                page={pagination?.current}
                color="primary"
                shape="rounded"
                onChange={handleTableChange}
              />
            )}
          </TableContainer>

          {userGroups?.length === 0 && <NoData />}
          {loading && <Loading />}
        </Box>
      </MainCard>
      <NotificationContainer />
      {confirmDelete && (
        <AlertDelete
          name={dataEdit?.fullName}
          open={confirmDelete}
          handleClose={handleRemove}
        />
      )}
      <UserDrawer
        visible={visibleDrawer}
        closeDrawer={() => setVisibleDrawer(false)}
        dataEdit={dataEdit}
        getList={getList}
      />
    </>
  );
};

export default Index;
