import React, { useState, useEffect } from 'react';

// styles
import './product-showcase.scss';

// images

import BGShowcase from '../../img/product-showcase/product-showcase.png';
import BGShowcaseS from '../../img/product-showcase/product-showcaseS.png';
import ShowcaseShoeTop from '../../img/product-showcase/showcase-shoe-top.png';
import ShowcaseShoeBottom from '../../img/product-showcase/showcase-shoe-bottom.png';
import ShowcaseBoxes from '../../img/product-showcase/showcase-boxes.png';
import ShowcaseShoecase from '../../img/product-showcase/showcase-shoecase.png';

import ShoecaseLighting from '../../img/product-showcase/showcase-lighting.png';
import ShoecaseHeading from '../../img/product-showcase/showcase-heading.png';
import ShoecaseSubHeading from '../../img/product-showcase/showcase-sub-heading.png';
import JustDoItHeading from '../../img/product-showcase/just-do-it-heading.png';
import shoeBoxTop from '../../img/product-showcase/shoe-box-top.png';
import shoeBoxBottom from '../../img/product-showcase/shoe-box-bottom.png';
import NikeShoeImg from '../../img/product-showcase/nike-shoe-blue.png';
import NikeShoeLogoRedImg from '../../img/product-showcase/nike-shoe-logo-red.png';



