// Import Engine
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, createPost } from "../../actions/BlogAction";
import { NEW_PRODUCT_RESET } from "../../constans/ProductConstans";
import { ToastContainer, toast } from 'react-toastify';

// Import Components
import { Button } from "@material-ui/core";
import MetaData from "../../more/Metadata";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import SideBar from "./Sidebar";

// Import Styles
import "./newProduct.css";

const CreatePost = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.createPost);

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [image, setImage] = useState();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success("Пост успешно создан!");
      history.push("/dashboard");
      dispatch({ type: NEW_PRODUCT_RESET });
    }
    // eslint-disable-next-line
  }, [dispatch, alert, error, history, success]);

  const createPostSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("text", text);
    myForm.set("videoUrl", videoUrl);

    myForm.set("file", image);
    dispatch(createPost(myForm));
  };

  return (
    <Fragment>
      <MetaData title="Создать новый Пост | Primtec" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createPostSubmitHandler}
          >
            <h1>Создать новый пост</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Название поста"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />
              <textarea
                placeholder="Текст(Описание)"
                value={text}
                onChange={(e) => setText(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Ссылка с YouTube"
                required
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={(e) => {
                  e.preventDefault();
                  const file = e.target.files[0];
                  setImage(file);
                }}
                multiple
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Создать
            </Button>
          </form>
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
    </Fragment>
  );
};

export default CreatePost;