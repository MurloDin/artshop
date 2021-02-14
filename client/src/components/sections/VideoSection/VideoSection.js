import React, {useState} from "react";
import "./VideoSection.scss";
import YoutubeVideo from "../../YoutubeVideo";




const VideoSection = () => {
    const [view, setView] = useState(false)


    return (
        <section className="video-section" id="second-section">
            <div className="ddd" onClick={() => setView(false)}></div>
            <img
                style={view ? {visibility: "hidden"} : {visibility: "visible"}}
                src="/images/play.png"
                alt="play"
                className="video-section__img"
                onClick={() => setView(true)}
            />
            <div style={{maxWidth: "650px", margin: "0 auto"}}>
                {view ? <YoutubeVideo /> : ""}
            </div>
        </section>
    );
};


export default VideoSection;
