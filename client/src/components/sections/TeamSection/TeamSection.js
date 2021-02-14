import React from "react";
import "./TeamSection.scss";
import TeamCard from "../../TeamCard";


const TeamSection = () => {
    return (
        <section className="team-section" id="fifth-section">
            <div className="container">
                <div className="team-section__title">Команда</div>
                <div className="row">
                    <div className="col-4">
                        <TeamCard images="/images/john.jpg" job="PR Manager" name="Фазиль" />
                    </div>
                    <div className="col-4">
                        <TeamCard images="/images/Regina.jpg" job="Studio Manager" name="Регина" />
                    </div>
                    <div className="col-4">
                        <TeamCard images="/images/sandra.jpg" job="Gallery Manager" name="Василиса" />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TeamSection;
