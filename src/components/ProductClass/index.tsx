// THIRD IMPORT
import { useState } from "react";
import { Grid, Box, Button, Typography, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// PROJECT IMPORT
import { ProductClass } from "types/product";

interface Props {
  formikProp: any;
}

const Index = ({ formikProp }: Props) => {
  const [productClass1, setProductClass1] = useState<ProductClass[]>(
    formikProp?.values?.productClass1s
  );
  const [productClass2, setProductClass2] = useState<ProductClass[]>(
    formikProp?.values?.productClass2s
  );

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

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} lg={4}>
        <Box sx={{ ...styleBox }}>
          <Typography sx={{ ...styleText }}>Nhóm phân loại 1</Typography>

          {productClass1?.map((item) => (
            <TextField
              size="small"
              fullWidth
              name="name"
              variant="standard"
              value={item?.name}
              key={item?.id}
              sx={{ mb: 1 }}
              onChange={(e) => {
                const newValue = productClass1?.map((ele) => {
                  if (ele?.id === item?.id)
                    return { ...ele, name: e.target.value };
                  return ele;
                });
                setProductClass1(newValue);
                formikProp.setFieldValue("productClass1s", newValue);
              }}
            />
          ))}

          <Button
            sx={{ mt: 1 }}
            fullWidth
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={() => {
              const newValue = productClass1.concat([
                {
                  id: Math.floor(
                    Math.random() * (100000000000 - 1000000000 + 1)
                  ),
                  name: `Loại ${productClass1?.length + 1}`,
                  flag: "add",
                },
              ]);
              setProductClass1(newValue);
              formikProp.setFieldValue("productClass1s", newValue);
            }}
            disabled={productClass1?.length === 10}
          >
            Thêm phân loại ({productClass1?.length}/10)
          </Button>
        </Box>

        <Box sx={{ ...styleBox }}>
          <Typography sx={{ ...styleText }}>Nhóm phân loại 2</Typography>

          {productClass2?.map((item) => (
            <TextField
              size="small"
              fullWidth
              name="name"
              value={item?.name}
              variant="standard"
              key={item?.id}
              sx={{ mb: 1 }}
              onChange={(e) => {
                const newValue = productClass2?.map((ele) => {
                  if (ele?.id === item?.id)
                    return { ...ele, name: e.target.value };
                  return ele;
                });
                setProductClass2(newValue);
                formikProp.setFieldValue("productClass2s", newValue);
              }}
            />
          ))}

          <Button
            sx={{ mt: 1 }}
            fullWidth
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={() => {
              const newValue = productClass2.concat([
                {
                  id: Math.floor(
                    Math.random() * (100000000000 - 1000000000 + 1)
                  ),
                  name: `Loại ${productClass2?.length + 1}`,
                  flag: "add",
                },
              ]);
              setProductClass2(newValue);
              formikProp.setFieldValue("productClass2s", newValue);
            }}
            disabled={productClass2?.length === 10}
          >
            Thêm phân loại ({productClass2?.length}/10)
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        2
      </Grid>
    </Grid>
  );
};

export default Index;
