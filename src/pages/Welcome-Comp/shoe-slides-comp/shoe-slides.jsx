import React from 'react';

//styels
import './shoe-slides.scss';

export default function ShoeSlides({
    TriggerValue,
    SHOE_COLLECTION,
    ShoeNum,
    ShoeIndex,
    SetShoeIndex,
}) {


    return (
        <div className="shoe-slides-main-container"
            style={{
                display: TriggerValue.val4 < 1 && 'none'
            }}
        >

            {/* <p>{ShoeNum[currentIndex]}</p>
            <p>{ShoeNum[currentIndex] - 1}</p>
            <p>{ShoeNum[currentIndex] - 2}</p> */}
            {/* <p>{TriggerValue.val4}</p> */}

            {/* 
            <div className="shoe-title-slider">

                <div className="title-slides"
                    style={{
                        // transform: `translateY(${(-shoeTitle + 1) * 100}%)`
                    }}
                >
                    <p className="shoe-title-text"
                        style={{
                            // opacity: shoeTitle != 0 && '0'
                        }}
                    >
                        Revolution of <span className="text-span">Future</span>
                    </p>
                    <p className="shoe-title-text"
                        style={{
                            // opacity: shoeTitle != 1 && '0'
                        }}
                    >
                        Unleash With <span className="text-span">Nike's Energy</span>

                    </p>
                    <p className="shoe-title-text"
                        style={{
                            // opacity: shoeTitle != 2 && '0'
                        }}
                    >
                        Just Nike It: Where Footwear <br /> <span className="text-span">Innovates.</span>

                    </p>
                    <p className="shoe-title-text"
                        style={{
                            // opacity: shoeTitle != 4 && '0'
                        }}
                    >
                        Revolution of <span className="text-span">Future</span>
                    </p>
                </div>


            </div> */}



            <div className="shoe-slider">

                {
                    SHOE_COLLECTION.map((item, i) => {
                        return (
                            <img
                                key={i}
                                className="shoe-img"
                                src={item.imgURL}
                                alt=""

                                style={{
                                    transform: i === ShoeNum[ShoeIndex] ? `translateY(-100vh) rotate(-40deg) scale(0.9)` :
                                        i === ShoeNum[ShoeIndex] - 1 ? `translate(0vh) rotate(0deg) scale(1)` :
                                            i === ShoeNum[ShoeIndex] - 2 && `translateY(80vh) rotate(160deg)`,

                                    opacity: i === ShoeNum[ShoeIndex] - 1 ? '1' : '0'

                                }}
                            />
                        )
                    })
                }

            </div>



        </div>
    )
}
