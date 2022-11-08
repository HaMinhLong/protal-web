// THIRD IMPORT
import { useState, useEffect } from "react";

// ICON IMPORT

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { collection, filter } from "features/collection/collectionSlice";
import createNotification from "components/Extended/Notification";
import CollectionModal from "components/ModalPage/CollectionModal";
import SearchForm from "pages/Collection/SearchForm";
import CollectionTable from "pages/Collection/CollectionTable";

// TYPES IMPORT
import { CollectionType } from "types/collection";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();

  const collectionState = useSelector(collection);

  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<CollectionType>({
    id: 0,
    name: "",
    description: "",
    createdAt: "",
    status: 0,
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const { query } = collectionState;
    const queryFilter = collectionState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,description,status,createdAt",
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
      type: "collection/fetch",
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
        <CollectionTable
          getList={getList}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          setVisibleDrawer={setVisibleDrawer}
          loading={loading}
          setLoading={setLoading}
        />
      </MainCard>
      <CollectionModal
        open={visibleDrawer}
        handleClose={() => setVisibleDrawer(false)}
        dataEdit={dataEdit}
        getList={getList}
      />
    </>
  );
};

export default Index;
