import React from "react";
import "./PreviewPage.scss";
import ImagesSection from "../sections/ImagesSection";
import InformationSection from "../sections/InformationSection";
import VideoSection from "../sections/VideoSection";
import PriceSection from "../sections/PriceSection";
import PhotoGallery from "../PhotoGallery";
import TeamSection from "../sections/TeamSection";
import ContactsSection from "../sections/ContactsSection";
import Navigation from "../Navigation";


const PreviewPage = () => {
    return (
        <section className="preview-page">
            <div className="gray-block">
                <Navigation />
            </div>
            <ImagesSection />
            <InformationSection />
            <VideoSection />
            <PriceSection />
            <PhotoGallery />
            <TeamSection />
            <ContactsSection />
        </section>
    );
};


export default PreviewPage;
