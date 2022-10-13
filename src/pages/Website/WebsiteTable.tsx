//THIRD IMPORT
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";

// PROJECT IMPORT
import { website } from "features/website/websiteSlice";
import { useDispatch, useSelector } from "app/store";
import createNotification from "components/Extended/Notification";
import Loading from "components/Extended/Loading";
import NoData from "components/Extended/NoData";
import SwitchStatus from "components/Extended/SwitchStatus";
import AlertDelete from "components/Extended/AlertDelete";

// TYPES IMPORT
import { WebsiteType } from "types/website";
import moment from "moment";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

interface Props {
  dataEdit: WebsiteType;
  setDataEdit: Dispatch<SetStateAction<WebsiteType>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  getList: () => void;
}

const WebsiteTable = ({
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

  const websiteState = useSelector(website);
  const websites = websiteState.data.list;
  const pagination = websiteState.data.pagination;

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleTableChange = (e: ChangeEvent<unknown>, page: number) => {
    setLoading(true);
    const queryFilter = websiteState.filter;

    const queryName = {
      name: queryFilter?.name?.trim(),
      websiteGroupId: queryFilter?.websiteGroupId,
      status: queryFilter?.status,
    };
    if (!queryFilter?.name?.trim()) {
      delete queryName.name;
    }
    if (queryFilter?.status === "") {
      delete queryName.status;
    }
    if (queryFilter?.websiteGroupId === "") {
      delete queryName.websiteGroupId;
    }

    const query = {
      filter: JSON.stringify(queryName),
      range: JSON.stringify([
        page * pagination.pageSize - pagination.pageSize,
        page * pagination.pageSize,
      ]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,description,logo,websiteGroupId,status,createdAt",
    };

    dispatch({
      type: "website/fetch",
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
      type: "website/updateStatus",
      payload: {
        id: id,
        params: item,
      },
      callback: (res) => {
        if (res?.success === true) {
          createNotification("success", res?.message);
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
        type: "website/delete",
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

  const renderTableHead = () => {
    const styleCell = { whiteSpace: "nowrap", fontWeight: "bold" };
    return (
      <TableRow>
        <TableCell sx={{ ...styleCell, width: "5%" }} align="center">
          #
        </TableCell>
        <TableCell sx={styleCell}>Tên website</TableCell>
        <TableCell sx={styleCell}>Mô tả</TableCell>
        <TableCell sx={styleCell}>Nhóm website</TableCell>
        <TableCell sx={styleCell}>Ngày tạo</TableCell>
        <TableCell sx={styleCell}>Trạng thái</TableCell>
        <TableCell align="right" sx={styleCell}>
          Hành động
        </TableCell>
      </TableRow>
    );
  };

  const renderTableBody = (item: WebsiteType, index: number) => {
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
            minWidth: "300px",
            maxWidth: "500px",
          }}
        >
          {item?.description}
        </TableCell>
        <TableCell>{item?.websiteGroup?.name}</TableCell>
        <TableCell>
          {moment(item?.createdAt).format("DD/MM/YYYY HH:mm")}
        </TableCell>
        <TableCell>{renderStatus(item)}</TableCell>
        <TableCell align="right">{renderMenuButton(item)}</TableCell>
      </TableRow>
    );
  };

  const renderStatus = (item: WebsiteType) => {
    return (
      <SwitchStatus
        status={item?.status}
        id={item?.id}
        handleStatus={handleStatus}
      />
    );
  };

  const renderMenuButton = (item: WebsiteType) => (
    <>
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
      <Button
        size="small"
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
    <Box sx={{ position: "relative", pb: 2 }}>
      <TableContainer sx={{ overflow: "auto" }}>
        <Table>
          <TableHead>{renderTableHead()}</TableHead>
          <TableBody>
            {websites?.map((item, index) => renderTableBody(item, index))}
          </TableBody>
        </Table>
        {websites?.length > 0 && (
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

      {websites?.length === 0 && <NoData />}
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

export default WebsiteTable;
