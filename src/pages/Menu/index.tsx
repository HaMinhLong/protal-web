// THIRD IMPORT
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box } from "@mui/material";
import { DndProvider } from "react-dnd";
import {
  Tree,
  NodeModel,
  DragLayerMonitorProps,
  getBackendOptions,
  MultiBackend,
} from "@minoru/react-dnd-treeview";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { menuWebsite, filter } from "features/menuWebsite/menuWebsiteSlice";
import createNotification from "components/Extended/Notification";
import { CustomData } from "types/menuWebsite";
import CustomNode from "pages/Menu/treeNode/CustomNode";
import CustomDragPreview from "pages/Menu/treeNode/CustomDragPreview";
import Placeholder from "pages/Menu/treeNode/Placeholder";
import styles from "pages/Menu/css/App.module.css";

const PAGE_SIZE = 1000;

const Index = () => {
  const dispatch = useDispatch();

  const menuState = useSelector(menuWebsite);
  const menus = menuState.data.list;
  const pagination = menuState.data.pagination;

  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | number>("");
  const [addNew, setAddNew] = useState<boolean>(false);

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
      attributes:
        "id,text,droppable,parent,position,websiteId,status,createdAt",
    };
    if (query?.filter) {
      params = {
        ...params,
        filter: query?.filter,
      };
    }
    if (query?.range) {
      params = {
        ...params,
        range: query?.range,
      };
    }

    console.log("params", params);

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

  const ref: any = useRef(null);
  const handleOpenAll = () => ref?.current?.openAll();
  const handleCloseAll = () => ref?.current?.closeAll();

  const handleDrop = (newTree: any, options: any) => {
    const { dragSourceId, dropTargetId } = options;

    let updateItem: any = {};
    let countPosition = 0;

    for (let i = 0; i < newTree?.length; i += 1) {
      const item = newTree[i];
      if (dropTargetId === item?.parent) {
        countPosition += 1;
        if (dragSourceId === item?.id) {
          updateItem = { ...item, position: countPosition };
          break;
        }
      }
    }
  };

  const treeView = useMemo(
    () => (
      <div className={styles.app}>
        <DndProvider backend={MultiBackend} options={getBackendOptions()}>
          <Tree
            tree={menus}
            ref={ref}
            rootId={0}
            sort={false}
            insertDroppableFirst={false}
            initialOpen
            render={(
              node: NodeModel<CustomData>,
              { depth, isOpen, onToggle }
            ) => (
              <CustomNode
                treeData={menus}
                node={node}
                depth={depth}
                isOpen={isOpen}
                onToggle={onToggle}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setAddNew={setAddNew}
              />
            )}
            dragPreviewRender={(
              monitorProps: DragLayerMonitorProps<CustomData>
            ) => <CustomDragPreview monitorProps={monitorProps} />}
            onDrop={handleDrop}
            canDrop={(tree, { dragSource, dropTargetId }) => {
              if (dragSource?.id === dropTargetId) {
                return false;
              }
              return true;
            }}
            dropTargetOffset={5}
            placeholderRender={(node, { depth }) => (
              <Placeholder depth={depth} />
            )}
            classes={{
              root: styles.treeRoot,
              draggingSource: styles.draggingSource,
              dropTarget: styles.dropTarget,
              placeholder: styles.placeholderContainer,
            }}
          />
        </DndProvider>
      </div>
    ),
    [menus, selectedCategory, ref?.current]
  );

  console.log("menus", menus);

  return (
    <MainCard title="Tìm kiếm" content={false}>
      <Box sx={{ padding: 2 }}>{treeView}</Box>
    </MainCard>
  );
};

export default Index;
