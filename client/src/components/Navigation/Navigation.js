import React from "react";
import {Link} from "react-scroll";

import "./Navigation.scss";


const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <ul className="page-nav">
                    <li className="page-nav__item">
                        <Link
                            to="first-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            Обо мне
                        </Link>
                    </li>
                    <li className="page-nav__item">
                        <Link
                            to="second-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            Видео
                        </Link>
                    </li>
                    <li className="page-nav__item">
                        <Link
                            to="third-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            Цены
                        </Link>
                    </li>
                    <li className="page-nav__item">
                        <Link
                            to="forth-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            Последние работы
                        </Link>
                    </li>
                    <li className="page-nav__item">
                        <Link
                            to="fifth-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            Команда
                        </Link>
                    </li>
                    <li className="page-nav__item">
                        <Link
                            to="sixth-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            Контакты
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navigation;