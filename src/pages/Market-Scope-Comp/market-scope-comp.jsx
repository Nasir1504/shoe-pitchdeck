import React, { useState } from "react";
//styls
import "./market-scope-comp.scss";

//data
import { MARKET_SCOPE_DATA } from "./marketScopeData";

//components
import DigitalMarketing from "./Digital-Marketing/digital-marketing";
import PITech from "./Product-Innovation-And-Tech/pi-tech";
import InfluencerPartnership from "./Influencer-Partnership/influencer-partnership";
import VideoMarketing from "./Video-Marketing/video-marketing";

// img
import redLogo from '../../img/scope/nike-red-logo-sm.png';
import whiteLogo from '../../img/extras/nike-logo.png';
import vectorImg from '../../img/extras/vector-one.png';
import justDoIt from '../../img/scope/just-do-it.png';
import unleashGreatness from '../../img/scope/unleash-greatness.png';


export default function MarketScopeComp() {
    const [hiddenLayer, setHiddenLayer] = useState(false);
    const [cardID, setCardID] = useState(null);
    const [cardHolder, setCardHolder] = useState(false)

    return (
        <div className="market-scope-comp-main-container" >
            {/* ------------------------------------------------- */}

            <div className="hidden-layer"
                onMouseOver={() => {
                    setHiddenLayer(true)
                }}
                style={{
                    display: hiddenLayer && 'none'
                }}
            />

            <div className="card-container"
                style={{
                    transform: cardHolder && 'translateY(-100%)'
                }}
            >
                {
                    MARKET_SCOPE_DATA.map((item, i) => {
                        // if()
                        // const cL = MARKET_SCOPE_DATA.length

                        return (
                            <div
                                className="card-container-inner"
                                key={i}
                                style={{
                                    transform:
                                        cardID !== i && i === 0 ? 'translateY(-25%) scale(0.70)' :
                                            cardID !== i && i === 1 ? 'translateY(-45%) scale(0.80)' :
                                                cardID !== i && i === 2 ? 'translateY(-65%) scale(0.9)' :
                                                    cardID !== i && i === 3 && 'translateY(-85%) scale(1)'

                                }}
                                onMouseOver={() => {
                                    setCardID(i)
                                    setCardHolder(true)
                                }}
                                onMouseOut={() => {
                                    setCardID(null)
                                    setCardHolder(false)
                                }}

                            >
                                <div className="card-inner-section">
                                    <div className="card-heading-top"
                                        style={{
                                            opacity: !cardHolder && '0'
                                        }}
                                    >
                                        <span className="logo-img"><img src={redLogo} alt="" className="logo" /></span>
                                        <span className="text-span">{item.heading}</span>
                                    </div>
                                    <div className="card-content-main">
                                        {
                                            i === 3 ? <PITech ID={3} KeyID={i} CardID={cardID} /> :
                                                i === 2 ? <DigitalMarketing ID={2} KeyID={i} CardID={cardID} /> :
                                                    i === 1 ? <InfluencerPartnership ID={1} KeyID={i} CardID={cardID} /> :
                                                        i === 0 && <VideoMarketing ID={0} KeyID={i} CardID={cardID} />

                                        }
                                    </div>
                                    <div className="card-heading-bottom"
                                        style={{
                                            opacity: cardHolder && '0'
                                        }}
                                    >
                                        <span className="logo-img"><img src={redLogo} alt="" className="logo" /></span>
                                        <span className="text-span">{item.heading}</span>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>


            {/* -------------------------------------------------------- */}

            <img src={whiteLogo} alt="" className="main-logo-img" />
            <img src={vectorImg} alt="" className="vector-img" />
            <img src={justDoIt} alt="" className="just-do-it-img"
                style={{
                    opacity: cardID !== null && '1'
                }}
            />
            <img src={unleashGreatness} alt="" className="unleash-greatness-img"
                style={{
                    opacity: cardID !== null && '0'
                }}
            />

        </div >
    )
}