import React, { useState } from "react";
import "./Shipping.css";
import { useSelector, useDispatch } from "react-redux";
import CheckoutSteps from "../cart/CheckoutSteps.jsx";
import MetaData from "../../more/Metadata";
import HomeIcon from "@material-ui/icons/Home";
import PublicIcon from "@material-ui/icons/Public";
import PhoneIcon from "@material-ui/icons/Phone";
import TransferWithinAStationIcon from "@material-ui/icons/TransferWithinAStation";
import { saveShippingInfo } from "../../actions/CartAction";
import BottomTab from "../../more/BottomTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const countries = [
  {
    countryName: "Россия",
    cities: [
      "Владивосток",
      "Находка",
      "Хабаровск"
    ]
  },
  {
    countryName: "Казахстан",
    cities: [
      "Астана",
      "Аламаты",
      "Шымкент"
    ]
  },
  {
    countryName: "Узбекистан",
    cities: [
      "Ташкент",
      "Самарканд",
      "Бухара"
    ]
  }
];

const Shipping = ({ history }) => {
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingInfo.address);
  // eslint-disable-next-line
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  // eslint-disable-next-line
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 11 || phoneNo.length > 11) {
      toast.error("Номер телефона должен содержать 11 символов");
      return;
    }
    dispatch(saveShippingInfo({ address, state, country, phoneNo }));
    history.push("/order/confirm");
  };

  return (
    <>
      <MetaData title="Доставка | Primtec" />

      <CheckoutSteps activeStep={0} />

      <div className="shippingContainer">
        <div className="shippingBox">
          <h2 className="shippingHeading">Доставка</h2>

          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <HomeIcon />
              <input
                type="text"
                placeholder="Адрес"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <PhoneIcon />
              <input
                type="number"
                placeholder="Номер телефона"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <div>
              <PublicIcon />

              <select
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Страна</option>
                {countries &&
                  countries.map((item) => (
                    <option key={item.countryName} value={item.countryName}>
                      {item.countryName}
                    </option>
                  ))}
              </select>
            </div>
            
            {country && (
              <div>
                <TransferWithinAStationIcon />

                <select
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">Город</option>
                  {country &&
                    countries.map((item) => (
                      item.countryName === country && item.cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))
                    ))}
                </select>
              </div>
            )}
            
            <input
              type="submit"
              value="Далее"
              className="shippingBtn"
              disabled={state ? false : true}
            />
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
      <BottomTab />
    </>
  );
};

export default Shipping;
