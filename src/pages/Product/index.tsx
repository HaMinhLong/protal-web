// THIRD IMPORT
import { useState, useEffect } from "react";

// ICON IMPORT

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { product, filter } from "features/product/productSlice";
import createNotification from "components/Extended/Notification";
import ProductModal from "components/ModalPage/ProductModal";
import SearchForm from "pages/Product/SearchForm";
import ProductTable from "pages/Product/ProductTable";

// TYPES IMPORT
import { ProductType } from "types/product";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();

  const productState = useSelector(product);

  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<ProductType>({
    productClass1s: [],
    productClass2s: [],
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const { query } = productState;
    const queryFilter = productState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,name,websiteId,categoryId,price,producerId,supplierId,status,createdAt",
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
      type: "product/fetch",
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
      <ProductTable
        getList={getList}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
        setVisibleDrawer={setVisibleDrawer}
        loading={loading}
        setLoading={setLoading}
      />

      <ProductModal
        open={visibleDrawer}
        dataEdit={dataEdit}
        handleClose={() => setVisibleDrawer(false)}
        getList={getList}
      />
    </MainCard>
  );
};

export default Index;
