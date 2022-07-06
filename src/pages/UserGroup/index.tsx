// THIRD IMPORT
import { useState, useEffect } from "react";
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
import { userGroup, filter } from "features/userGroup/userGroupSlice";
import SwitchStatus from "components/Extended/SwitchStatus";
import createNotification from "components/Extended/Notification";
import Loading from "components/Extended/Loading";
import NoData from "components/Extended/NoData";

// TYPES IMPORT
import { FilterUserGroup, UserGroupType } from "types/userGroup";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down("lg"));
  const spacingMD = matchDownMD ? 1 : 1.5;

  const userGroupState = useSelector(userGroup);
  const userGroups = userGroupState.data.list;
  const pagination = userGroupState.data.pagination;

  const [dataEdit, setDataEdit] = useState({});
  const [loading, setLoading] = useState(false);

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
      attributes: "id,name,description,status,createdAt",
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
      type: "userGroup/fetch",
      payload: params,
      callback: (res: any) => {
        setLoading(false);
        if (res?.success) {
        }
      },
    });
  };

  const handleSearch = (values: FilterUserGroup) => {
    setLoading(true);
    const queryName = {
      name: values?.name?.trim(),
      status: values?.status,
    };
    if (!values?.name?.trim()) {
      delete queryName.name;
    }
    if (values?.status === "") {
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
        if (res?.success) {
        }
      },
    });
  };

  const renderSearchForm = () => {
    return (
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <TextField
              fullWidth
              label="Tên nhóm tài khoản"
              id="name"
              name="name"
              size="small"
              value={formik?.values?.name}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatusFilter
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
            >
              Thêm mới
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  };

  const renderTableHead = () => {
    return (
      <TableRow sx={{ fontWeight: "bold" }}>
        <TableCell sx={{ width: "5%" }} align="center">
          #
        </TableCell>
        <TableCell sx={{ whiteSpace: "nowrap" }}>Tên</TableCell>
        <TableCell sx={{ whiteSpace: "nowrap" }}>Mô tả</TableCell>
        <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
          Ngày tạo
        </TableCell>
        <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
          Trạng thái
        </TableCell>
        <TableCell align="right" sx={{ whiteSpace: "nowrap" }}>
          Hành động
        </TableCell>
      </TableRow>
    );
  };

  const renderTableBody = (item: UserGroupType, index: number) => {
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
          {item.name}
        </TableCell>
        <TableCell
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "624px",
          }}
        >
          {item?.description}
        </TableCell>
        <TableCell align="right">
          {moment(item?.createdAt).format("DD/MM/YYYY HH:mm")}
        </TableCell>
        <TableCell align="right">{renderStatus(item)}</TableCell>
        <TableCell align="right">{renderMenuButton(item)}</TableCell>
      </TableRow>
    );
  };

  const renderStatus = (item: UserGroupType) => {
    return (
      <SwitchStatus
        status={item.status}
        id={item.id}
        handleStatus={handleStatus}
      />
    );
  };

  const handleStatus = (value: number, id: number) => {
    const status = value;
    const item = {
      status,
    };
    dispatch({
      type: "userGroup/updateStatus",
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

  const renderMenuButton = (item: UserGroupType) => (
    <>
      <Button
        variant="outlined"
        endIcon={<EditIcon />}
        onClick={() => setDataEdit(item)}
      >
        Sửa
      </Button>
      <Button
        variant="outlined"
        color="error"
        sx={{ ml: 1 }}
        endIcon={<DeleteIcon />}
      >
        Xóa
      </Button>
    </>
  );

  return (
    <MainCard title={renderSearchForm()} content={false}>
      <Box sx={{ position: "relative" }}>
        <TableContainer sx={{ overflow: "auto" }}>
          <Table>
            <TableHead>{renderTableHead()}</TableHead>
            <TableBody>
              {userGroups?.map((item, index) => renderTableBody(item, index))}
            </TableBody>
          </Table>
          {userGroups?.length === 0 && <NoData />}
        </TableContainer>
        {loading && <Loading />}
      </Box>
      <NotificationContainer />
    </MainCard>
  );
};

export default Index;
