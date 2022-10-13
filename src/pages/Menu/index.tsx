// THIRD IMPORT
import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { menuWebsite, filter } from "features/menuWebsite/menuWebsiteSlice";
import createNotification from "components/Extended/Notification";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

interface ItemType {
  id: number;
  name: string;
  description: string;
  message: string;
}

const Index = () => {
  const dispatch = useDispatch();

  const menuState = useSelector(menuWebsite);
  const menus = menuState.data.list;
  const pagination = menuState.data.pagination;

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const { query } = menuState;
    const queryFilter = menuState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,text,droppable,parent,position,websiteId,status,createdAt",
    };

    dispatch(filter(queryFilter));
    dispatch({
      type: "menuWebsite/fetch",
      payload: params,
      callback: (res: any) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification("error", res?.message);
        }
      },
    });
  };

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
