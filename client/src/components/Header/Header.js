import React from "react";
import "./Header.scss";
import {Link} from "react-scroll";


const Header = () => {
    return (
        <header className="page-header">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div className="page-header__phone">
                            + 374 29 3232 232
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="page-header__logo">ARTDOM</div>
                    </div>
                    <div className="col-4">
                        <Link
                            to="sixth-section"
                            spy={true}
                            smooth={true} duration={500}
                            className="page-nav__link"
                        >
                            <button className="page-header__btn">Связатсья</button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
