// THIRD IMPORT
import { useState, useEffect } from "react";

// ICON IMPORT

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { website, filter } from "features/website/websiteSlice";
import createNotification from "components/Extended/Notification";

import WebsiteModal from "components/ModalPage/WebsiteModal";
import SearchForm from "pages/Website/SearchForm";
import WebsiteTable from "pages/Website/WebsiteTable";

// TYPES IMPORT
import { WebsiteType } from "types/website";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();

  const websiteState = useSelector(website);

  const [loading, setLoading] = useState(false);
  const [visibleDrawer, setVisibleDrawer] = useState(false);
  const [dataEdit, setDataEdit] = useState<WebsiteType>({
    id: 0,
    name: "",
    description: "",
    logo: "",
    websiteGroupId: 0,
    createdAt: "",
    status: 0,
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const { query } = websiteState;
    const queryFilter = websiteState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes: "id,name,description,logo,websiteGroupId,status,createdAt",
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
      type: "website/fetch",
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
        <WebsiteTable
          getList={getList}
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          setVisibleDrawer={setVisibleDrawer}
          loading={loading}
          setLoading={setLoading}
        />
      </MainCard>

      <WebsiteModal
        visible={visibleDrawer}
        closeDrawer={() => setVisibleDrawer(false)}
        dataEdit={dataEdit}
        getList={getList}
      />
    </>
  );
};

export default Index;
