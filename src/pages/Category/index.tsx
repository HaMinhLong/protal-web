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
import { category, filter } from "features/category/categorySlice";
import createNotification from "components/Extended/Notification";
import CustomNode from "pages/Menu/treeNode/CustomNode";
import CustomDragPreview from "pages/Menu/treeNode/CustomDragPreview";
import Placeholder from "pages/Menu/treeNode/Placeholder";
import styles from "pages/Menu/css/App.module.css";
import CategoryDrawer from "components/DrawerPage/CategoryDrawer";
import Loading from "components/Extended/Loading";
import SearchForm from "pages/Category/SearchForm";

// TYPES IMPORT
import { CustomData } from "types/menuWebsite";
import { CategoryType } from "types/category";

const PAGE_SIZE = 1000;

const Index = () => {
  const dispatch = useDispatch();

  const categoryState = useSelector(category);
  const categories = categoryState.data.list;

  const [treeData, setTreeData] = useState<any>([]);
  const [isAddNew, setIsAddNew] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string | number>("");
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);

  useEffect(() => {
    setTreeData(categories);
  }, [categories]);

  const getList = () => {
    setLoading(true);
    const { query } = categoryState;
    const queryFilter = categoryState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      attributes:
        "id,text,droppable,parent,url,position,websiteId,categoryGroupId,isHome,status,createdAt",
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
      type: "category/fetch",
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

  const updatePosition = (updateItem: CategoryType) => {
    dispatch({
      type: "category/update",
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
          <Typography textAlign="center">Vui lòng chọn website</Typography>
        ) : (
          treeView
        )}
        {loading && <Loading />}
      </Box>
      <CategoryDrawer
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
