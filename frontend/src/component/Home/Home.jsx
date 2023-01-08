// Import Engine
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import axios from "axios";
import { Helmet } from "react-helmet";
import Feedback from "../Feedback/Feedback";

// Import Styles, Styles Components and Components
import { ToastContainer, toast } from 'react-toastify';
import ProductCard from "../Products/ProductCard";
import BlogComponent from "../Blog/BlogComponent";
import Footer from "../../Footer";
import PostHome from "../PostHome/PostHome";
import Header from "./Header";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";
import Loading from "../../more/Loader";
import bg from "../../Assets/background.png";
import imagePromo from "../../Assets/image_promo.jpg";
import happyPerson from "../../Assets/happy_person.png";
import guarantPerson from "../../Assets/guarant_person.png";
import hiPerson from "../../Assets/hi_person.png";
import allGoodPerson from "../../Assets/all_good_person.png";
import smilePerson from "../../Assets/smile_person.png";
import okPerson from "../../Assets/ok_person.png";
import 'react-toastify/dist/ReactToastify.css';
import "./Home.css";

// let actualyCity = localStorage.getItem("city");

const Home = () => {
  // const [city, setCity] = useState("Находка");

  const dispatch = useDispatch();
  const { products, error, loading } = useSelector(
    (state) => state.products
  );
  const { cityState } = useSelector((state) => state.city);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    
    dispatch(getProduct(undefined, undefined, cityState));

  }, [dispatch, error, cityState, getProduct]);

  const history = useHistory();

  return (
    <>
      {loading ? (
        <Loading />
      )
        : (
          <>
            <MetaData
              title="Главная | Primtec"
              descName="Primtec - Главная Страница"
              descContent="Добро пожаловать в Primtec!"
              relCanon="Primtec"
              linkHref="http://localhost:3000"
            />
            <Header />
            {/* Carousel */}
            <div className="banner">
              <Carousel>
                <img src={bg} alt="home" className="bgImg" />
                <img src="https://www.primtec.ru/images/cms/data/sdaj_staruyu_kassu.png" alt="home" className="bgImg" />
              </Carousel>
            </div>

            <h2 className="homeHeading">Наш ассортимент</h2>
            <div className="container" id="container">
              {products && products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            {/* 2nd verse */}
            <div className="second second-section__home">
              <div className="heading">
                <h2>Преимущества работы с нами</h2>
              </div>
              <div className="row flex">
                <div className="col__3 sell-block__home">
                  <div style={{
                    padding: "10px",
                    // border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img className="about__image" src={guarantPerson} alt="about" />
                    </div>
                    <span>Гарантия лучшей цены</span>
                  </div>
                </div>
                <div className="col__3 sell-block__home">
                  <div style={{
                    padding: "10px",
                    // border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img className="about__image"src={hiPerson} alt="about" />
                    </div>
                    <span>Скорость! Регистрируем кассы за 3 часа</span>
                  </div>
                </div>
                <div className="col__3 sell-block__home">
                  <div style={{
                    padding: "15px",
                    // border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img className="about__image" src={okPerson} alt="about" />
                    </div>
                    <span>Индивидуальный подбор оборудования под ваш бюджет и вид деятельности</span>
                  </div>
                </div>


                <div className="col__3 sell-block__home">
                  <div style={{
                    padding: "15px",
                    // border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img className="about__image" src={smilePerson} alt="about" />
                    </div>
                    <span>Оплата любым удобным для Вас способом</span>
                  </div>
                </div>

                <div className="col__3 sell-block__home">
                  <div style={{
                    padding: "15px",
                    // border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img className="about__image" src={allGoodPerson} alt="about" />
                    </div>
                    <span>Техническая поддержка</span>
                  </div>
                </div>

                <div className="col__3 sell-block__home">
                  <div style={{
                    padding: "15px",
                    // border: "1px solid rgb(0 0 0 / 14%)",
                    minHeight: "230px"
                  }}>
                    <div className="flex align__items__center justify__content__center image">
                      <img className="about__image" src={happyPerson} alt="about" />
                    </div>
                    <span>Бесплатная консультация нашего специалиста, который подробно расскажет обо всех нюансах</span>
                  </div>
                </div>

              </div>
            </div>

            <Feedback toast={toast} />

            <h2 className="homeHeading">Блог</h2>

            <div className="blog__home">
              <BlogComponent />
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
            <BottomTab />
          </>
        )}
    </>
  );
};

export default Home;
