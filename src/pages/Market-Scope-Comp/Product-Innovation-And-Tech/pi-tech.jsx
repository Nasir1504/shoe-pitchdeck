import React, { useState, useEffect } from 'react';

// styles
import './pi-tech.scss';

//images
import glassXS from '../../../img/scope/glass_xs.png';
import glassS from '../../../img/scope/glass_s.png';
import glassM from '../../../img/scope/glass_m.png';
import glassL from '../../../img/scope/glass_l.png';
import shoeOne from '../../../img/scope/single-show-case-nike-shoes1.png';
import shoeTwo from '../../../img/scope/single-show-case-nike-shoes2.png';
import shoeThree from '../../../img/scope/single-show-case-nike-shoes3.png';
import shoeFour from '../../../img/scope/single-show-case-nike-shoes4.png';

import Icon1 from '../../../img/scope/icon1.png';
import Icon2 from '../../../img/scope/icon2.png';
import Icon3 from '../../../img/scope/icon3.png';
import frameOne from '../../../img/scope/Group-1000011139.png'
import frameTwo from '../../../img/scope/image-652.png'
import frameThree from '../../../img/scope/Group-1000011071.png'
import frameFour from '../../../img/scope/Group-1000011140.png'
import subtractOne from '../../../img/scope/subtract1.png';
import subtractTwo from '../../../img/scope/subtract2.png';
import subtractThree from '../../../img/scope/subtract3.png';




export default function PITech({
    ID,
    KeyID,
    CardID
}) {

    const [shoeID, setShoeID] = useState(0);
    const [frameSlide, setFrameSlide] = useState(false)

    useEffect(() => {
        CardID === 3 && shoeID === 0 && setTimeout(() => {
            setShoeID(1)
        }, 1500);

        shoeID === 1 && setTimeout(() => {
            setShoeID(2)
        }, 3000);

        shoeID === 2 && setTimeout(() => {
            setShoeID(3)
        }, 3000);

        shoeID === 3 && setTimeout(() => {
            setShoeID(0)
            setFrameSlide(true)
        }, 3000);

        CardID !== 3 && setTimeout(() => {
            setFrameSlide(false)
        }, 1000);


    }, [shoeID, CardID])



    return (
        <div className="pi-tech-main-container"
            style={{
                opacity: CardID !== KeyID && KeyID === ID && '0.08'
            }}
        >
            <div className="inner-main">
                <div className="left-section">

                    <div className="slides"
                        style={{
                            transform: frameSlide && 'translateY(-100%)'
                        }}
                    >

                        <div className="upper-section">
                            <div className="glass-two glass"><img src={glassS} alt="" /></div>
                            <div className="glass-four glass"><img src={glassL} alt="" /></div>
                            <div className="glass-three glass"><img src={glassM} alt="" /></div>
                            <div className="glass-one glass"><img src={glassXS} alt="" /></div>

                            <div className="slider-section">
                                <div className="slides-div"
                                    style={{
                                        transform: shoeID === 0 ? 'translateX(7%)' :
                                            shoeID === 1 ? 'translateX(112%)' :
                                                shoeID === 2 ? 'translateX(217%)' :
                                                    shoeID === 3 && 'translateX(322%)'
                                    }}
                                >
                                    <img src={shoeOne} alt=""
                                        style={{
                                            transform: shoeID === 0 ? 'scale(0.8)' : 'scale(1)'
                                        }}
                                    />
                                    <img src={shoeTwo} alt=""
                                        style={{
                                            transform: shoeID === 1 ? 'scale(0.8)' : 'scale(1)'
                                        }}
                                    />
                                    <img src={shoeThree} alt=""
                                        style={{
                                            transform: shoeID === 2 ? 'scale(0.8)' : 'scale(1)'
                                        }}
                                    />
                                    <img src={shoeFour} alt=""
                                        style={{
                                            transform: shoeID === 3 ? 'scale(0.8)' : 'scale(1)'
                                        }}
                                    />

                                </div>
                            </div>

                        </div>

                        <div className="lower-section">
                            <div className="image-one"
                                style={{
                                    WebkitMaskImage: `url(${subtractOne})`,
                                    maskImage: `url(${subtractOne})`,
                                }}
                            >
                                <img src={frameOne} alt="" className="frame-img" />
                            </div>

                            <div className="image-two"
                                style={{
                                    WebkitMaskImage: `url(${subtractTwo})`,
                                    maskImage: `url(${subtractTwo})`,
                                }}
                            >
                                <img src={frameTwo} alt="" className="frame-img" />
                            </div>

                            <div className="image-three"
                                style={{
                                    WebkitMaskImage: `url(${subtractThree})`,
                                    maskImage: `url(${subtractThree})`,
                                }}
                            >
                                <img src={frameFour} alt="" className="frame-img" />
                            </div>

                            <div className="image-four" >
                                <img src={frameThree} alt="" className="frame-img" />

                            </div>

                        </div>
                    </div>
                </div>

                {/* ----------------------------- */}
                <div className="right-section">
                    <div className="content-slider">
                        <div className="slides"
                            style={{
                                transform: frameSlide && 'translateY(-100%)'
                            }}
                        >
                            <div className="upper-content">
                                <p className="heading">
                                    An Introduction to Our Vision & <span className="text-span">Values</span>
                                </p>
                                <p className="content">
                                    Join us on a journey of innovation and inspiration as we
                                    harness the spirit of Nike to revolutionize your industry
                                    or niche. Our project is more than just a product – it's a
                                    bold vision to redefine the future of industry by infusing
                                    it with the energy, passion, and innovation that define
                                    the Nike brand.

                                </p>

                                <div className="icon-section">
                                    <img src={Icon1} alt="" className="icon" />
                                    <img src={Icon2} alt="" className="icon" />
                                    <img src={Icon3} alt="" className="icon" />

                                </div>
                            </div>
                            <div className="lower-content">
                                <p className="heading">
                                    At Nike's Innovation Lab
                                </p>
                                <p className="content">
                                    we redefine sportswear. From concept to creation,
                                    we pioneer performance, style, and comfort. Join us
                                    in pushing boundaries. Welcome to the future of Nike.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
