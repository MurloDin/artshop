import React from "react";
import "./PriceCard.scss";


const PriceCard = ({title, price}) => {
    return (
        <section className="price-card">
            <div className="price-card__title">{title}</div>
            <div className="">
                <div className="price-card__wrapper">
                    <div className="price-card__desc">Цена</div>
                    <div className="price-card__desc price">{price} руб.</div>
                </div>
            </div>
        </section>
    );
};


export default PriceCard;
