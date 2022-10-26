/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
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
import CustomNode from "pages/Menu/treeNode/CustomNode";
import CustomDragPreview from "pages/Menu/treeNode/CustomDragPreview";
import Placeholder from "pages/Menu/treeNode/Placeholder";
import styles from "pages/Menu/css/App.module.css";
import SearchForm from "pages/Menu/SearchForm";
import MenuDrawer from "components/DrawerPage/MenuDrawer";
import Loading from "components/Extended/Loading";

// TYPES IMPORT
import { CustomData, MenuType } from "types/menuWebsite";

const PAGE_SIZE = 1000;

const Index = () => {
  const dispatch = useDispatch();

  const menuState = useSelector(menuWebsite);
  const menus = menuState.data.list;

  const [treeData, setTreeData] = useState<any>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | number>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [isAddNew, setIsAddNew] = useState<boolean>(false);

  useEffect(() => {
    setTreeData(menus);
  }, [menus]);

  const getList = () => {
    setLoading(true);
    const { query } = menuState;
    const queryFilter = menuState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      attributes:
        "id,text,droppable,parent,icon,url,position,websiteId,status,createdAt",
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

    updatePosition(updateItem);
    setTreeData(newTree);
  };

  const updatePosition = (updateItem: MenuType) => {
    dispatch({
      type: "menuWebsite/update",
      payload: {
        id: updateItem?.id,
        params: {
          ...updateItem,
          textOld: updateItem?.text,
        },
      },
      callback: (res) => {
        if (res?.success) {
          getList();
        } else {
          createNotification("error", res.message);
        }
        setLoading(false);
      },
    });
  };

  const treeView = useMemo(
    () => (
      <div className={styles.app}>
        <DndProvider backend={MultiBackend} options={getBackendOptions()}>
          <Tree
            tree={treeData}
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
                treeData={treeData}
                node={node}
                depth={depth}
                isOpen={isOpen}
                onToggle={onToggle}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                setVisibleDrawer={setVisibleDrawer}
                setIsAddNew={setIsAddNew}
                getList={getList}
                isMenu
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
    [treeData, selectedCategory, ref?.current]
  );

  return (
    <MainCard
      title={
        <SearchForm
          setIsAddNew={setIsAddNew}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          setVisibleDrawer={setVisibleDrawer}
          setLoading={setLoading}
        />
      }
      content={false}
    >
      <Box sx={{ padding: 2, position: "relative" }}>
        {!treeData?.length ? (
          <Typography textAlign="center">
            Vui lòng chọn website và vị trí website
          </Typography>
        ) : (
          treeView
        )}
        {loading && <Loading />}
      </Box>
      <MenuDrawer
        isAddNew={isAddNew}
        visible={visibleDrawer}
        closeDrawer={() => setVisibleDrawer(false)}
        dataEdit={{ id: selectedCategory }}
        getList={getList}
      />
    </MainCard>
  );
};

export default Index;
