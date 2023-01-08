// Import Engine
import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

// Import Components
import Footer from "../../Footer";
import Header from "../Home/Header";
import Loading from "../../more/Loader";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";
import Feedback from "../Feedback/Feedback";

// Import CSS
import "./About.css";

const About = () => {
  const { loading } = useSelector(
    (state) => state.profile
  );
  return (
    <>
      {loading ? <Loading /> :
        <>
          <MetaData title="О Нас | Primtec" />
          <div>
            <Header />
            <div
              style={{
                width: "90%",
                margin: "0px auto",
              }}
            >
              <div className="about__page">

                <div className="main-about__page">
                  <div className="first-section-about__page">
                    <div className="image-section-about__page">
                      <img src="https://www.primtec.ru/images/cms/data/sdaj_staruyu_kassu.png" alt="about" />
                    </div>
                    <div className="content-section-about__page">
                      <h5 style={{ textAlign: "center" }}>О нас | Primtec</h5>
                      <p>
                        PRIMTEC: все для автоматизации Вашего бизнеса.
                        10 лет на рынке. Работаем комплексно, под ключ. Поддерживаем на всех этапах.
                      </p>
                      <p>
                        Мы предлагаем:
                        <ul>
                          <li>- Онлайн кассы Атол, МТС, Эвотор и прочее</li>
                          <li>- ЭЦП электронно-цифровые подписи для ФНС, Торгов, Банкротства, Кадастра и т.д.</li>
                          <li>- Программы автоматизации бизнеса- 1С, Frontol, Бифит, iiko, БИТРИКС24</li>
                          <li>- Торговое оборудование- весы, сканеры штрих-кодов,ТСД, терминалы эквайринга, принтеры этикеток, денежные ящики и т.д.</li>
                          <li>- Видеонаблюдение- Imou, Dahua, Hikvision, Hiwatch, Atis, EZ-IP, ZKTeco</li>
                          <li>- Пожарная безопасность- Рубеж, Болид</li>
                          <li>- Системы контроля доступа ( СКУД).</li>
                          <li>- Антивирусы и программное обеспечение, обеспечение защиты информации.</li>
                          <li>- Ремонт и восстановление работоспособности онлайн касс, компьютеров, серверов, видеорегистраторов.</li>
                          <li>- Обслуживание по договору компьютерной и серверной инфраструктуры организаций.</li>
                          <li>- Проектирование и построение СКС ( структурированные компьютерные сети).</li>
                        </ul>
                      </p>
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

export default About;
