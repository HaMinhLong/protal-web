import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch } from "app/store";

const Account = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    const params = {};
    dispatch({
      type: "account/fetch",
      payload: params,
      callback: (res: any) => {
        console.log("res", res);
      },
    });
  };

  return (
    <MainCard title="search form" content={false}>
      <Box sx={{ padding: 2 }}>
        <p>Account</p>
      </Box>
    </MainCard>
  );
};

export default Account;
