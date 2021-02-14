import React from "react";
import "./InformationSection.scss";
import {Link} from "react-scroll";


const InformationSection = () => {
    return (
        <section className="information-section" id="first-section">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <div className="information-section__title">
                            Обо мне
                        </div>
                        <div className="information-section__about">
                            Моё имя Василиса Петровна и я профессиональный художник, являюсь главным дизайнером нашего магазина.
                        </div>
                        <div className="information-section__desc">
                            Я черпаю вдохновение в новаторских стилях современного и городского искусства, таких как
                            графика и иллюстрации граффити. Я всегда открыт для новых творческих задач и сотрудничества.
                            Не стесняйтесь обращаться ко мне, если вам нужно уникальное, единственное в своем роде
                            произведение искусства.
                        </div>
                        <Link
                            to="sixth-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            <button className="information-section__btn">
                                Связаться
                            </button>
                        </Link>
                    </div>
                    <div className="col-6 offset-1">
                        <img
                            src="/images/nast.jpg"
                            alt="photo"
                            className="information-section__img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default InformationSection;
