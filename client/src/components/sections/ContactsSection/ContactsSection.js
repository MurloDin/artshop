import React from "react";
import {Map, GoogleApiWrapper, Marker, Circle} from 'google-maps-react'
import "./ContactsSection.scss";
import ContactCard from "../../ContactCard";
import ContactsForm from "../../ContactsForm";


const ContactsSection = (props) => {

    return (
        <section className="contacts-section" id="sixth-section">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="contacts-section__title">Контакты</div>
                        <ContactCard items={["Ул. Крестьянская, дом 22"]} iconType="location"/>
                        <hr size={1}/>
                        <ContactCard items={["Выходной: Пн", "Вс: 8.00-15.00", "Вт-Чт: 8.00-18.00"]}
                                     iconType="calendar"/>
                        <hr size={1}/>
                        <ContactCard items={["+ 374 29 3232 232", "papich@mail.ru"]} iconType="phone-1"/>
                    </div>
                    <div className="col-4">
                        <div className="contacts-section__title">Мы карте</div>
                        <div className="map-wrapper">
                            <Map google={props.google}
                                 zoom={13}
                                 style={{height: "420px", borderRadius: "5px"}}
                                 initialCenter={{lat: 52.41278674273404, lng: 31.022998322948137}}
                                 >
                            </Map>
                        </div>
                    </div>
                    <div className="col-5" style={{paddingLeft: "40px"}}>
                        <div className="contacts-section__title">Связаться</div>
                        <ContactsForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default GoogleApiWrapper({
    apiKey: 'AIzaSyC8WBJLuoQtv-wv-M84CZNdd_eUU69nZ0Y'
})(ContactsSection);
