import React from "react";
import "./ImagesSection.scss";


const ImagesSection = () => {
    return (
        <section className="images-section">
            <div className="images-section__wrapper">
                <img
                    src="/images/oil.jpg"
                    alt="picture"
                    className="images-section__img"
                />
                <div className="images-section__text-wrapper">
                    <div className="images-section__title">
                        Картины<br/>маслом
                    </div>
                    <div className="images-section__price">
                        От 150 руб.
                    </div>
                </div>
            </div>
            <div className="images-section__wrapper">
                <img
                    src="/images/sk.jpg"
                    alt="picture"
                    className="images-section__img"
                />
                <div className="images-section__text-wrapper">
                    <div className="images-section__title">
                        Скульптуры из<br/>мрамора
                    </div>
                    <div className="images-section__price">
                        От 2000 руб.
                    </div>
                </div>
            </div>
            <div className="images-section__wrapper">
                <img
                    src="/images/ak.jpg"
                    alt="picture"
                    className="images-section__img"
                />
                <div className="images-section__text-wrapper">
                    <div className="images-section__title">
                        Картины<br/>акрилом
                    </div>
                    <div className="images-section__price">
                        От 80 руб.
                    </div>
                </div>
            </div>
            <div className="images-section__wrapper">
                <img
                    src="/images/int.jpg"
                    alt="picture"
                    className="images-section__img"
                />
                <div className="images-section__text-wrapper">
                    <div className="images-section__title">
                        Элементы<br/>интереьера
                    </div>
                    <div className="images-section__price">
                        От 230 руб.
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ImagesSection;
