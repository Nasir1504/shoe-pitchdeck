import React from 'react';

// styles
import './nike-your-self-card.scss';

export default function NikeYourSelfCard({
    BgColor,
    imgURL,
    // PopupCardID,
    SetPopupCardID,
    ID
}) {
    return (
        <div className="nike-your-self-card-main-container"
            onMouseOver={() => { SetPopupCardID(ID) }}
            onMouseOut={() => { SetPopupCardID(0) }}

        >

            <div className="bg-blured-circle">
                <div className="inner-bg-circle"
                    style={{
                        background: `radial-gradient(circle, #${BgColor}d8 0%, #ffffff00 100%)`

                    }}
                />
            </div>
            <div className="inner-content-card">
                <img src={imgURL} alt="" className="athlete-img" />
            </div>

            <div className="bottom-text-content">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam eveniet sed nisi distinctio, inventore alias dolore reiciendis eos quibusdam numquam.
            </div>

        </div>
    )
}
