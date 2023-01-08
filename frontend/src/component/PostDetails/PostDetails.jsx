// Import Engine
import React, { useEffect } from "react";
import { getPostDetails, clearErrors } from "../../actions/BlogAction";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

// Import Utils
import formatDate from "../../utils/formatDate";

// Import Components
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";
import Feedback from "../Feedback/Feedback";
import PostHome from "../PostHome/PostHome";

// Import CSS
import postHomeImage from "../../Assets/background.jpg";
import "./PostDetails.css"

const PostDetails = ({ match, history }) => {
    const dispatch = useDispatch();

    const { post, error, loading } = useSelector(
        (state) => state.postDetails
    );

    useEffect(() => {
        window.scrollTo(0, 0);
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        dispatch(getPostDetails(match.params.id));
        // eslint-disable-next-line
      }, [dispatch, match.params.id, error, alert]);

    return (
        <>
            {loading ? <Loading /> :
                <>
                    <MetaData title="Видеонаблюдение | Блог Primtec" />
                    <div>
                        <Header />
                        <div
                            style={{
                                margin: "0px auto",
                            }}
                        >
                            <div className="about__page">
                                <div className="post__details">
                                    <div className="first-section-post__details">
                                        <div className="title-post__details">
                                            <h5>{post?.title}</h5>
                                            <span>{post?.createdAt && formatDate(post?.createdAt)}</span>
                                        </div>
                                        <div className="image-block-post__details">
                                            <img className="image-post__details" alt="image" src={post?.photo ? post?.photo : postHomeImage} />
                                        </div>
                                        <div className="text-content-post__details">
                                            {post?.text}
                                        </div>
                                        {post?.videoUrl ? (<div className="video-content-post__details">
                                            <video>
                                                <source src={post?.videoUrl} />
                                            </video>
                                        </div>) : null}
                                    </div>
                                    {/* <div className="second-section-post__details">
                                        <h5>Интересные статьи</h5>
                                        <PostHome className="" />
                                    </div> */}
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
    )
};

export default PostDetails;
