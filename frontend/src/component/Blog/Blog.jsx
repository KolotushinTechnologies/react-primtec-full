// Import Engine
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getPosts } from "../../actions/BlogAction";
import Pagination from "react-js-pagination";

// Import Components
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";
import Feedback from "../Feedback/Feedback";
import PostHome from "../PostHome/PostHome";

// Import CSS
import "./Blog.css";

const BlogPage = ({ match }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const {
    posts,
    loading,
    error,
    postsCount,
    resultPerPage,
  } = useSelector((state) => state.posts);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors())
    }

    dispatch(getPosts(keyword, currentPage));
    // eslint-disable-next-line
  }, [dispatch, keyword, currentPage, alert, error]);

  return (
    <>
      {loading ? <Loading /> :
        <>
          <MetaData title="Блог | Primtec" />
          <div>
            <Header />
            <div
              style={{
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                <h5>Блог Primtec</h5>
                <div className="blog__home">
                  {posts.length === 0 ?
                    <span style={{
                      display: "block",
                      padding: "30px 0",
                      fontSize: "1.5rem",
                      flex: ".9",
                      textAlign: "center"
                    }}>Постов не найдено!</span>
                    :
                    <div
                      className="products"
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        flex: ".9"
                      }}
                    >
                      {posts &&
                        posts.map((post) => (
                          <PostHome key={post._id} post={post} />
                        ))}
                    </div>
                  }
                </div>
                <div
                  className="pagination__box"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "6vmax",
                  }}
                >
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={postsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Следующй"
                    prevPageText="Предыдущй"
                    firstPageText="Первая"
                    lastPageText="Последняя"
                    itemclassName="page-item"
                    linkclassName="page-link"
                    activeclassName="pageItemActive"
                    activeLinkclassName="pageLinkActive"
                  />
                </div>

                <Feedback toast={toast} />
              </div>
            </div>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Footer />
          </div>
          <BottomTab />
        </>
      }
    </>
  );
};

export default BlogPage;
