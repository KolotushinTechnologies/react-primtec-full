import React,{useState,useEffect} from 'react';
import { Link} from 'react-router-dom';
import "./FavouriteItemsCard.css";
import { useSelector,useDispatch } from "react-redux";

const FavouriteItemsCard = ({item, deleteFavouriteItems}) => {
    const dispatch = useDispatch();
    const { product} = useSelector(
        (state) => state.productDetails
      );

    return (    
        <div className='FavouriteItemsCard'>
        <div>
        <img src={item.image} alt="ssa" />
        <p onClick={() => deleteFavouriteItems(item.product)}>Удалить</p>
        <Link to={`/product/${item.product}`} style={{
            fontSize:"300 0.9vmax",
        }}>{item.name}</Link>
        </div>

        <div>
            <span>{`${item.price} Рублей`}</span> 
        </div>

        <div>
        <p style={{ paddingBottom: ".5vmax" }}>
              <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
                {product.Stock < 1 ? "Нет в наличии" : "В наличии"}
              </b>
            </p>
        </div>
        
        <div>
          <Link to={`/product/${item.product}`}>
           <button className='favouritesButton' onClick={() => deleteFavouriteItems(item.product)}>Добавить в корзину</button>
           </Link>
        </div>

    </div>
    )
}

export default FavouriteItemsCard
