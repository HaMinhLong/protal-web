// THIRD IMPORT
import { useState, useEffect } from "react";
import { NotificationContainer } from "react-notifications";

// ICON IMPORT

// PROJECT IMPORT
import MainCard from "components/Cards/MainCard";
import { useDispatch, useSelector } from "app/store";
import { article, filter } from "features/article/articleSlice";
import createNotification from "components/Extended/Notification";
import CategoryGroupDrawer from "components/DrawerPage/CategoryGroupDrawer";
import SearchForm from "pages/Article/SearchForm";
import ArticleTable from "pages/Article/ArticleTable";

// TYPES IMPORT
import { ArticleType } from "types/article";

const PAGE_SIZE = Number(process.env.REACT_APP_PAGE_SIZE);

const Index = () => {
  const dispatch = useDispatch();

  const articleState = useSelector(article);

  const [loading, setLoading] = useState<boolean>(false);
  const [visibleDrawer, setVisibleDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<ArticleType>({
    id: 0,
    title: "",
    description: "",
    createdAt: "",
    status: 0,
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    setLoading(true);
    const { query } = articleState;
    const queryFilter = articleState.filter;

    let params = {
      filter: JSON.stringify({}),
      range: JSON.stringify([0, PAGE_SIZE]),
      sort: JSON.stringify(["createdAt", "DESC"]),
      attributes:
        "id,title,websiteId,categoryId,author,source,status,createdAt",
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
      type: "article/fetch",
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
      <ArticleTable
        getList={getList}
        dataEdit={dataEdit}
        setDataEdit={setDataEdit}
        setVisibleDrawer={setVisibleDrawer}
        loading={loading}
        setLoading={setLoading}
      />
    </MainCard>
  );
};

export default Index;
