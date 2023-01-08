// Import Engine
import React, { useState, useEffect } from "react";
import axios from "axios";

const Feedback = ({ toast }) => {
    const [formFeedback, setFormFeedback] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
    });

    const {
        name,
        email,
        phoneNumber,
        message
    } = formFeedback

    const onChangeFormForFeedback = (e) => setFormFeedback({ ...formFeedback, [e.target.name]: e.target.value });

    const onSubmitFormForFeedback = async (e) => {
        e.preventDefault();

        const config = { headers: { "Content-Type": "application/json" } };


        try {
            await axios.post("/api/v2/feedback", formFeedback, config);

            toast.success("Форма отправлена успешно!");
        } catch (err) {
            toast.error(err);
        }
    };

    return (
        <div className="first-section__promo">
            <div className="wrapper__promo">
                <form

                    onSubmit={onSubmitFormForFeedback}
                >
                    <h1 className="description__promo">Заполните форму</h1>
                    <div className="form__promo">
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Имя"
                                name="name"
                                value={name}
                                onChange={onChangeFormForFeedback}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                onChange={onChangeFormForFeedback}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Номер телефона"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={onChangeFormForFeedback}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Вопрос"
                                name="message"
                                value={message}
                                onChange={onChangeFormForFeedback}
                            />
                        </div>
                        <button
                            type="submit"
                            style={{
                                border: "none",
                                borderRadius: "100px",
                                cursor: "pointer",
                                padding: "10px",
                                background: "#7b02ea",
                                height: "40px",
                                margin: "10px",
                                color: "#fff",
                                fontFamily: "Montserrat",
                                fontWeight: "500",
                            }}
                        >Отправить</button>
                    </div>
                    <p className="second-description__promo">
                        И наш менеджер свяжется с вами<br />
                        для получения скидки в течение 5 минут!
                    </p>
                </form>
            </div>
        </div>
    )
};

export default Feedback;
