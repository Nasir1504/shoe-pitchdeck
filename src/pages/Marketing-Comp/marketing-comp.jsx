import React, { useState, useMemo, useEffect } from "react";

//styles
import "./marketing-comp.scss";

//imgs
import footPathImg from '../../img/marketing/foot-path.png';
import maskImg from '../../img/marketing/mask-circle.png';
import footPathMask from '../../img/marketing/foot-path-mask.png';
import Frame1 from '../../img/marketing/frame660.png';
import Frame2 from '../../img/marketing/frame661.png';
import NikeRed from '../../img/marketing/nike-red-logo.png';


export default function MarketingComp() {
    const [trigger, setTrigger] = useState(false);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [cardNum, setCardNum] = useState(-1)

    useEffect(() => {
        const handleWindowMouseMove = event => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
    }, []);

    useMemo(() => {
        trigger && cardNum === -1 && setTimeout(() => {
            setCardNum(0)
        }, 2000);
        cardNum === 0 && setTimeout(() => {
            setCardNum(1)
        }, 2500);

        cardNum === 1 && setTimeout(() => {
            setCardNum(2)
        }, 2500);

        cardNum === 2 && setTimeout(() => {
            setCardNum(3)
        }, 2500);

        cardNum === 3 && setTimeout(() => {
            setCardNum(4)
        }, 2500);

        cardNum === 4 && setTimeout(() => {
            setCardNum(5)
        }, 2500);

        cardNum === 5 && setTimeout(() => {
            setCardNum(6)
        }, 2500);

        cardNum === 6 && setTimeout(() => {
            setCardNum(7)
        }, 2500);

        cardNum === 7 && setTimeout(() => {
            setCardNum(8)
        }, 2500);
        cardNum === 8 && setTimeout(() => {
            setCardNum(9)
        }, 1500);

    }, [trigger, cardNum])


    return (
        <div className="marketing-comp-main-container"
            onMouseOver={() => { setTrigger(true) }}
        >

            <div className="heading-section">
                {/* {cardNum} */}
                <div className="main-heading">
                    <p className="h-one h-part">
                        <span className="span1"
                            style={{
                                clip: trigger && 'rect(0px, 15vw, 5vw, 0px)'
                            }}
                        >
                            <strong>M</strong>
                            <span className="span2">apping</span>
                        </span>
                    </p>

                    <p className="h-two h-part"
                        style={{
                            marginLeft: trigger && '-0.2em',

                        }}
                    >
                        <span className="span1"
                            style={{
                                clip: trigger && 'rect(0px, 15vw, 5vw, 0px)'
                            }}
                        >
                            <strong>E</strong>
                            <span className="span2">xcellence</span>
                        </span>
                    </p>

                    <p className="h-three h-part"
                        style={{
                            marginLeft: trigger && '-0.2em',
                        }}
                    >
                        <span className="span1"
                            style={{
                                clip: trigger && 'rect(0px, 15vw, 5vw, 0px)'
                            }}
                        >
                            <strong>A</strong>
                            <span className="span2">head</span>
                        </span>
                    </p>

                </div>

            </div>

            {/* ================================================ */}

            <div className="bottom-section">
                <div className="foot-path-section"
                    style={{
                        display: !trigger && 'none',
                        transition: cardNum < 9 && '0.6s cubic-bezier(.45, 1.09, .57, 1.11)',
                        maskImg: `url(${maskImg})`,
                        WebkitMaskImage: `url(${maskImg})`,
                        maskRepeat: 'no-repeat',
                        WebkitMaskPosition:
                            cardNum === -1 ? '-30vw 35vh' :
                                cardNum === 0 ? '-15vw 30vh' :
                                    cardNum === 1 ? '0vw 5vh' :
                                        cardNum === 2 ? '12vw 20vh' :
                                            cardNum === 3 ? '25vw 0vh' :
                                                cardNum === 4 ? '38vw 18vh' :
                                                    cardNum === 5 ? '48vw 0vh' :
                                                        cardNum === 6 ? '64vw 24vh' :
                                                            cardNum === 7 ? '75vw 5vh' :
                                                                cardNum === 8 ? `85vw 30vh` :
                                                                    cardNum === 9 && `${coords.x - 200}px ${coords.y - 350}px`

                    }}
                >
                    <img src={footPathMask} alt="" className="foot-path-mask-img"
                        style={{
                            display: cardNum >= 9 && 'none',

                        }}
                    />

                    <div className="year-card-one year-card">
                        <div className="top-frame"
                            style={{
                                backgroundImage: `url(${Frame1})`
                            }}
                        />
                        <p className="bottom-text">1971</p>
                    </div>
                    <div className="year-card-two year-card">
                        <div className="top-frame"
                            style={{
                                backgroundImage: `url(${Frame1})`
                            }}
                        />
                        <p className="bottom-text">1984</p>
                    </div>
                    <div className="year-card-three year-card">
                        <div className="top-frame"
                            style={{
                                backgroundImage: `url(${Frame1})`
                            }}
                        />
                        <p className="bottom-text">2000</p>
                    </div>
                    <div className="year-card-four year-card">
                        <div className="top-frame"
                            style={{
                                backgroundImage: `url(${Frame1})`
                            }}
                        />
                        <p className="bottom-text">2020</p>
                    </div>

                    {/* ----------------------------------------------- */}

                    <div className="year-card-five year-card">
                        <p className="bottom-text">1980</p>
                        <div className="top-frame"
                            style={{
                                backgroundImage: `url(${Frame2})`
                            }}
                        />
                    </div>
                    <div className="year-card-six year-card">
                        <p className="bottom-text">1990</p>
                        <div className="top-frame"
                            style={{
                                backgroundImage: `url(${Frame2})`
                            }}
                        />
                    </div>
                    <div className="year-card-seven year-card">
                        <p className="bottom-text">2010</p>
                        <div className="top-frame"
                            style={{
                                backgroundImage: `url(${Frame2})`
                            }}
                        />
                    </div>

                    <img src={NikeRed} alt="" className="nike-logo-mask-img"
                        style={{
                            display: cardNum < 9 && 'none',

                        }}
                    />


                </div>


                <div className="bottom-section-upper-layer" >

                    <img src={footPathImg} alt="" className="foot-path-img"
                        style={{
                            clip:
                                trigger && cardNum === -1 ? 'rect(0px, 100vw, 400vh, 0px)' :
                                    trigger && cardNum >= 2 && cardNum < 9 ? 'rect(0px, 100vw, 400vh, 100vw)' :
                                        trigger && cardNum === 9 && 'rect(0px, 100vw, 400vh, 0vw)',

                            opacity: cardNum >= 1 && '1'
                        }}
                    />

                    <div className="year-card-one year-card">
                        <div className="top-frame" />
                        <p className="bottom-text"
                            style={{
                                display: cardNum === 9 && 'block'
                            }}
                        >1971</p>
                    </div>
                    <div className="year-card-two year-card">
                        <div className="top-frame" />
                        <p className="bottom-text"
                            style={{
                                display: cardNum === 9 && 'block'
                            }}
                        >1984</p>
                    </div>
                    <div className="year-card-three year-card">
                        <div className="top-frame" />
                        <p className="bottom-text"
                            style={{
                                display: cardNum === 9 && 'block'
                            }}
                        >2000</p>
                    </div>
                    <div className="year-card-four year-card">
                        <div className="top-frame" />
                        <p className="bottom-text"
                            style={{
                                display: cardNum === 9 && 'block'
                            }}
                        >2020</p>
                    </div>
                    {/* ----------------------------------------------- */}

                    <div className="year-card-five year-card">
                        <p className="bottom-text"
                            style={{
                                display: cardNum === 9 && 'block'
                            }}
                        >1980</p>
                        <div className="top-frame" />
                    </div>
                    <div className="year-card-six year-card">
                        <p className="bottom-text"
                            style={{
                                display: cardNum === 9 && 'block'
                            }}
                        >1990</p>
                        <div className="top-frame" />
                    </div>
                    <div className="year-card-seven year-card">
                        <p className="bottom-text"
                            style={{
                                display: cardNum === 9 && 'block'
                            }}
                        >2010</p>
                        <div className="top-frame" />
                    </div>

                </div>
                {/* ----------------------------------------------- */}


                <div className="card-one-detail card-detail"
                    style={{
                        transform: cardNum === 1 && 'translate(0)'
                    }}
                >
                    <p className="hv-text">
                        Nike
                    </p>
                    <p className="lt-text">
                        <span className="span1">Born from Blue</span><br />
                        <span className="span2">Ribbon Sports</span>

                    </p>
                </div>

                <div className="card-two-detail card-detail"
                    style={{
                        transform: cardNum === 2 && 'translate(0)'
                    }}
                >
                    <p className="hv-text">
                        Nike
                    </p>
                    <p className="lt-text">
                        <span className="span1">Went Public <span className="inner-span">becoming</span></span><br />
                        <span className="span2">Ribbon Sports</span>

                    </p>
                </div>
                <div className="card-three-detail card-detail"
                    style={{
                        transform: cardNum === 3 ? 'translate(0)' : cardNum > 3 && 'translate(-100vw)'
                    }}
                >
                    <p className="hv-text">
                        Nike
                    </p>
                    <p className="lt-text">
                        <span className="span1"><span className="inner-span2">JUST</span> DO IT </span><br />
                        <span className="span2"><span className="inner-span1">becoming</span>{' '}Ribbon Sports</span>

                    </p>
                </div>

                <div className="card-four-detail card-detail"
                    style={{
                        transform: cardNum === 4 && 'translate(0)'
                    }}
                >
                    <p className="hv-text">
                        Nike
                    </p>
                    <p className="lt-text">
                        <span className="span1"><span className="inner-span2">JUST</span> DO IT </span><br />
                        <span className="span2"><span className="inner-span1">becoming</span>{' '}Ribbon Sports</span>

                    </p>
                </div>
                <div className="card-five-detail card-detail"
                    style={{
                        transform: cardNum === 5 && 'translate(0)'
                    }}
                >
                    <p className="hv-text">
                        Nike
                    </p>
                    <p className="lt-text">
                        <span className="span1"><span className="inner-span2">JUST</span> DO IT </span><br />
                        <span className="span2"><span className="inner-span1">becoming</span>{' '}Ribbon Sports</span>

                    </p>
                </div>

                <div className="card-six-detail card-detail"
                    style={{
                        transform: cardNum === 6 && 'translate(0)'
                    }}
                >
                    <p className="hv-text">
                        Nike
                    </p>
                    <p className="lt-text">
                        <span className="span1"><span className="inner-span2">JUST</span> DO IT </span><br />
                        <span className="span2"><span className="inner-span1">becoming</span>{' '}Ribbon Sports</span>

                    </p>
                </div>

                <div className="card-seven-detail card-detail"
                    style={{
                        transform: cardNum === 7 && 'translate(0)'
                    }}
                >
                    <p className="hv-text">
                        Nike
                    </p>
                    <p className="lt-text">
                        <span className="span1"><span className="inner-span2">JUST</span> DO IT </span><br />
                        <span className="span2"><span className="inner-span1">becoming</span>{' '}Ribbon Sports</span>

                    </p>
                </div>
            </div>



        </div >
    )
}




