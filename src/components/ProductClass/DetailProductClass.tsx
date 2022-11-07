// THIRD IMPORT
import React from "react";
import {
  Box,
  Table,
  TableHead,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Typography,
  TextField,
} from "@mui/material";

// PROJECT IMPORT
import { ProductPricesType } from "types/product";

interface Props {
  formikProp: any;
}

const DetailProductClass = ({ formikProp }: Props) => {
  const renderTableHead = () => {
    const styleCell = {
      whiteSpace: "nowrap",
      fontWeight: "bold",
    };
    return (
      <TableRow>
        <TableCell sx={styleCell}>Phân loại 1</TableCell>
        <TableCell sx={styleCell}>
          <Box display="flex" justifyContent="space-between">
            <Box sx={{ width: "25%" }}>Phân loại 2</Box>
            <Box sx={{ width: "25%" }}>Giá</Box>
            <Box sx={{ width: "25%" }}>Giá sale</Box>
            <Box sx={{ width: "25%" }}>Số lượng</Box>
          </Box>
        </TableCell>
      </TableRow>
    );
  };

  const styleTableCell = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  };

  const renderInputTable = (
    class1Id: number,
    class2Id: number,
    type: string
  ) => {
    const data: ProductPricesType = formikProp?.values?.productPrices?.find(
      (item) =>
        item?.productClass1Id === class1Id && item?.productClass2Id === class2Id
    );
    return (
      <TextField
        size="small"
        fullWidth
        variant="standard"
        value={data?.[type]}
        type="number"
        onChange={(e) => {
          const value = Number(e.target.value);
          if (data) {
            const newValue = formikProp?.values?.productPrices?.map((item) => {
              if (item?.id === data?.id)
                return {
                  ...data,
                  price: type === "price" ? value : item?.price,
                  negotiablePrice:
                    type === "negotiablePrice" ? value : item?.negotiablePrice,
                  amount: type === "amount" ? value : item?.amount,
                };
              return item;
            });
            formikProp.setFieldValue("productPrices", newValue);
          } else {
            const newValue = {
              id: Math.floor(Math.random() * (10000000 - 100000 + 1)),
              price: type === "price" ? value : 0,
              negotiablePrice: type === "negotiablePrice" ? value : 0,
              amount: type === "amount" ? value : 0,
              productClass1Id: class1Id,
              productClass2Id: class2Id,
              flag: "add",
            };
            formikProp.setFieldValue(
              "productPrices",
              formikProp?.values?.productPrices.concat([newValue])
            );
          }
        }}
      />
    );
  };

  const renderTableBody = (item: any) => {
    return (
      <TableRow hover key={item.id}>
        <TableCell
          sx={{
            maxWidth: 100,
            ...styleTableCell,
          }}
          component="th"
          scope="row"
        >
          {item?.name}
        </TableCell>

        <TableCell>
          {formikProp?.values?.productClass2s
            ?.filter((i) => i?.flag !== "delete")
            ?.map((element, index) => (
              <Box
                display="flex"
                sx={{ mt: index > 0 ? 2 : 0 }}
                justifyContent="space-between"
                key={index}
              >
                <Box sx={{ width: "25%" }}>
                  <Typography>{element?.name}</Typography>
                </Box>
                <Box sx={{ width: "25%", pr: 2 }}>
                  {renderInputTable(item?.id, element?.id, "price")}
                </Box>

                <Box sx={{ width: "25%", pr: 2 }}>
                  {renderInputTable(item?.id, element?.id, "negotiablePrice")}
                </Box>

                <Box sx={{ width: "25%", pr: 2 }}>
                  {renderInputTable(item?.id, element?.id, "amount")}
                </Box>
              </Box>
            ))}
        </TableCell>
      </TableRow>
    );
  };

  return (
    <Box>
      <TableContainer sx={{ overflow: "auto" }}>
        <Table>
          <TableHead>{renderTableHead()}</TableHead>
          <TableBody>
            {formikProp?.values?.productClass1s
              ?.filter((item) => item?.flag !== "delete")
              ?.map((item) => renderTableBody(item))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DetailProductClass;
