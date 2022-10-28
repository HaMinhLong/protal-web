// THIRD IMPORT
import { useState } from "react";
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

// PROJECT IMPORT
import { ProductOrderType } from "types/order";
import AlertDelete from "components/Extended/AlertDelete";
import ProductOrderModal from "components/ModalPage/ProductOrderModal";

interface Props {
  formik: any;
}

const initialData: ProductOrderType = {
  id: 0,
  amount: 0,
  price: 0,
  negotiablePrice: 0,
  totalPrice: 0,
  productId: 0,
  productName: "",
  flag: "add",
};

const Index = ({ formik }: Props) => {
  const [visibleAdd, setVisibleAdd] = useState<boolean>(false);
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<ProductOrderType>(initialData);

  const renderTableHead = () => {
    const styleCell = { whiteSpace: "nowrap", fontWeight: "bold" };
    return (
      <TableRow>
        <TableCell sx={{ ...styleCell, width: "5%" }} align="center">
          #
        </TableCell>
        <TableCell sx={styleCell}>Tên sản phẩm</TableCell>
        <TableCell sx={styleCell}>Số lượng</TableCell>
        <TableCell sx={styleCell}>Giá</TableCell>
        <TableCell sx={styleCell}>Giá thỏa thuận</TableCell>
        <TableCell sx={styleCell}>Thành tiền</TableCell>
        <TableCell align="right" sx={styleCell}>
          #
        </TableCell>
      </TableRow>
    );
  };

  const renderTableBody = (item: ProductOrderType, index: number) => {
    return (
      <TableRow hover key={item.id}>
        <TableCell sx={{ width: "5%" }} align="center">
          <Typography variant="body2">{index + 1}</Typography>
        </TableCell>
        <TableCell
          sx={{ width: "20%", overflow: "hidden", maxWidth: 300 }}
          component="th"
          scope="row"
        >
          {item.productName}
        </TableCell>
        <TableCell>{item?.amount}</TableCell>
        <TableCell>{item?.price}</TableCell>
        <TableCell>{item?.negotiablePrice}</TableCell>
        <TableCell>{item?.totalPrice}</TableCell>
        <TableCell align="right">{renderButton(item)}</TableCell>
      </TableRow>
    );
  };

  const handleRemove = (confirmDelete: boolean) => {
    setConfirmDelete(false);
    if (confirmDelete) {
      const newData = formik?.values?.productOrders?.map((element) => {
        return element.id === dataEdit.id
          ? { ...element, flag: "delete" }
          : element;
      });
      formik.setFieldValue("productOrders", newData);
    }
  };

  const renderButton = (item: ProductOrderType) => {
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
    <Box sx={{ mt: 1, mb: 1 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="outlined"
          color="success"
          sx={{ mb: "10px" }}
          onClick={() => {
            setVisibleAdd(true);
            setDataEdit(initialData);
          }}
          disabled={!formik?.values?.websiteId}
        >
          Thêm sản phẩm
        </Button>
      </Box>
      <Box>
        <TableContainer sx={{ overflow: "auto" }}>
          <Table>
            <TableHead>{renderTableHead()}</TableHead>
            <TableBody>
              {formik?.values?.productOrders
                ?.filter((item) => item.flag !== "delete")
                ?.map((item, index) => renderTableBody(item, index))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      {confirmDelete && (
        <AlertDelete
          name={dataEdit?.productName}
          open={confirmDelete}
          handleClose={handleRemove}
        />
      )}
      <ProductOrderModal
        open={visibleAdd}
        dataEdit={dataEdit}
        handleClose={() => setVisibleAdd(false)}
        formikProp={formik}
      />
    </Box>
  );
};

export default Index;
