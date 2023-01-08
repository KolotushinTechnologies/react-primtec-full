import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";
import logo from "../../Assets/logo_130_auto.png";

const Sidebar = () => {
  
  const button = () =>{
    // eslint-disable-next-line
    let items = document.querySelectorAll(".Dashboard__item");
   
  }

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" width="75"
        />
      </Link>
      <Link to="/dashboard">
        <p className="Dashboard__item" onClick={button}>
          <DashboardIcon /> Панель Администратора
        </p>
      </Link>
          <Link to="/admin/products">
              <p className="Dashboard__item"><PostAddIcon /> Все товары</p>
          </Link>

          <Link to="/admin/product">
             <p><AddIcon />Добавить товар</p>
          </Link>

          <Link to="/admin/post">
             <p><AddIcon />Создать пост</p>
          </Link>

         
      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Заказ
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Пользователи
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Отзывы
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;