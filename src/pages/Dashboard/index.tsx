import React from "react";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";

const Index = () => {
  return (
    <MainCard content={false}>
      <Box sx={{ padding: 2 }}>
        <p>Thống kê</p>
      </Box>
    </MainCard>
  );
};

export default Index;
