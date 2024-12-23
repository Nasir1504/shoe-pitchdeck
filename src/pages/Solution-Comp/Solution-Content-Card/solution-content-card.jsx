import React from "react";

//styles
import "./solution-content-card.scss";

//components

//imgs
import Ribbon1 from '../../../img/problem/ribbon1.png';
import Ribbon2 from '../../../img/problem/ribbon2.png';
import Ribbon3 from '../../../img/solution/ribbon5.png';
import Ribbon4 from '../../../img/solution/ribbon6.png';


export default function SolutionContentCard({
    BGImage,
    CardPosition,
    nameTag1,
    nameTag2,
    cardNum,
    CardId,
    SetCardId,
    ID,
    SetHiddenLayer
}) {

    const handleCardID = (id) => {
        setTimeout(() => {
            SetCardId(id)

        }, 100);
    }
    return (

        <div className="solution-content-card-container" >
            <div className="card-vector-img"
                style={{
                    backgroundImage: `url(${BGImage})`,
                    justifyContent: CardPosition === 'l_side' ? 'flex-start' :
                        CardPosition === 'r_side' && 'flex-end',

                }}
            >
                <div className="blured-rectangle"
                    onClick={() => {
                        handleCardID(ID)
                        SetHiddenLayer(true)
                    }}

                    style={{
                        left: CardPosition === 'l_side' && '-5%',
                        right: CardPosition === 'r_side' && '-5%'
                    }}
                >
                    <p className="name-tag">
                        <span className="inner-span"
                            style={{
                                paddingLeft: CardPosition === 'l_side' && '15%',
                                paddingRight: CardPosition === 'r_side' && '15%'

                            }}
                        >
                            <span className="span-tag1">{nameTag1}</span> &nbsp;
                            <span className="span-tag2">{nameTag2}</span>

                        </span>
                    </p>
                </div>
            </div>

            <div className="ribbon-vector1"
                style={{
                    backgroundImage: `url(${Ribbon1})`,
                    display: cardNum === 1 && 'block'
                }}
            />
            <div className="ribbon-vector2"
                style={{
                    backgroundImage: `url(${Ribbon2})`,
                    display: cardNum === 2 && 'block'

                }}
            />
            <div className="ribbon-vector3"
                style={{
                    backgroundImage: `url(${Ribbon3})`,
                    display: cardNum === 3 && 'block'

                }}
            />
            <div className="ribbon-vector4"
                style={{
                    backgroundImage: `url(${Ribbon4})`,
                    display: cardNum === 4 && 'block'

                }}
            />
        </div>

    );
}