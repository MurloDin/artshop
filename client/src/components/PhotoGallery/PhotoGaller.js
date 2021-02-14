import React, {useEffect, useState} from "react";
import "./PhotoGallery.scss";
import {getProjects} from "../../services/artshop-api";


const PhotoGallery = () => {
    const [projects, setProjects] = useState([1,1,3]);
    useEffect(async () => {
        const data = await getProjects()
        setProjects(data)
    }, [])

    return (
        <section id="forth-section">
            <div className="photo-gallery__section-title">Последние работы</div>
            <div className="photo-gallery">
                {
                    projects.map((item) => {
                        return (
                            <div className="wrapper">
                                <img
                                    src={`http://localhost:8000${item.photoLocation}`}
                                    alt="picture"
                                    className="photo-gallery__img"
                                />
                                <div className="photo-gallery__text-wrapper">
                                    <div className="photo-gallery__title">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>

    );
};


export default PhotoGallery;
