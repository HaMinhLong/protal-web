// THIRD IMPORT
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TableRow,
  TableCell,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Typography,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";

// PROJECT IMPORT
import Nodata from "components/Extended/NoData";
import { LocationType } from "types/location";
import AlertDelete from "components/Extended/AlertDelete";
import LocationModal from "components/ModalPage/LocationModal";
import SwitchStatus from "components/Extended/SwitchStatus";
import createNotification from "components/Extended/Notification";
import Loading from "components/Extended/Loading";

interface Props {
  formik: any;
}

const Index = ({ formik }: Props) => {
  const dispatch = useDispatch();

  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [dataLocation, setDataLocation] = useState<LocationType[]>([]);
  const [dataEdit, setDataEdit] = useState<LocationType>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const query = {
      filter: JSON.stringify({ websiteId: formik?.values?.id }),
      range: JSON.stringify([0, 30]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,name,mobile,email,address,location,websiteId,status,createdAt",
    };

    dispatch({
      type: "location/fetch",
      payload: query,
      callback: (res) => {
        setLoading(false);

        if (res?.success) {
          const {
            results: { list },
          } = res;
          setDataLocation(list);
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
        <TableCell sx={styleCell}>Tên địa điểm</TableCell>
        <TableCell sx={styleCell}>Số điện thoại</TableCell>
        <TableCell sx={styleCell}>Địa chỉ</TableCell>
        <TableCell sx={styleCell}>Trạng thái</TableCell>
        {formik?.values?.id && (
          <TableCell align="right" sx={styleCell}>
            #
          </TableCell>
        )}
      </TableRow>
    );
  };

  const styleTableCell = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const renderTableBody = (item: LocationType, index: number) => {
    return (
      <TableRow hover key={item.id}>
        <TableCell sx={{ width: "5%" }} align="center">
          <Typography variant="body2">{index + 1}</Typography>
        </TableCell>
        <TableCell
          sx={{
            maxWidth: 350,
            ...styleTableCell,
          }}
          component="th"
          scope="row"
        >
          {item?.name}
        </TableCell>
        <TableCell>{item?.mobile}</TableCell>
        <TableCell
          sx={{
            ...styleTableCell,
            maxWidth: 200,
          }}
        >
          {item?.address}
        </TableCell>
        <TableCell>{renderStatus(item)}</TableCell>
        {formik?.values?.id && <TableCell>{renderButton(item)}</TableCell>}
      </TableRow>
    );
  };

  const handleStatus = (value: number, id: number | undefined) => {
    const status = value;
    const item = {
      status,
    };
    dispatch({
      type: "location/updateStatus",
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

  const renderStatus = (item: LocationType) => {
    return (
      <SwitchStatus
        status={item?.status}
        id={item?.id}
        handleStatus={handleStatus}
      />
    );
  };

  const renderButton = (item: LocationType) => {
    return (
      <Box>
        <IconButton
          size="small"
          onClick={() => {
            setDataEdit(item);
            setVisibleAdd(true);
          }}
        >
          <EditIcon fontSize="small" color="primary" />
        </IconButton>
        <IconButton
          size="small"
          onClick={() => {
            setConfirmDelete(true);
            setDataEdit(item);
          }}
        >
          <DeleteIcon fontSize="small" color="error" />
        </IconButton>
      </Box>
    );
  };

  return (
    <Box sx={{ mt: 0, mb: 0, position: "relative" }}>
      {formik?.values?.id && (
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="outlined"
            color="success"
            sx={{ mb: "10px" }}
            onClick={() => {
              setVisibleAdd(true);
              setDataEdit({ id: 0 });
            }}
          >
            Thêm địa điêm
          </Button>
        </Box>
      )}
      <Box>
        <TableContainer sx={{ overflow: "auto", minHeight: "200px" }}>
          <Table>
            <TableHead>{renderTableHead()}</TableHead>
            <TableBody>
              {dataLocation?.map((item, index) => renderTableBody(item, index))}
            </TableBody>
          </Table>
          {!dataLocation?.length && <Nodata />}
        </TableContainer>
      </Box>
      <LocationModal
        open={visibleAdd}
        dataEdit={dataEdit}
        handleClose={() => setVisibleAdd(false)}
        formikProp={formik}
        getList={getList}
      />
      {loading && <Loading />}
    </Box>
  );
};

export default Index;
