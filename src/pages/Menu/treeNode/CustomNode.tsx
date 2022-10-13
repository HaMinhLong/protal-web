/* eslint-disable jsx-a11y/no-static-element-interactions */
// THIRD IMPORT
import React, { Dispatch, SetStateAction, useMemo } from "react";
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NodeModel, useDragOver } from "@minoru/react-dnd-treeview";
import DescriptionIcon from "@mui/icons-material/Description";

// PROJECT IMPORT
import { CustomData } from "types/menuWebsite";
import TypeIcon from "pages/Menu/treeNode/TypeIcon";
import styles from "pages/Menu/css/CustomNode.module.css";

type Props = {
  node: NodeModel<CustomData>;
  depth: number;
  isOpen: boolean;
  onToggle: (id: NodeModel["id"]) => void;
  selectedCategory: string | number;
  setSelectedCategory: Dispatch<SetStateAction<string | number>>;
  setAddNew: Dispatch<SetStateAction<boolean>>;
  treeData: any;
};

const CustomNode = ({
  node,
  depth,
  isOpen,
  onToggle,
  selectedCategory,
  setSelectedCategory,
  setAddNew,
  treeData,
}: Props) => {
  const { id, droppable, data } = node;
  const indent = depth * 24;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle(node.id);
  };

  const dragOverProps = useDragOver(id, isOpen, onToggle);

  const findChild = (idNode: number | string) => {
    if (treeData.find((item: any) => item.parent === idNode)) return true;
    return false;
  };

  const customNode = useMemo(
    () => (
      <div
        className={`tree-node ${styles.root}`}
        style={{ paddingInlineStart: indent }}
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
            <DescriptionIcon />
          )}
        </div>
        <div className={styles.labelGridItem}>
          <Typography
            variant="body2"
            onClick={() => {
              setSelectedCategory(id);
              setAddNew(false);
            }}
            sx={{
              background: `${selectedCategory === id ? "#2196f3" : "#fff"}`,
              p: "2px 10px",
              display: "inline-block",
              borderRadius: "8px",
              color: `${selectedCategory === id ? "#fff" : "#616161"}`,
              cursor: "pointer",
            }}
          >
            {node?.text}
          </Typography>
        </div>
      </div>
    ),
    [node, depth, isOpen, selectedCategory, treeData]
  );

  return customNode;
};

export default CustomNode;
