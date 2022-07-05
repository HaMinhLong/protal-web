// THIRD IMPORT
import { useNavigate } from "react-router-dom";

// PROJECT IMPORT
import "assets/scss/404.scss";
import { DASHBOARD_PATH, ARTICLE_PATH } from "config";
import useAuth from "hooks/useAuth";

const PageNotFound = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log("user", user);
  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="h2">Có vẻ như bạn đang bị lạc</h3>

                <p>trang bạn đang tìm kiếm không có sẵn!</p>

                <button
                  className="link_404"
                  onClick={() => {
                    navigate(user?.type === 1 ? DASHBOARD_PATH : ARTICLE_PATH, {
                      replace: true,
                    });
                  }}
                >
                  Go to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
