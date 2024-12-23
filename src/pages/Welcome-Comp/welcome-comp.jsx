import React, { useEffect, useState } from "react";

//styles
import "./welcome-comp.scss";

//components
import ShoeSlides from "./shoe-slides-comp/shoe-slides";

//imgs
import bgImg from '../../img/welcome-page/Frame1000002683.png';
import justDoItImg from '../../img/welcome-page/frame-justdoit.png';
import glassImg1 from '../../img/welcome-page/glass1.png';
import glassImg2 from '../../img/welcome-page/glass2.png';
import glassImg3 from '../../img/welcome-page/glass3.png';
import glassImg4 from '../../img/welcome-page/glass4.png';
import logoImg from '../../img/extras/nike-logo.png';

// imgs 
import shoe1 from '../../img/welcome-page/shoe-frame1.png';
import shoe2 from '../../img/welcome-page/shoe-frame2.png';
import shoe3 from '../../img/welcome-page/shoe-frame3.png';
import shoe4 from '../../img/welcome-page/shoe-frame4.png';
import shoe5 from '../../img/welcome-page/shoe-frame5.png';
import shoeVector1 from '../../img/welcome-page/shoe-vector1.png';
import shoeVector2 from '../../img/welcome-page/shoe-vector2.png';
import shoeVector3 from '../../img/welcome-page/shoe-vector3.png';


