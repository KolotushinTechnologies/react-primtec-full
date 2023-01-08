import React from "react";
import "./ConfirmOrder.css";
import { useSelector } from "react-redux";
import CheckoutSteps from "./CheckoutSteps";
import MetaData from "../../more/Metadata";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import BottomTab from "../../more/BottomTab";



const ConfirmOrder = ({ history }) => {
    const { shippingInfo, cartItems } = useSelector((state) => state.cart);

    const { user } = useSelector((state) => state.user);
    
    let productPrice =  cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );

    const subtotal = productPrice 
      // eslint-disable-next-line
    const shippingCharges = productPrice > 99 ? 0 : 50;
    
    const totalPrice = subtotal + shippingCharges;
  
    const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;
  
    const proceedToPayment = () => {
      const data = {
        subtotal,
        shippingCharges,
        totalPrice,
      };
  
      sessionStorage.setItem("orderInfo", JSON.stringify(data));
  
      history.push("/process/payment");
    };
  
    return (
      <>
        <MetaData title="Подтверждение заказа | Primtec" />
        <CheckoutSteps activeStep={1} />
        <div className="confirmOrderPage">
          <div>
            <div className="confirmshippingArea">
              <Typography>Информация о доставке</Typography>
              <div className="confirmshippingAreaBox">
                <div>
                  <p>Имя:</p>
                  <span>{user.name}</span>
                </div>
                <div>
                  <p>Номер телефона:</p>
                  <span>{shippingInfo.phoneNo}</span>
                </div>
                <div>
                  <p>Адрес:</p>
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div className="confirmCartItems">
              <Typography>Ваши товары из корзины:</Typography>


              {cartItems.length === 0 ? 
                <div className="confirmCartItemsContainer">
                   ""
                 </div>
                  :
             <div className="confirmCartItemsContainer">
             {cartItems.map((item) => (
               <div key={item.product}>
                 <img src={item.image} alt="Product" />
                 <Link to={`/product/${item.product}`}>
                   {item.name}
                 </Link>{" "}
                 <span>
                   {item.quantity} X {item.price} Рублей ={" "}
                   <b>{item.price * item.quantity} Рублей</b>
                 </span>
               </div>
             ))
              }
           </div>
          }
     
            </div>
          </div>
          {/*  */}
          <div>
            <div className="orderSummary">
              <Typography>Сумма заказа</Typography>
              <div>
                <div>
                  <p>Стоимость товаров:</p>
                  <span>{subtotal} Рублей</span>
                </div>
                <div>
                  <p>Стоимость доставки:</p>
                  <span>{shippingCharges} Рублей</span>
                </div>
                <div>
                </div>
              </div>
  
              <div className="orderSummaryTotal">
                <p>
                  <b>Итого:</b>
                </p>
                <span>{totalPrice} Рублей</span>
              </div>
                  
              <button onClick={proceedToPayment}>Перейти к оплате</button>
            </div>
          </div>
        </div>
        <BottomTab />
      </>
    );
  };
  
  export default ConfirmOrder;
