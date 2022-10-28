/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface Props {
  tabWrapper: any;
  noContent?: boolean;
  handleChangeValue?: (value: number) => void;
}

const TabWrapper = ({ tabWrapper, noContent, handleChangeValue }: Props) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (handleChangeValue) handleChangeValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabWrapper?.map((item) => (
            <Tab label={item.label} {...a11yProps(item.value)} />
          ))}
        </Tabs>
      </Box>

      {!noContent &&
        tabWrapper?.map((item) => (
          <TabPanel value={value} index={item.value}>
            {item?.tab}
          </TabPanel>
        ))}
    </Box>
  );
};

export default TabWrapper;
