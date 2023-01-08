import React from "react";
import { useSelector } from "react-redux";
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import "./Advantages.css";
import BottomTab from "../../more/BottomTab";
import Feedback from "../Feedback/Feedback";

import { ToastContainer, toast } from 'react-toastify';
import happyPerson from "../../Assets/happy_person.png";
import guarantPerson from "../../Assets/guarant_person.png";
import hiPerson from "../../Assets/hi_person.png";
import allGoodPerson from "../../Assets/all_good_person.png";
import smilePerson from "../../Assets/smile_person.png";
import okPerson from "../../Assets/ok_person.png";

const AdvantagesPage = () => {
  const { loading } = useSelector(
    (state) => state.profile
  );
  return (
    <>
      {loading ? <Loading /> :
        <>
          <MetaData title="Преимущества | Primtec" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">
                {/* 2nd verse */}
                <div className="second second-section__home" style={{ borderRadius: "30px" }}>
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
                          <img className="about__image" src={hiPerson} alt="about" />
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

export default AdvantagesPage;
