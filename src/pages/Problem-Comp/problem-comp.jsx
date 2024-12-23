import React, { useState } from "react";

//styles
import "./problem-comp.scss";

// components
import ProblemShoeContent from "./Problem-Shoe-Content/problem-shoe-content";

// import TouchAppIcon from '@mui/icons-material/TouchApp';

//imgs
import Frame from '../../img/problem/Frame1000002596.png';


export default function ProblemComp() {

    // const [upDownEffect, setUpDownEffect] = useState(false);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setUpDownEffect(prev => {
    //             return !prev
    //         })
    //     }, 1000)

    // }, [upDownEffect])

    const [cardId, setCardId] = useState(0)
    const [hiddenLayer, setHiddenLayer] = useState(false)


    const handleCrossEvent = () => {
        setCardId(0)
        setTimeout(() => {
            setHiddenLayer(false)
        }, 600);
    }


    return (
        <div className="problem-comp-main-container" >

            <div className="heading-section">
                <p className="main-heading">
                    <span className="span1">
                        Hurdle
                    </span>
                    <span className="span2">
                        Highlight
                    </span>
                </p>
            </div>

            <div className="main-content-container">

                <div className="image-section">
                    <img src={Frame} alt="" className="frame-img"
                        style={{
                            transform: cardId === 1 ? 'rotate(80deg)' :
                                cardId === 2 ? 'rotate(-45deg)' :
                                    cardId === 3 ? 'rotate(-50deg)' :
                                        cardId === 4 && 'rotate(-15deg)'

                        }}
                    />
                </div>

                <div className="shoe-menu-section">
                    <ProblemShoeContent
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
        </div>
    );
}
