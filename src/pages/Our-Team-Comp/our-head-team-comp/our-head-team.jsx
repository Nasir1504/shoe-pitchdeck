import React, { useState } from 'react';

// styles
import './our-head-team.scss';

//components
import PolygonVectorComp from '../Polygon-Vector-Comp/polygon-vector-comp';

// img
import ProfileImg from '../../../img/meet-our-team/vintage-img.png';


export default function OurHeadTeam() {

    const [cardID, setCardID] = useState(null)
    return (
        <div className="our-head-team-main-container">
            <div className="top-section">

                <div className="card">
                    <div className="card-inner"
                    // onClick={() => { setCardID(1) }}
                    // onMouseOut={() => { setCardID(null) }}

                    >
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='fff000'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={1}
                            // HeadTeam = {true}
                            ProImg={ProfileImg}

                        />
                    </div>
                </div>

                <div className="card"
                    style={{
                        marginTop: '10%'
                    }}
                >
                    <div className="card-inner"
                    // onClick={() => { setCardID(2) }}
                    // onMouseOut={() => { setCardID(null) }}

                    >
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='fff000'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={2}
                            HeadTeam={true}
                            ProImg={ProfileImg}

                        />
                    </div>
                </div>

                <div className="card" >
                    <div className="card-inner"
                    // onClick={() => { setCardID(3) }}
                    // onMouseOut={() => { setCardID(null) }}

                    >
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='fff000'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={3}
                            HeadTeam={true}
                            ProImg={ProfileImg}

                        />
                    </div>
                </div>

            </div>

            {/* ---------------------------------- */}
            <div className="bottom-section">
                <div className="card"
                    style={{
                        marginTop: '1.4%'
                    }}
                >
                    <div className="card-inner"
                    // onClick={() => { setCardID(4) }}
                    // onMouseOut={() => { setCardID(null) }}

                    >
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='fff000'
                            BGC2=' rgba(0,0,0,1)'
                            CardID={cardID}
                            SetCardID={setCardID}
                            ID={4}
                            HeadTeam={true}
                            ProImg={ProfileImg}

                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
