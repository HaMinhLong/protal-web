/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import React, { useState, useEffect } from "react";
import {
  TextField,
  FormHelperText,
  Popover,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { TreeView, useTreeItem, TreeItem } from "@mui/lab";
import clsx from "clsx";
import { useTheme } from "@mui/material/styles";

// ICONS IMPORT
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ErrorIcon from "@mui/icons-material/Error";

// PROJECT IMPORT
import { useDispatch } from "app/store";

const PAGE_SIZE = 1000;

interface Props {
  formik: any;
  setFieldValue: any;
  addOrEdit: boolean;
}

const CustomContent = React.forwardRef(function CustomContent(props, ref: any) {
  const {
    classes,
    className,
    label,
    nodeId,
    icon: iconProp,
    expansionIcon,
    displayIcon,
  }: any = props;

  const {
    disabled,
    expanded,
    selected,
    focused,
    handleExpansion,
    handleSelection,
    preventSelection,
  } = useTreeItem(nodeId);

  const icon = iconProp || expansionIcon || displayIcon;

  const handleMouseDown = (event) => {
    preventSelection(event);
  };

  const handleExpansionClick = (event) => {
    handleExpansion(event);
  };

  const handleSelectionClick = (event) => {
    handleSelection(event);
  };

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      className={clsx(className, classes.root, {
        [classes.expanded]: expanded,
        [classes.selected]: selected,
        [classes.focused]: focused,
        [classes.disabled]: disabled,
      })}
      onMouseDown={handleMouseDown}
      ref={ref}
      style={{ padding: "3px 0" }}
    >
      <div onClick={handleExpansionClick} className={classes.iconContainer}>
        {icon}
      </div>
      <Typography
        onClick={handleSelectionClick}
        component="div"
        className={classes.label}
      >
        {label}
      </Typography>
    </div>
  );
});

const CustomTreeItem = (props) => (
  <TreeItem ContentComponent={CustomContent} {...props} />
);

const CategorySelect = ({ formik, setFieldValue, addOrEdit }: Props) => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const matchDownXL = useMediaQuery(theme.breakpoints.down("xl"));
  const matchDownLG = useMediaQuery(theme.breakpoints.down("lg"));

  const [lists, setLists] = useState<any>([]);

  useEffect(() => {
    if (!formik?.values?.websiteId) {
      setLists([]);
    } else {
      getList();
    }
  }, [formik?.values?.websiteId]);

  const children = (p, c) => {
    if (p.hasOwnProperty("children")) {
      p.children.push(c);
    } else {
      p.children = [c];
    }
  };

  const getList = () => {
    dispatch({
      type: "category/fetchLazyLoading",

      payload: {
        filter: JSON.stringify({
          status: 1,
          websiteId: formik?.values?.websiteId,
        }),
        range: JSON.stringify([0, PAGE_SIZE]),
      },
      callback: (res) => {
        const { list } = res?.results;
        for (let i = 0; i < list.length - 1; i++) {
          const a = list[i];
          for (let j = i + 1; j < list.length; j++) {
            const b = list[j];
            if (a.id === b.parent) {
              children(a, b);
            } else if (b.id === a.parent) {
              children(b, a);
            }
          }
        }

        const result = list.filter((x) => !x.parent);
        setLists(result);
      },
    });
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [equipmentId, setEquipmentId] = useState("");
  const [categoryId, setCategoryId] = useState(
    formik?.values?.categoryName || ""
  );

  useEffect(() => {
    setCategoryId(formik?.values?.categoryName || "");
  }, [formik?.values?.categoryName]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const renderTree = (nodes) => (
    <CustomTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.text}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </CustomTreeItem>
  );

  return (
    <>
      <TextField
        size="small"
        required={false}
        label={
          addOrEdit ? (
            <span className="input-label">
              Chuyên mục <span> *</span>
            </span>
          ) : (
            "Chuyên mục"
          )
        }
        name="categoryId"
        id="categoryId"
        defaultValue={categoryId}
        value={categoryId}
        onClick={handleClick}
        sx={{ width: "100%" }}
        error={formik.touched.categoryId && Boolean(formik.errors?.categoryId)}
      />
      {formik.touched.categoryId && formik.errors.categoryId && (
        <FormHelperText error className="error-custom">
          <ErrorIcon
            fontSize="small"
            sx={{ mr: 0.5, width: "18px", height: "18px" }}
          />
          {formik.errors.categoryId}
        </FormHelperText>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <TreeView
          aria-label="icon expansion"
          defaultSelected={equipmentId}
          selected={equipmentId}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          onNodeSelect={(e, id) => {
            setEquipmentId(id);
            setFieldValue("categoryId", id);
            setFieldValue("categoryName", e.target.innerText);
            setCategoryId(e.target.innerText);
            handleClose();
          }}
          sx={{
            maxHeight: 300,
            flexGrow: 1,
            width: matchDownLG ? "445px" : matchDownXL ? "240px" : "300px",
            overflowY: "auto",
            p: "5px 10px",
          }}
        >
          {lists?.map((item) => renderTree(item))}
        </TreeView>
      </Popover>
    </>
  );
};

export default CategorySelect;
