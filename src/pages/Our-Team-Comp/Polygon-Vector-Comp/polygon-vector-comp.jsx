import React from 'react';

// styles
import './polygon-vector-comp.scss';


// images
import polygonVector from '../../../img/out-teams/polygon-vector.png';
// import ProfileImg from '../../../img/meet-our-team/vintage-images.jpeg';

export default function PolygonVectorComp({
    Dir,
    BGC1,
    BGC2,
    CardID,
    ID,
    HeadTeam,
    SetCardID,
    ProImg
}) {

  
    return (
        <div className="polygon-vector-comp-main-container"
            style={{
                transform: ID === CardID && 'scaleX(-1)'
            }}
        >


            <div className="polygon-vector-inner"
                style={{
                    WebkitMaskImage: `url(${polygonVector})`,
                    maskImage: `url(${polygonVector})`,
                    transform: Dir === 'up' && 'rotate(180deg)',

                }}
                onClick={() => { SetCardID(ID) }}
                onMouseOut={() => { SetCardID(null) }}

            >

                <div className="bg-color-ract"
                    style={{
                        background: `linear-Gradient(180deg, #${BGC1} 0%, ${BGC2} 120%)`,
                        opacity: ID !== CardID && '0'
                    }}
                >
                    {/* <img src={ProfileImg} alt="" className="profile-img" /> */}
                </div>

                <div className="bg-color-ract2"
                    style={{
                        background: `linear-Gradient(180deg, #4D4D4D 0%, ${BGC2} 120%)`,
                        opacity: ID === CardID && '0',
                        // display: !HeadTeam && 'none'
                    }}
                >
                    <img src={ProImg} alt="" className="profile-img"
                        style={{
                            transform: Dir === 'up' && 'scale(-1)'
                        }}
                    />

                </div>
            </div>
        </div >
    )
}
