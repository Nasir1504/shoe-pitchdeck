import React from 'react';

//styles
import './influencer-partnership.scss';

// images
import imgOne from '../../../img/scope/image658.png';
import imgTwo from '../../../img/scope/image647.png';
import imgThree from '../../../img/scope/image642.png';
import streetstyle from '../../../img/scope/street-style.png';
import nikeswag from '../../../img/scope/nike-swag.png';
import nikeslegacy from '../../../img/scope/nikes-legacy.png';
import dmp from '../../../img/scope/dance-meets-performance.png';



export default function InfluencerPartnership({
    ID,
    KeyID,
    CardID
}) {
    return (
        <div className="influencer-partnership-main-container"
            style={{
                opacity: CardID !== KeyID && KeyID === ID && '0.08'
            }}
        >
            <div className="left-section"
                style={{
                    transform: CardID === 1 && 'translateY(0)'
                }}
            >
                <img src={imgOne} alt="" className="bg-img" />
                <img src={streetstyle} alt="" className="heading-one-img" />
                <img src={nikeswag} alt="" className="heading-two-img" />
            </div>
            <div className="middle-section"
                style={{
                    transform: CardID === 1 && 'translateY(0)'
                }}
            >
                <img src={imgTwo} alt="" className="bg-img" />
                <img src={nikeslegacy} alt="" className="heading-one-img" />

            </div>
            <div className="right-section"
                style={{
                    transform: CardID === 1 && 'translateY(0)'
                }}
            >
                <img src={imgThree} alt="" className="bg-img" />
                <img src={dmp} alt="" className="heading-two-img" />

            </div>



        </div>
    )
}
