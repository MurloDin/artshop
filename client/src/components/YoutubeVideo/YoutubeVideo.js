import React from 'react';
import "./YoutubeVideo.scss";
import YouTube from 'react-youtube';

const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
}


const YoutubeVideo = () => {
    const opts = {
        height: '400',
        width: '650',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    };

    return (
        <div style={{maxWidth: "650px"}}>
            <YouTube
                className="youtube-video"
                videoId="cISZRfH6V08"
                opts={opts}
                onReady={onReady}
            />
        </div>
    );
};


export default YoutubeVideo;