export default function WelcomeComp(props) {

    const [trigger, setTrigger] = useState(false)
    const [triggerValue, setTriggerValue] = useState({
        val1: 0,
        val2: 0,
        val3: 0,
        val4: 0,


    })
    const SHOE_COLLECTION = [
        {
            imgURL: shoe1,
            shoeVector: shoeVector1,

        },
        {
            imgURL: shoe2,
            shoeVector: shoeVector2,

        },
        {
            imgURL: shoe3,
            shoeVector: shoeVector3,

        },
        {
            imgURL: shoe4,
            shoeVector: shoeVector1,

        },
        {
            imgURL: shoe5,
            shoeVector: shoeVector2,

        },
        {
            imgURL: shoe1,
            shoeVector: shoeVector3,

        },

    ];

    // eslint-disable-next-line
    const [shoeNum, setShoeNum] = useState([1, 2, 3, 4, 5, 6]);

    const [shoeIndex, setShoeIndex] = useState(0);


    useEffect(() => {
        const intervalShoeCollection = setInterval(() => {
            setShoeIndex(prevIndex => (prevIndex + 1) % shoeNum.length);
        }, 2500);

        return () => clearInterval(intervalShoeCollection);
    }, [shoeNum]);

    useEffect(() => {
        triggerValue.val1 === 0 && setTimeout(() => {
            setTriggerValue({
                val1: 1,
                val2: 0,
                val3: 0,
                val4: 0,

            })
        }, 600);

        triggerValue.val1 === 1 && triggerValue.val2 === 0 && setTimeout(() => {
            setTriggerValue({
                val1: 1,
                val2: 1,
                val3: 0,
                val4: 0,

            })
        }, 600);

        triggerValue.val2 === 1 && triggerValue.val3 === 0 && setTimeout(() => {
            setTriggerValue({
                val1: 1,
                val2: 1,
                val3: 1,
                val4: 0,

            })
        }, 600);
        triggerValue.val3 === 1 && triggerValue.val4 === 0 && setTimeout(() => {
            setTriggerValue({
                val1: 1,
                val2: 1,
                val3: 1,
                val4: 1,
            })
        }, 1200);
    }, [triggerValue])


    useEffect(() => {
        setTimeout(() => {
            setTrigger(true)
        }, 600);
    }, [])

    return (
        <div className="welcome-comp-main-container">

            {/* <p style={{color:'#fff', position:'absolute',zIndex:'5'}}>{triggerValue.val3}</p> */}


            <div className="logo-section">
                <img src={logoImg} alt="" className="logo-img" />
            </div>

            <div className="bg-img-div"
                style={{
                    backgroundImage: `url(${bgImg})`,
                    filter: trigger && 'saturate(1)'
                }}
            />
            <div className="just-do-it-slides"
                style={{
                    opacity: triggerValue.val1 === 1 && triggerValue.val3 === 0 ? '0.2' :
                        triggerValue.val1 === 1 && triggerValue.val3 === 1 && '1',
                    transition: triggerValue.val1 === 1 && '0.8s cubic-bezier(.23, .97, .47, .98) 1s',
                    transform: triggerValue.val1 === 1 && 'scale(1)'
                }}
            >
                <div className="slider"
                    style={{
                        animation: triggerValue.val2 === 1 && 'identifierKF 8.5s linear 1.4s infinite'
                    }}
                >
                    <div className="slide1 slides"
                        style={{
                            backgroundImage: `url(${justDoItImg})`
                        }}
                    ></div>
                    <div className="slide2 slides"
                        style={{
                            backgroundImage: `url(${justDoItImg})`
                        }}
                    ></div>
                    <div className="slide3 slides"
                        style={{
                            backgroundImage: `url(${justDoItImg})`
                        }}
                    ></div>
                    <div className="slide4 slides"
                        style={{
                            backgroundImage: `url(${justDoItImg})`
                        }}
                    ></div>


                </div>
            </div>

            <div className="content-section">
                <div className="glass-group"
                    style={{
                        opacity: triggerValue.val1 === 1 && '1'

                    }}
                >
                    <img src={glassImg1} alt="" className="glass1 glass-img"
                        style={{
                            transform: triggerValue.val1 === 1 && triggerValue.val2 === 0 ? 'translate(150%) scaleY(1)' :
                                triggerValue.val1 === 1 && triggerValue.val2 === 1 && 'translate(0vw) scale(0.95)',
                            transition: triggerValue.val1 === 1 && '0.8s cubic-bezier(.23, .97, .47, .98) 1s',
                            zIndex: triggerValue.val2 === 1 && '1'
                        }}
                    />
                    <img src={glassImg2} alt="" className="glass2 glass-img"
                        style={{
                            transform: triggerValue.val1 === 1 && triggerValue.val2 === 0 ? 'translate(50%) scaleY(1)' :
                                triggerValue.val1 === 1 && triggerValue.val2 === 1 && 'translate(0vw) scale(1.06)',
                            transition: triggerValue.val1 === 1 && '0.8s cubic-bezier(.23, .97, .47, .98) 1s',
                            zIndex: triggerValue.val2 === 1 && '3'
                        }}
                    />
                    <img src={glassImg3} alt="" className="glass3 glass-img"
                        style={{
                            transform: triggerValue.val1 === 1 && triggerValue.val2 === 0 ? 'translate(-50%) scaleY(1)' :
                                triggerValue.val1 === 1 && triggerValue.val2 === 1 && 'translate(0.3vw) scale(1.01)',
                            transition: triggerValue.val1 === 1 && '0.8s cubic-bezier(.23, .97, .47, .98) 1s',
                            zIndex: triggerValue.val2 === 1 && '1'
                        }}
                    />
                    <img src={glassImg4} alt="" className="glass4 glass-img"
                        style={{
                            transform: triggerValue.val1 === 1 && triggerValue.val2 === 0 ? 'translate(-150%) scaleY(1)' :
                                triggerValue.val1 === 1 && triggerValue.val2 === 1 && 'translate(0vw) scale(0.95)',
                            transition: triggerValue.val1 === 1 && '0.8s cubic-bezier(.23, .97, .47, .98) 1s',
                            zIndex: triggerValue.val2 === 1 && '0'
                        }}
                    />

                </div>
            </div>

            <div className="shoe-container">
                <ShoeSlides
                    TriggerValue={triggerValue}
                    SHOE_COLLECTION={SHOE_COLLECTION}
                    ShoeNum={shoeNum}
                    ShoeIndex={shoeIndex}
                    SetShoeIndex={setShoeIndex}
                />
            </div>

            <div className="shoe-vector-container">
                {
                    SHOE_COLLECTION.map((item, i) => {
                        return (
                            <img
                                key={i}
                                src={item.shoeVector}
                                alt=""
                                className="shoe-vector-img"
                                style={{
                                    opacity: i === shoeIndex && '1'
                                }}
                            />
                        )
                    })
                }
            </div>

        </div>
    );
}


