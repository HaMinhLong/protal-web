// THIRD IMPORT
import React, { useState } from "react";
import { Box } from "@mui/material";

// PROJECT IMPORT
import { useDispatch } from "app/store";
import MainCard from "components/Cards/MainCard";
import { createArticle } from "api/article";

const Article = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState<File | string>("");
  const handleChangeFile = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    const file: File = (target.files as FileList)[0];
    setFile(file);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const addData = new FormData();
    addData.append("title", "title");
    addData.append("description", "description");
    addData.append("status", "1");
    addData.append("image", file);

    createArticle(addData);
  };
  return (
    <MainCard title="" content={false}>
      <Box sx={{ padding: 2 }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="file"
            name="file"
            onChange={(e) => handleChangeFile(e)}
          />
          <button type="submit">Lưu lại</button>
        </form>
      </Box>
    </MainCard>
  );
};

export default Article;