export default function ProductShowcase() {

    const [triggerID, setTriggerID] = useState(0)
    const [mainTrigger, setMainTrigger] = useState(true)


    useEffect(() => {
        const bgImgRef = document.querySelectorAll('.bg-container')

        bgImgRef.forEach((div) => {

            const Img = div.querySelector('img')

            function loaded() {
                div.classList.add('loaded')
            }
            if (Img.complete) {
                loaded()
            }
            else {
                Img.addEventListener('load', loaded)
            }
        })

    }, []);

    useEffect(() => {
        if (!mainTrigger && triggerID === 0) {
            setTimeout(() => {
                setTriggerID(1)

            }, 500);
        }
        else if (triggerID === 1) {
            setTimeout(() => {
                setTriggerID(2)

            }, 1500);
        }
        else if (triggerID === 2) {
            setTimeout(() => {
                setTriggerID(3)

            }, 1500);
        }
        else if (triggerID === 3) {
            setTimeout(() => {
                setTriggerID(4)

            }, 1500);
        }
        else if (triggerID === 4) {
            setTimeout(() => {
                setTriggerID(5)

            }, 1500);
        }
        else if (triggerID === 5) {
            setTimeout(() => {
                setTriggerID(6)

            }, 1500);
        }
        else if (triggerID === 6) {
            setTimeout(() => {
                setTriggerID(7)

            }, 1500);
        }
        else if (triggerID === 7) {
            setTimeout(() => {
                setTriggerID(8)

            }, 1500);
        }
        else if (triggerID === 8) {
            setTimeout(() => {
                setTriggerID(9)

            }, 1500);
        }
        else if (triggerID === 9) {
            setTimeout(() => {
                setTriggerID(10)

            }, 1500);
        }
    }, [triggerID,mainTrigger])

    return (
        <div className="product-showcase-main-container">
            <div className="hidden-layer"
                style={{
                    display: !mainTrigger && 'none'
                }}
                onMouseOver={() => { setMainTrigger(false) }}
            />

            <div
                className="bg-container"
                style={{
                    backgroundImage: `url(${BGShowcaseS})`,
                    filter: triggerID >= 5 && 'blur(0px)'

                }}
            >
                <img src={BGShowcase} alt="" className="bg-img" />
            </div>

            <div className="showcase-shoe-container">
                <img src={ShowcaseShoeTop} alt="" className="showcase-shoe-img"
                    style={{
                        opacity: triggerID >= 2 && '1',
                        filter: triggerID >= 3 && 'blur(0px)'
                    }}
                />
                <img src={ShowcaseShoecase} alt="" className="showcase-shoecase-img"

                />
                <img src={ShowcaseShoeBottom} alt="" className="showcase-shoe-img"
                    style={{
                        opacity: triggerID >= 2 && '1',
                        filter: triggerID >= 3 && 'blur(0px)'
                    }}
                />

            </div>

            <div className="showcase-boxes">
                <img src={ShowcaseBoxes} alt="" className="showcase-boxes-img" />

            </div>

            <div className="shoebox-container">

                <div className="nike-shoe"
                    style={{
                        opacity: triggerID >= 5 && '1',
                        transition: triggerID >= 8 && triggerID < 9 && '0.8s cubic-bezier(.26,.82,.35,1.22)',
                        transform:
                            triggerID >= 5 && triggerID < 6 ? 'scale(1) rotate(-20deg) translateY(-2.8vw)' :
                                triggerID >= 6 && triggerID < 7 ? 'scale(1.8) rotate(-16deg) translateY(-2.8vw)' :
                                    triggerID >= 7 && triggerID < 8 ? 'scale(1.8) rotate(-8deg) translateY(-2.8vw)' :
                                        triggerID >= 8 && triggerID < 9 ? 'scale(0.8) rotate(-8deg) translateY(-2.8vw)' :
                                            triggerID >= 9 && 'scale(0.8) rotate(-16deg) translateY(-2.8vw)'



                    }}
                >
                    <img src={NikeShoeImg} alt="" className="nike-shoe-img" />
                    <img src={NikeShoeLogoRedImg} alt="" className="nike-shoe-red-logo-img"
                        style={{
                            opacity:
                                triggerID >= 6 && triggerID < 7 ? '1' :
                                    triggerID >= 7 && triggerID < 9 ? '0' :
                                        triggerID >= 9 && '1'
                        }}
                    />

                </div>

                <div className="inner-shoebox"
                    style={{
                        transform:
                            triggerID >= 3 && triggerID < 4 ? 'rotate(15deg)' :
                                triggerID >= 4 && 'rotate(-15deg)'

                    }}
                >

                    <img src={shoeBoxTop} alt="" className="shoe-box-top-img"
                        style={{
                            transform: triggerID >= 2 && triggerID < 5 ? 'translateY(0vh)' :
                                triggerID >= 5 && triggerID < 6 ? 'translate(2vw, -25vh)' :
                                    triggerID >= 6 && 'translate(1vw, -80vh) rotate(-165deg)'

                            //     triggerID >= 5 && triggerID < 6 ? 'translateY(-15vh)' :

                        }}
                    />
                    <img src={shoeBoxBottom} alt="" className="shoe-box-bottom-img"
                        style={{
                            transform: triggerID >= 2 && triggerID < 5 ? 'translateY(0vh)' :
                                triggerID >= 5 && triggerID < 6 ? 'translate(-2vw, 7vh) rotate(15deg)' :
                                    triggerID >= 6 && 'translate(-1vw, 40vh) rotate(195deg)'

                        }}
                    />
                </div>

            </div>


            <div className="showcase-shoe-lighting"
                style={{
                    clip: triggerID >= 10 && 'rect(0px,100vw,100vh,0px)'

                }}
            >
                <img src={ShoecaseLighting} alt="" className="showcase-lighting-img" />

            </div>
            <div className="showcase-heading">
                <img src={ShoecaseHeading} alt="" className="showcase-heading-img" />

            </div>
            <div className="showcase-sub-heading">
                <img src={ShoecaseSubHeading} alt="" className="showcase-sub-heading-img"
                    style={{
                        opacity: triggerID >= 1 && '1',
                        transform: triggerID >= 1 && 'scale(1) translateY(0vw)',

                    }}
                />

            </div>
            <div className="just-do-it">
                <img src={JustDoItHeading} alt="" className="just-do-it-img" />

            </div>
            {/* <p>
                {triggerID.toString()}
            </p> */}
        </div>
    )
}
