// Import Engine
import React from "react";
import { Link } from "react-router-dom";

// Import Styles, Styles Components and Components
import postHomeImage from "../../Assets/background.jpg";
import "./PostHome.css";

const PostHome = ({ post }) => {
    return (
        <div className="post__home">
            <div className="image-post__home">
                <img className="image__post" alt="image__post" src={post?.photo ? post?.photo : postHomeImage} />
            </div>
            <div className="text-content-post__home">
                <Link to={`/post/${post?._id}`} className="title-post__home">
                    {post?.title}
                </Link>
                <div className="text-post__home">
                    {post?.text}
                    {post?.videoUrl ? post?.videoUrl : null}
                </div>
                <div className="date-post__home">
                    <span>12.10.2022</span>
                </div>
            </div>
        </div>
    )
};

export default PostHome;
