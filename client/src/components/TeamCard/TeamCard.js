import React from "react";
import "./TeamCard.scss";


const TeamCard = ({images, name, job}) => {
    return (
        <section className="team-card">
            <div className="team-card__img-wrapper">
                <div className="team-card__border"></div>
                <img
                    src={images}
                    alt="photo"
                    className="team-card__img"
                />
                <a href="vk.com" target="_blank">
                    <i className="icon-twitter-bird icon" style={{left: "35%"}}/>
                </a>
                <a href="vk.com" target="_blank">
                    <i className="icon-facebook icon" style={{left: "65%"}}/>
                </a>
                <a href="vk.com" target="_blank">
                    <i className="icon-odnoklassniki icon" style={{left: "50%"}}/>
                </a>
            </div>
            <div className="team-card__title">
                {name}
                <span style={{color: "rgba(1,1,1,.2)", marginLeft: "10px"}}>|</span>
                <span style={{color: "orange", fontSize: "14px", marginLeft: "10px"}}>{job}</span>
            </div>
        </section>
    );
};

export default TeamCard;
