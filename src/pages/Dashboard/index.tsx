import React from "react";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";

const index = () => {
  return (
    <MainCard title="search form" content={false}>
      <Box sx={{ padding: 2 }}>
        <p>Dashboard</p>
      </Box>
    </MainCard>
  );
};

export default index;
