// THIRD IMPORT
import { useMemo } from "react";
import { DragLayerMonitorProps } from "@minoru/react-dnd-treeview";

// PROJECT IMPORT
import { CustomData } from "types/menuWebsite";
import TypeIcon from "pages/Menu/treeNode/TypeIcon";
import styles from "pages/Menu/css/CustomDragPreview.module.css";

type Props = {
  monitorProps: DragLayerMonitorProps<CustomData>;
};

const CustomDragPreview = ({ monitorProps }: Props) => {
  const customDragPreview = useMemo(() => {
    const item = monitorProps.item;
    return (
      <div className={styles.root}>
        <div className={styles.icon}>
          <TypeIcon
            droppable={item.droppable}
            fileType={item?.data?.fileType}
          />
        </div>
        <div className={styles.label}>{item.text}</div>
      </div>
    );
  }, [monitorProps]);

  return customDragPreview;
};

export default CustomDragPreview;
