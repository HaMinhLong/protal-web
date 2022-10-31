//THIRD IMPORT
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
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
import { useTheme } from "@mui/material/styles";

// ICON IMPORT
import EditIcon from "@mui/icons-material/Edit";
import NextPlanIcon from "@mui/icons-material/NextPlan";

// PROJECT IMPORT
import { order } from "features/order/orderSlice";
import { useDispatch, useSelector } from "app/store";
import createNotification from "components/Extended/Notification";
import Loading from "components/Extended/Loading";
import NoData from "components/Extended/NoData";
import AlertDelete from "components/Extended/AlertDelete";

// TYPES IMPORT
import { OrderType } from "types/order";
import moment from "moment";

interface Props {
  dataEdit: OrderType;
  setDataEdit: Dispatch<SetStateAction<OrderType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  getList: () => void;
}

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const OrderTable = ({
  dataEdit,
  setDataEdit,
  setVisibleDrawer,
  loading,
  setLoading,
  getList,
}: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchDownSM = useMediaQuery(theme.breakpoints.down("md"));

  const orderState = useSelector(order);
  const orders = orderState.data.list;
  const pagination = orderState.data.pagination;

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleTableChange = (e: ChangeEvent<unknown>, page: number) => {
    setLoading(true);
    const queryFilter = orderState.filter;

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
      attributes:
        "id,name,phone,email,totalPrice,address,description,status,createdAt",
    };

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

  const renderTableHead = () => {
    const styleCell = { whiteSpace: "nowrap", fontWeight: "bold" };
    return (
      <TableRow>
        <TableCell sx={{ ...styleCell, width: "5%" }} align="center">
          #
        </TableCell>
        <TableCell sx={styleCell}>Họ tên</TableCell>
        <TableCell sx={styleCell}>Số điên thoại</TableCell>
        <TableCell sx={styleCell}>Email</TableCell>
        <TableCell sx={styleCell}>Website</TableCell>
        <TableCell sx={styleCell}>PT thanh toán</TableCell>
        <TableCell sx={styleCell}>Tổng tiền</TableCell>
        <TableCell sx={styleCell}>Địa chỉ</TableCell>
        <TableCell sx={styleCell}>Ngày tạo</TableCell>
        <TableCell align="right" sx={styleCell}>
          Hành động
        </TableCell>
      </TableRow>
    );
  };

  const renderStatusAction = (status?: number) => {
    switch (status) {
      case 1:
        return "Tiếp nhận";

      case 2:
        return "Đóng gói";

      case 3:
        return "Vận chuyển";

      default:
        return "Thành công";
    }
  };

  const renderStatusActionPre = (status?: number) => {
    switch (status) {
      case 3:
        return "Tiếp nhận";

      case 4:
        return "Đóng gói";

      case 5:
        return "Vận chuyển";

      default:
        return "Đặt hàng";
    }
  };

  const renderTableBody = (item: OrderType, index: number) => {
    return (
      <TableRow hover key={item.id}>
        <TableCell sx={{ width: "5%" }} align="center">
          <Typography variant="body2">
            {index + PAGE_SIZE * (pagination?.current - 1) + 1}
          </Typography>
        </TableCell>
        <TableCell
          sx={{ width: "15%", overflow: "hidden", maxWidth: 200 }}
          component="th"
          scope="row"
        >
          {item.name}
        </TableCell>
        <TableCell>{item?.phone}</TableCell>
        <TableCell>{item?.email}</TableCell>
        <TableCell>{item?.website?.name}</TableCell>
        <TableCell>{item?.paymentMethod?.name}</TableCell>
        <TableCell>{item?.totalPrice}</TableCell>
        <TableCell
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "400px",
          }}
        >
          {item?.address}
        </TableCell>
        <TableCell>
          {moment(item?.createdAt).format("DD/MM/YYYY HH:mm")}
        </TableCell>
        <TableCell align="right">{renderMenuButton(item)}</TableCell>
      </TableRow>
    );
  };

  const handleStatus = (value: number, id: number) => {
    const status = value;
    const item = {
      status,
    };
    dispatch({
      type: "order/updateStatus",
      payload: {
        id: id,
        params: item,
      },
      callback: (res) => {
        if (res?.success === true) {
          createNotification("success", res?.message);
          getList();
        } else {
          createNotification("error", res?.message);
        }
      },
    });
  };

  const renderMenuButton = (item: OrderType) => (
    <>
      {item?.status !== 1 && (
        <Button
          size="small"
          variant="outlined"
          endIcon={
            <NextPlanIcon
              sx={{ transform: "rotateZ(180deg) rotateX(180deg)" }}
            />
          }
          onClick={() => {
            handleStatus(item?.status - 1, item?.id);
          }}
          sx={{ mr: "10px" }}
        >
          {renderStatusActionPre(item?.status)}
        </Button>
      )}
      {item?.status !== 5 && (
        <Button
          size="small"
          variant="outlined"
          endIcon={<NextPlanIcon />}
          onClick={() => {
            handleStatus(item?.status + 1, item?.id);
          }}
          sx={{ mr: "10px" }}
        >
          {renderStatusAction(item?.status)}
        </Button>
      )}
      <Button
        size="small"
        variant="outlined"
        endIcon={<EditIcon />}
        onClick={() => {
          setDataEdit(item);
          setVisibleDrawer(true);
        }}
      >
        Sửa
      </Button>
    </>
  );

  const handleRemove = (confirmDelete: boolean) => {
    setConfirmDelete(false);
    if (confirmDelete) {
      dispatch({
        type: "order/delete",
        payload: {
          id: dataEdit?.id,
        },
        callback: (res) => {
          if (res?.success === true) {
            createNotification("success", res?.message);
            getList();
          } else if (res?.success === false) {
            createNotification("error", res && res.message);
          }
        },
      });
    }
  };

  return (
    <Box sx={{ position: "relative", pb: 2 }}>
      <TableContainer sx={{ overflow: "auto" }}>
        <Table>
          <TableHead>{renderTableHead()}</TableHead>
          <TableBody>
            {orders?.map((item, index) => renderTableBody(item, index))}
          </TableBody>
        </Table>
        {orders?.length > 0 && (
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
      {orders?.length === 0 && <NoData />}
      {loading && <Loading />}

      {confirmDelete && (
        <AlertDelete
          name={dataEdit?.name}
          open={confirmDelete}
          handleClose={handleRemove}
        />
      )}
    </Box>
  );
};

export default OrderTable;
