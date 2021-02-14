import React from "react";
import "./ContactCard.scss";


const ContactCard = ({iconType="phone-1", items=["+123129831290301", "info@mail.ru"]}) => {
    return (
        <section className="contact-card">
            <i className={`icon-${iconType} contact-card__icon`}/>
            <div className="contact-card__list">
                {
                    items.map((item, idx) => {
                        return <div key={idx}>{item}</div>
                    })
                }
            </div>
        </section>
    );
};


export default ContactCard;
