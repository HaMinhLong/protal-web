/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-static-element-interactions */
// THIRD IMPORT
import React, { useState, Dispatch, SetStateAction, useMemo } from "react";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NodeModel, useDragOver } from "@minoru/react-dnd-treeview";
import DescriptionIcon from "@mui/icons-material/Description";

// ICONS IMPORT
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// PROJECT IMPORT
import TypeIcon from "pages/Menu/treeNode/TypeIcon";
import styles from "pages/Menu/css/CustomNode.module.css";
import Chip from "components/Extended/Chip";
import { useDispatch } from "app/store";

// TYPES IMPORT
import { MenuType } from "types/menuWebsite";
import createNotification from "components/Extended/Notification";
import AlertDelete from "components/Extended/AlertDelete";

type Props = {
  node: any;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel["id"]) => void;
  selectedCategory: string | number;
  setSelectedCategory: Dispatch<SetStateAction<string | number>>;
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>;
  setIsAddNew: Dispatch<SetStateAction<boolean>>;
  treeData: any;
  getList: () => void;
};

const CustomNode = ({
  node,
  depth,
  isOpen,
  onToggle,
  selectedCategory,
  setSelectedCategory,
  setVisibleDrawer,
  setIsAddNew,
  treeData,
  getList,
}: Props) => {
  const dispatch = useDispatch();
  const { id, droppable, data } = node;

  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<MenuType>({});

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle(node.id);
  };

  const dragOverProps = useDragOver(id, isOpen, onToggle);

  const findChild = (idNode: number | string) => {
    if (treeData.find((item: any) => item.parent === idNode)) return true;
    return false;
  };

  const styleCell = {
    display: "inline-block",
    p: "4px 16px",
  };

  const handleRemove = (confirmDelete: boolean) => {
    setConfirmDelete(false);
    if (confirmDelete) {
      dispatch({
        type: "menuWebsite/delete",
        payload: {
          id: selectedCategory,
        },
        callback: (res) => {
          if (res?.success === true) {
            createNotification("success", res?.message);
            setSelectedCategory("");
            getList();
          } else if (res?.success === false) {
            createNotification("error", res?.message);
          }
        },
      });
    }
  };

  const customNode = useMemo(
    () => (
      <Box
        className={`tree-node ${styles.root}`}
        sx={{ mb: "10px" }}
        {...dragOverProps}
      >
        <div
          className={`${styles.expandIconWrapper} ${
            isOpen ? styles.isOpen : ""
          }`}
        >
          {findChild(node?.id) && (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              onClick={(e) => handleToggle(e)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <ArrowForwardIosIcon sx={{ width: "16px", height: "16px" }} />
            </div>
          )}
        </div>
        <div>
          {findChild(node?.id) ? (
            <TypeIcon droppable={droppable} fileType={data?.fileType} />
          ) : (
            <DescriptionIcon color="primary" />
          )}
        </div>
        <Box
          className={styles.labelGridItem}
          onClick={() => {
            setSelectedCategory(id);
          }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            borderBottom: `1.5px solid ${
              selectedCategory === id ? "#2196f3" : "#fff"
            }`,
            p: "2px 10px 0px",
            cursor: "pointer",
          }}
        >
          <Box>
            <Typography sx={{ ...styleCell }} color="primary">
              {node?.text}
            </Typography>
            <Typography sx={styleCell}>{node?.url}</Typography>
            <Typography sx={styleCell}>{node?.icon}</Typography>
            <Typography sx={styleCell}>{node?.website?.name}</Typography>
            <Typography sx={styleCell}>
              {node?.status ? (
                <Chip label="Active" size="small" chipColor="success" />
              ) : (
                <Chip label="Inactive" size="small" chipColor="error" />
              )}
            </Typography>
          </Box>
          <Box sx={{ ...styleCell, width: "200px" }}>
            <Button
              variant="outlined"
              endIcon={<EditIcon />}
              size="small"
              onClick={() => {
                console.log("hh");
                setVisibleDrawer(true);
                setSelectedCategory(node?.id);
                setIsAddNew(false);
              }}
            >
              Sửa
            </Button>
            <Button
              variant="outlined"
              color="error"
              endIcon={<DeleteIcon />}
              sx={{ ml: 1 }}
              size="small"
              onClick={() => {
                setConfirmDelete(true);
                setSelectedCategory(node?.id);
                setDataEdit(node);
              }}
            >
              Xóa
            </Button>
          </Box>
        </Box>
        {confirmDelete && (
          <AlertDelete
            name={dataEdit?.text}
            open={confirmDelete}
            handleClose={handleRemove}
          />
        )}
      </Box>
    ),
    [node, depth, isOpen, selectedCategory, dataEdit, confirmDelete, treeData]
  );

  return customNode;
};

export default CustomNode;
