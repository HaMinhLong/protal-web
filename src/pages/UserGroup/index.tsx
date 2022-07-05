// THIRD IMPORT
import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch } from "app/store";
import { FilterValues } from "types/filterValue";

const PAGE_SIZE = process.env.REACT_APP_PAGE_SIZE;

const initialFilters: FilterValues = {
  filter: "",
  range: "",
  sort: "",
  attributes: "",
};

let params = {
  filter: JSON.stringify({}),
  range: JSON.stringify([0, PAGE_SIZE]),
  sort: JSON.stringify(["createdAt", "DESC"]),
  attributes: "id,name,description,status,createdAt",
};

const Index = () => {
  const dispatch = useDispatch();

  const renderSearchForm = () => {
    return <span>Tỉm kiếm</span>;
  };

  return (
    <MainCard title={renderSearchForm()} content={false}>
      <Box sx={{ padding: 2 }}>
        <p>Nhóm tài khoản</p>
      </Box>
    </MainCard>
  );
};

export default Index;
