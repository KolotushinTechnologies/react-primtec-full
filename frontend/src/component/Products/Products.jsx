// Import Engine
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../more/Loader";
import { clearErrors, getProduct } from "../../actions/ProductActions";
import Pagination from "react-js-pagination";
import MetaData from "../../more/Metadata";
import BottomTab from "../../more/BottomTab";

// Import Styles, Styles Components and Components
import Typography from"@material-ui/core/Typography";
import ProductCard from "./ProductCard";
import Header from "../Home/Header";
import Footer from "../../Footer";
import "./Product.css";

const categories = [
    "Видеонаблюдение",
    "Кассы"
];

const Products = ({ match }) => {
  const dispatch = useDispatch();
  
  const [currentPage, setCurrentPage] = useState(1);
  
  const [category,setCategory] = useState("");

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
  } = useSelector((state) => state.products);
  const { cityState } = useSelector((state) => state.city);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };


  useEffect(() => {
      if(error){
          alert(error);
          dispatch(clearErrors())
      }

    dispatch(getProduct(keyword, currentPage, cityState, category));
    // eslint-disable-next-line
  }, [dispatch, keyword, currentPage, category,alert,error, cityState]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
        <MetaData title="Товары | Primtec" />
          <Header />
          <div>
           {products?.length === 0 ? 
            ""
            :
            <h2
            style={{
              textAlign: "center",
              width: "20vmax",
              margin: "3vmax auto",
              color: "rgb(0, 0, 0, 0.7)",
            }}
          >
            Все товары
          </h2>
           }
            <div className="sidebar__product" style={{
                display:"flex",
                flex:1,
            }}>
                <div className="sidebar__products" style={{
                  margin:"1vmax",
              }}>
                  <Typography style={{padding:"5px"}}>Категории</Typography>
                  <ul className="categoryBox">
                      {categories.map((category) =>(
                          <li
                          className="category-link"
                          key={category}
                          onClick={() =>setCategory(category)}
                          type="checkbox">
                          {category}
                          </li> 
                      ))}
                  </ul>
              </div>

             {products.length === 0 ?
             <span style={{
               display:"block",
               padding:"30px 0",
               fontSize:"1.5rem",
               flex:".9",
               textAlign:"center"
             }}>Товаров по данной категории не найдено</span>
             : 
             <div
             className="products"
             style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "center",
               flex:".9"
             }}
           >
             {products &&
               products.map((product) => (
                 <ProductCard key={product.id} product={product} />
               ))}
           </div>
              }
             
             </div>
            
              <div
                className="pagination__box"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "6vmax",
                }}
              >
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Следующй"
                  prevPageText="Предыдущй"
                  firstPageText="Первая"
                  lastPageText="Последняя"
                  itemclassName="page-item"
                  linkclassName="page-link"
                  activeclassName="pageItemActive"
                  activeLinkclassName="pageLinkActive"
                />
              </div>
          </div>
          <Footer />
          <BottomTab />
        </>
      )}
    </>
  );
};

export default Products;
