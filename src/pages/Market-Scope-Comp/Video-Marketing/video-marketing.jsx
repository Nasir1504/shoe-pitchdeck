import React from 'react';

// styles
import './video-marketing.scss';

// video file
import Video from '../../../img/scope/nike-gym.mp4';


export default function VideoMarketing({
    ID,
    KeyID,
    CardID
}) {
    return (
        <div className="video-marketing-main-container"
            style={{
                opacity: CardID !== KeyID && KeyID === ID && '0.08'
            }}
        >
            <video
                className='video-file'
                // controls
                autoPlay
                muted
                preload='auto'
                loop
            >
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )
}
