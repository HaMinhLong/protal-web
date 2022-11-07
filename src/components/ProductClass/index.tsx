// THIRD IMPORT
import { Grid, Box, Button, Typography, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

// PROJECT IMPORT
import DetailProductClass from "components/ProductClass/DetailProductClass";

interface Props {
  formikProp: any;
}

const Index = ({ formikProp }: Props) => {
  const styleBox = {
    p: "10px",
    mb: "10px",
    border: "1px solid #bbb",
  };

  const styleText = {
    pb: "5px",
    mb: "10px",
    textAlign: "center",
    borderBottom: "1px solid #bbb",
  };

  const productClassArr = [{ id: 1 }, { id: 2 }];

  const deleteProductClass = (type: number, id: number) => {
    const newValue = formikProp?.values?.[`productClass${type}s`]?.map(
      (item) => {
        if (item?.id === id) return { ...item, flag: "delete" };
        return item;
      }
    );
    const newProductPrices = formikProp?.values?.["productPrices"]?.map(
      (item) => {
        if (item?.[`productClass${type}Id`] === id)
          return { ...item, flag: "delete" };
        return item;
      }
    );

    formikProp.setFieldValue(`productPrices`, newProductPrices);
    formikProp.setFieldValue(`productClass${type}s`, newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={4}>
        {productClassArr?.map((element) => {
          const listProductClass =
            formikProp?.values?.[`productClass${element?.id}s`];
          return (
            <Box sx={{ ...styleBox }} key={element?.id}>
              <Typography sx={{ ...styleText }}>
                Nhóm phân loại {element?.id}
              </Typography>

              {listProductClass
                ?.filter((item) => item?.flag !== "delete")
                ?.map((item) => (
                  <Box display="flex" key={item?.id}>
                    <TextField
                      size="small"
                      fullWidth
                      name="name"
                      variant="standard"
                      value={item?.name}
                      sx={{ mb: 1 }}
                      onChange={(e) => {
                        const newValue = listProductClass?.map((ele) => {
                          if (ele?.id === item?.id)
                            return { ...ele, name: e.target.value };
                          return ele;
                        });
                        formikProp.setFieldValue(
                          `productClass${element?.id}s`,
                          newValue
                        );
                      }}
                    />
                    <IconButton
                      aria-label="delete product class"
                      edge="end"
                      onClick={() => deleteProductClass(element?.id, item?.id)}
                    >
                      <DeleteIcon color="error" fontSize="small" />
                    </IconButton>
                  </Box>
                ))}

              <Button
                sx={{ mt: 1 }}
                fullWidth
                startIcon={<AddIcon />}
                variant="outlined"
                onClick={() => {
                  const newValue = [
                    {
                      id: Math.floor(Math.random() * (10000000 - 100000 + 1)),
                      name: `Loại ${listProductClass?.length + 1}`,
                      flag: "add",
                    },
                  ].concat(listProductClass);
                  formikProp.setFieldValue(
                    `productClass${element?.id}s`,
                    newValue
                  );
                }}
                disabled={listProductClass?.length === 10}
              >
                Thêm phân loại ({listProductClass?.length}/10)
              </Button>
            </Box>
          );
        })}
      </Grid>
      <Grid item xs={12} md={8} lg={8}>
        <DetailProductClass formikProp={formikProp} />
      </Grid>
    </Grid>
  );
};

export default Index;
