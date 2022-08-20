// THIRD IMPORT
import { useState, useEffect, ChangeEvent } from "react";
import {
  Box,
  useMediaQuery,
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
// ICON IMPORT
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { userGroup, filter } from "features/userGroup/userGroupSlice";
import SwitchStatus from "components/Extended/SwitchStatus";
import createNotification from "components/Extended/Notification";
import Loading from "components/Extended/Loading";
import NoData from "components/Extended/NoData";
import UserGroupDrawer from "components/DrawerPage/UserGroupDrawer";
import AlertDelete from "components/Extended/AlertDelete";
import SearchForm from "pages/UserGroup/SearchForm";

// TYPES IMPORT
import { UserGroupType } from "types/userGroup";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const userGroupState = useSelector(userGroup);
  const userGroups = userGroupState.data.list;
  const pagination = userGroupState.data.pagination;

  const [loading, setLoading] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [dataEdit, setDataEdit] = useState<UserGroupType>({
    id: 0,
    name: "",
    description: "",
    createdAt: "",
    status: 0,
  });
  const [confirmDelete, setConfirmDelete] = useState(false);

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
      name: queryFilter?.name?.trim(),
      status: queryFilter?.status,
    };
    if (!queryFilter?.name?.trim()) {
      delete queryName.name;
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
      attributes: "id,name,description,status,createdAt",
    };

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

  const handleStatus = (value: number, id: number | undefined) => {
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

  const handleRemove = (confirmDelete: boolean) => {
    setConfirmDelete(false);
    if (confirmDelete) {
      dispatch({
        type: "userGroup/delete",
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

  const renderTableHead = () => {
    const styleCell = { whiteSpace: "nowrap", fontWeight: "bold" };
    return (
      <TableRow>
        <TableCell sx={{ ...styleCell, width: "5%" }} align="center">
          #
        </TableCell>
        <TableCell sx={styleCell}>Tên nhóm tài khoản</TableCell>
        <TableCell sx={styleCell}>Mô tả</TableCell>
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
          {item?.name}
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
        status={item?.status}
        id={item?.id}
        handleStatus={handleStatus}
      />
    );
  };

  const renderMenuButton = (item: UserGroupType) => (
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
      <MainCard
        title={
          <SearchForm
            setDataEdit={setDataEdit}
            setVisibleDrawer={setVisibleDrawer}
          />
        }
        content={false}
      >
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
      {confirmDelete && (
        <AlertDelete
          name={dataEdit?.name}
          open={confirmDelete}
          handleClose={handleRemove}
        />
      )}
      <UserGroupDrawer
        visible={visibleDrawer}
        closeDrawer={() => setVisibleDrawer(false)}
        dataEdit={dataEdit}
        getList={getList}
      />
    </>
  );
};

export default Index;
