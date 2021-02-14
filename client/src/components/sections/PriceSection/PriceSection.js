import React, {useEffect, useState} from "react";
import "./PriceSection.scss";
import PriceCard from "../../PriceCard";
import {getServices} from "../../../services/artshop-api";


const PriceSection = () => {

    const [services, setServices] = useState([1,1,3]);
    useEffect(async () => {
        const data = await getServices()
        setServices(data)
    }, [])


    return (
        <section className="price-section" id="third-section">
            <div className="container">
                <div className="price-section__title">
                    Цены
                </div>
                <div className="row">
                    {
                        services.map((item) => {
                            return (
                                <div className="col-4">
                                    <PriceCard title={item.title} price={item.price} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};


export default PriceSection;
