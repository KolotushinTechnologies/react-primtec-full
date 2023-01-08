import React from 'react'
import "./Rules.css";
import Header from '../component/Home/Header';
import BottomTab from './BottomTab';
import MetaData from './Metadata';
import Footer from '../Footer';

const PdnRules = () => {
    return (
        <>
        <MetaData title="Правила обработки персональных данных | Primtec" />
        <Header />
        <div className='rules' style={{
            padding:"50px 60px",
            display:"flex",
            flexDirection: "column",
            width:"95%",
            overflow:"hidden"
        }}>
            <span style={{
                color:"#000",
                fontSize:"1.3rem",
                fontWeight:"800",
            }}>Правила обработки персональных данных:</span>
            <h3>Порядок обработки персональных данных</h3>
            Основные понятия
            <h3>Сайт</h3>
                <p>
                   — primtec.ru, а также все его поддомены.<br />  
                </p>
            <h3>Пользователь</h3>
                <p>
                    — посетитель Сайта.<br />
                </p>
            <h3>Primtec</h3>
                <p>
                  — Общество с ограниченной ответственностью ...<br />  
                </p>
            <h3>Услуги</h3>
                <p>
                  — продажа, консультирование, сопровождение.<br />  
                </p>
            <h3>Клиент</h3>
                <p>
                   — заинтересованное лицо в потреблении услуг компании Primtec.<br /> 
                </p>
            <h3>Персональные данные</h3>
                <p>
                  — любая информация, относящаяся к определенному физическому лицу.<br />  
                </p>
            <h3>Заказ</h3>
                <p>
                    — оформление платежного документа для покупки продуктов Primtec.<br />
                </p><br />
                
            <h3>Соглашение</h3>
            <p>
                Primtec обязуется обеспечить конфиденциальность и сохранность персональных данных, полученных от Пользователя в <br />
                соответствии с ФЗ-152 «О персональных данных». Primtec вправе использовать технологию «cookies». Cookies не содержат <br />
                конфиденциальную информацию. Пользователь настоящим дает согласие на сбор, анализ и использование cookies, в том <br />
                числе третьими лицами для целей формирования статистики и оптимизации рекламных сообщений. При регистрации <br />
                на Сайте Пользователь предоставляет следующую информацию: имя(фамилию и отчество по желанию) в одном поле, адрес электронной <br />
                почты, пароль. При оформлении заказа на Сайте, помимо регистрационных данных, Пользователь предоставляет <br />
                дополнительную информацию: почтовый адрес. Предоставляя свои персональные данные, Пользователь соглашается, <br />
                что Primtec вправе идентифицировать Пользователя как Клиента и использовать их для выполнения обязательств перед <br />
                Пользователем — оформить и выполнить заказ Услуг, открыть дополнительные возможности сайта, оказать <br />
                техническую поддержку, предоставить какие-либо эксклюзивные условия для Пользователя (накопительные или <br />
                разовые скидки, расширенный сервис поддержки, промо-акции и т.д.). Также Primtec вправе использовать персональные <br />
                данные Пользователя для продвижения Услуг Primtec и Услуг компаний партнеров, проведения электронных и SMS <br />
                опросов, контроля результатов маркетинговых акций, клиентской поддержки, проведения розыгрышей призов среди <br />
                Пользователей, контроля удовлетворенности Пользователя, а также качества услуг, оказываемых Primtec. Primtec имеет право <br />
                отправлять информационные, в том числе рекламные сообщения, на электронную почту и мобильный телефон <br />
                Пользователя с его согласия, выраженного посредством совершения им действий, однозначно идентифицирующих этого <br />
                Пользователя и позволяющих достоверно установить его волеизъявление на получение сообщения.<br />
            </p><br /><br />

            <p>
                Primtec вправе передать персональную информацию Пользователя третьим лицам в следующих случаях:<br />
                - пользователь выразил свое согласие на такие действия; <br />
                - передача необходима в рамках использования Пользователем определенного Сервиса либо для оказания услуг <br />
                Пользователю; <br />
                - при использовании Пользователем Услуг компаний партнеров данные о Пользователе могут передаваться для <br />
                обработки на условиях и для целей, определённых в пользовательских соглашениях об использовании дополнительных <br />
                Услуг компаний партнеров; <br />
                - передача предусмотрена российским или иным применимым законодательством в рамках установленной <br />
                законодательством процедуры; <br />
                - передача происходит в рамках продажи или иной передачи бизнеса (полностью или частично), при этом к <br />
                приобретателю переходят все обязательства по соблюдению условий настоящего раздела применительно к полученной <br />
                им персональной информации;<br />
                - в целях обеспечения возможности защиты прав и законных интересов Primtec, его аффилированных лиц и/или третьих лиц <br />
                в случаях, когда Пользователь нарушает условия лицензионного договора и/или требования действующего <br />
                законодательства. <br />
                Пользователь вправе отказаться от получения рекламной и другой информации без объяснения причин отказа путем <br />
                информирования Primtec о своем отказе посредством направления сообщения, составленного в свободной форме и <br />
                отправленного на электронный адрес Primtec: suрport@primtec.ru.<br />
                Информирующие сообщения о заказе и этапах его обработки отправляются автоматически и не могут быть отклонены <br />
                Пользователем. <br />
            </p>

        </div>
        <Footer />
        <BottomTab />
        </>
    )
}

export default PdnRules;