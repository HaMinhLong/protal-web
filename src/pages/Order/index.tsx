/* eslint-disable react-hooks/exhaustive-deps */
// THIRD IMPORT
import { useState, useEffect } from "react";
import { Box } from "@mui/material";

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { order, filter } from "features/order/orderSlice";
import createNotification from "components/Extended/Notification";
import OrderModal from "components/ModalPage/OrderModal";
import SearchForm from "pages/Order/SearchForm";
import OrderTable from "pages/Order/OrderTable";

// TYPES IMPORT
import { OrderType } from "types/order";
import TabWrapper from "components/Extended/TabWrapper";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();

  const orderState = useSelector(order);

  const [orderStatus, setOrderStatus] = useState(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<OrderType>({
    id: 0,
    name: "",
    description: "",
    createdAt: "",
    status: 0,
  });

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    getList();
  }, [orderStatus]);

  const getList = () => {
    setLoading(true);
    const { query } = orderState;
    const queryFilter = orderState.filter;

    let params = {
      filter: JSON.stringify({ status: orderStatus }),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,name,phone,email,totalPrice,address,description,status,createdAt",
    };
    if (query?.filter !== "{}") {
      params = {
        ...params,
        filter: JSON.stringify({
          ...JSON.parse(query?.filter),
          status: orderStatus,
        }),
      };
    }
    if (query?.range !== "{}") {
      params = {
        ...params,
        range: query?.range,
      };
    }
    if (query?.sort !== "{}") {
      params = {
        ...params,
        sort: query?.sort,
      };
    }

    dispatch(filter(queryFilter));
    dispatch({
      type: "order/fetch",
      payload: params,
      callback: (res: any) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification("error", res?.message);
        }
      },
    });
  };

  const tabWrapper = [
    {
      value: 1,
      label: "Đặt đơn hàng thành công",
    },
    {
      value: 2,
      label: "Tiếp nhận đơn hàng",
    },
    {
      value: 3,
      label: "Đóng gói đơn hàng",
    },
    {
      value: 4,
      label: "Vận chuyển đơn hàng",
    },
    {
      value: 5,
      label: "Giao hàng thành công",
    },
  ];

  return (
    <>
      <MainCard
        title={
          <SearchForm
            setDataEdit={setDataEdit}
            setVisibleDrawer={setVisibleDrawer}
            setLoading={setLoading}
          />
        }
        content={false}
      >
        <Box sx={{ p: "0px 20px" }}>
          <TabWrapper
            tabWrapper={tabWrapper}
            noContent
            handleChangeValue={(value) => setOrderStatus(value + 1)}
          />
        </Box>
        <OrderTable
          getList={getList}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          setVisibleDrawer={setVisibleDrawer}
          loading={loading}
          setLoading={setLoading}
        />
      </MainCard>

      <OrderModal
        open={visibleDrawer}
        handleClose={() => setVisibleDrawer(false)}
        dataEdit={dataEdit}
        getList={getList}
      />
    </>
  );
};

export default Index;
