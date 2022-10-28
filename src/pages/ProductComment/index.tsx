// THIRD IMPORT
import { useState, useEffect } from "react";

// ICON IMPORT

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import {
  productComment,
  filter,
} from "features/productComment/productCommentSlice";
import createNotification from "components/Extended/Notification";
import ProductCommentDrawer from "components/DrawerPage/ProductCommentDrawer";
import SearchForm from "pages/ProductComment/SearchForm";
import ProductCommentTable from "pages/ProductComment/ProductCommentTable";

// TYPES IMPORT
import { ProductCommentType } from "types/productComment";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();

  const productCommentState = useSelector(productComment);

  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<ProductCommentType>({});

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const { query } = productCommentState;
    const queryFilter = productCommentState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,name,rate,phone,websiteId,productId,comment,status,createdAt",
    };
    if (query?.filter !== "{}") {
      params = {
        ...params,
        filter: query?.filter,
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
      type: "productComment/fetch",
      payload: params,
      callback: (res: any) => {
        setLoading(false);
        if (res?.success === false) {
          createNotification("error", res?.message);
        }
      },
    });
  };

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
        <ProductCommentTable
          getList={getList}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          setVisibleDrawer={setVisibleDrawer}
          loading={loading}
          setLoading={setLoading}
        />
      </MainCard>

      <ProductCommentDrawer
        visible={visibleDrawer}
        closeDrawer={() => setVisibleDrawer(false)}
        dataEdit={dataEdit}
        getList={getList}
      />
    </>
  );
};

export default Index;
