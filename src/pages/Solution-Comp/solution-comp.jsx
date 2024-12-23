import React, { useState } from "react";

//styles
import "./solution-comp.scss";

// components
import SolutionShoeContent from "./Solution-Shoe-Content/solution-shoe-content";
// import TouchAppIcon from '@mui/icons-material/TouchApp';
import NikeYourSelfCard from "./Nike-Your-Self-Card/nike-your-self-card";

//imgs
import NikeLogo from '../../img/extras/nike-logo-vector.png';
import Athlete1 from '../../img/solution/athlete1.png';
import Athlete2 from '../../img/solution/athlete2.png';
import Athlete3 from '../../img/solution/athlete3.png';



export default function SolutionComp() {

    // const [upDownEffect, setUpDownEffect] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setUpDownEffect(prev => {
    //             return !prev
    //         })
    //     }, 1000)

    // }, [upDownEffect])

    const [cardId, setCardId] = useState(0)
    const [popupCardID, setPopupCardID] = useState(0)
    const [hiddenLayer, setHiddenLayer] = useState(false)
    const [exploreMoreBtn, setExploreMoreBtn] = useState(false)


    const handleCrossEvent = () => {
        setCardId(0)
        setTimeout(() => {
            setHiddenLayer(false)
        }, 600);
    }


    return (
        <div className="solution-comp-main-container" >

            <div className="heading-section">
                <p className="main-heading">
                    <span className="span1">
                        "Introducing Nike's
                    </span>
                    <span className="span2">
                        Innovative Solutions"
                    </span>
                </p>
            </div>

            <div className="main-content-container">

                <div className="image-section">
                    {/* <img src={Frame} alt="" className="frame-img"
                        style={{
                            transform: cardId === 1 ? 'rotate(80deg)' :
                                cardId === 2 ? 'rotate(-45deg)' :
                                    cardId === 3 ? 'rotate(-50deg)' :
                                        cardId === 4 && 'rotate(-15deg)'

                        }}
                    /> */}
                </div>

                <div className="shoe-menu-section">
                    <SolutionShoeContent
                        CardId={cardId}
                        SetCardId={setCardId}
                        SetHiddenLayer={setHiddenLayer}
                    />

                </div>
            </div>

            <div className="content-details-layer"
                style={{
                    display: !hiddenLayer && 'none'
                }}

                onMouseEnter={() => { setHiddenLayer(true) }}
            >

                <div className="content-details-inner-section">

                    <div className="cross-btn"
                        onClick={() => {
                            handleCrossEvent()
                        }}

                        style={{
                            display: cardId === 0 && 'none'

                        }}

                    >&#10005;</div>

                    <div className="card-four-details card-details"
                        style={{
                            transform: cardId !== 1 && 'translate(100%)'
                        }}
                    >
                        <div className="card-inner-content">
                            Poorly engineered design elements such as thin soles and weak arch support compromise overall foot <span>health</span> and <span>performance</span>.
                        </div>
                    </div>

                    <div className="card-three-details card-details"
                        style={{
                            transform: cardId !== 2 && 'translate(-100%)'
                        }}
                    >
                        <div className="card-inner-content">
                            Minimal <span>padding</span> and <span>support</span> lead to discomfort during prolonged wear and increased risk of foot fatigue.
                        </div>
                    </div>

                    <div className="card-two-details card-details"
                        style={{
                            transform: cardId !== 3 && 'translate(100%)'
                        }}
                    >
                        <div className="card-inner-content">
                            Low-quality materials and construction contribute to <span>frequent damage</span> and <span>reduced longevity</span>.
                        </div>
                    </div>

                    <div className="card-one-details card-details"
                        style={{
                            transform: cardId !== 4 && 'translate(-100%)'
                        }}
                    >
                        <div className="card-inner-content">
                            Narrow toe box and rigid materials result in <span>pinching</span> and <span>rubbing</span>, leading to blisters and discomfort.                        </div>
                    </div>

                </div>
            </div>

            <div className="explore-more-btn"
                onClick={() => { setExploreMoreBtn(true) }}
            >
                Explore More
            </div>

            <div className="solution-popup-div"
                style={{
                    transform: exploreMoreBtn && 'translateY(0)',
                }}
            >
                <div className="blured-layer-bg"
                    style={{
                        opacity: exploreMoreBtn && '1',
                        transition: !exploreMoreBtn &&'0.2s ease-in-out 0s'

                    }}
                />
                <div className="solution-popup-inner-section">
                    <div className="popup-heading">
                        <p className="heading-one">THERE IS NO LIMITS</p>
                        <p className="heading-two">BELIEVE IN YOU</p>

                    </div>
                    {/* -------------------------------------------------------- */}
                    <div className="middle-section">
                        <NikeYourSelfCard
                            BgColor={'928F88'}
                            imgURL={Athlete1}
                            PopupCardID={popupCardID}
                            SetPopupCardID={setPopupCardID}
                            ID={1}
                        />
                        <NikeYourSelfCard
                            BgColor={'1D7CA6'}
                            imgURL={Athlete2}
                            PopupCardID={popupCardID}
                            SetPopupCardID={setPopupCardID}
                            ID={2}
                        />
                        <NikeYourSelfCard
                            BgColor={'6F411E'}
                            imgURL={Athlete3}
                            PopupCardID={popupCardID}
                            SetPopupCardID={setPopupCardID}
                            ID={3}
                        />

                    </div>

                    <div className="bottom-section">
                        <img src={NikeLogo} alt="" className="nike-logo" />
                    </div>
                    <div className="bg-blured-layer">
                        <p className="bg-heading-blured"
                            style={{
                                // opacity: popupCardID !== 0 && '0',
                                filter: popupCardID === 0 && 'blur(6px)',
                                color: popupCardID === 1 ? '#928F88' :
                                    popupCardID === 2 ? '#1D7CA6' :
                                        popupCardID === 3 && '#6F411E',

                                textShadow:
                                    popupCardID === 1 ? `0 0 10px #928f886d, 0 0 20px #928f886d, 0 0 30px #928f886d, 0 0 40px #928f886d` :
                                        popupCardID === 2 ? `0 0 10px #1D7CA66d, 0 0 20px #1D7CA66d, 0 0 30px #1D7CA66d, 0 0 40px #1D7CA66d` :
                                            popupCardID === 3 && `0 0 10px #6F411E6d, 0 0 20px #6F411E6d, 0 0 30px #6F411E6d, 0 0 40px #6F411E6d`,

                            }}
                        >
                            NIKE <br />
                            YOUR <br />
                            SELF
                        </p>


                        {/* <p className="bg-heading"
                        style={{
                            opacity: popupCardID > 0 && '1',
                            color: popupCardID === 1 ? '#928F88' :
                                popupCardID === 2 ? '#1D7CA6' :
                                    popupCardID === 3 && '#6F411E'
                        }}
                    >
                        NIKE <br />
                        YOUR <br />
                        SELF
                    </p> */}

                    </div>

                    <div className="cross-btn"
                        onClick={() => { setExploreMoreBtn(false) }}

                    >&#10005;</div>

                </div>
            </div>
        </div>
    );
}
