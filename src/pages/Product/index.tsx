// THIRD IMPORT
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch } from "app/store";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();
  return (
    <MainCard title="Tìm kiếm" content={false}>
      <Box sx={{ padding: 2 }}>
        <p>Sản phẩm</p>
      </Box>
    </MainCard>
  );
};

export default Index;
