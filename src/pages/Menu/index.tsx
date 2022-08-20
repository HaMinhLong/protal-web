// THIRD IMPORT
import React, { FC, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch } from "app/store";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

interface ItemType {
  id: number;
  name: string;
  description: string;
  message: string;
}

const Index = () => {
  const dispatch = useDispatch();

  const [menu, setMenus] = useState<ItemType[]>([
    {
      id: 1,
      name: "shrek",
      description: "description",
      message: "description description description",
    },
    {
      id: 2,
      name: "fiona",
      description: "description",
      message: "description description description",
    },
    {
      id: 3,
      name: "fiona 0",
      description: "description",
      message: "description description description",
    },
    {
      id: 4,
      name: "fiona1",
      description: "description",
      message: "description description description",
    },
    {
      id: 5,
      name: "fiona 2",
      description: "description",
      message: "description description description",
    },
  ]);

  return (
    <MainCard title="Tìm kiếm" content={false}>
      <Box sx={{ padding: 2 }}>
        <ReactSortable
          list={menu}
          setList={setMenus}
          onChange={(e) => console.log("e", e)}
        >
          {menu.map((item) => (
            <div key={item.id}>
              {item.name} {item.description} {item.message}
            </div>
          ))}
        </ReactSortable>
      </Box>
    </MainCard>
  );
};

export default Index;
