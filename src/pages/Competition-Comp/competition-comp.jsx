import React, { useState } from 'react';

//styles
import './competition-comp.scss';


import adidasLogo from '../../img/competition/adidas-logo.png';
import pumaLogo from '../../img/competition/puma-logo.png';
import underArmourLogo from '../../img/competition/under-armour-logo.png';
import louisVuittonLogo from '../../img/competition/louis-vuitton-logo.png';
import gucciLogo from '../../img/competition/gucci-logo.png';
import otherBrandLogo from '../../img/competition/other-brands-logo.png';
import startupsLogo from '../../img/competition/startups-logo.png';
import nikeVector from '../../img/extras/nike-logo-vector.png';



// imgs
// const SothebysLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/sothebys.png';
// const MakaanLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/makaan.png';
// const LegalDeskLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/legal-desk.png';
// const SignNowLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/signNow.png';
// const CibilLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/cibil.png';
// const CrifLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/crif.png';
// const EquifaxLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/equifax.png';
// const ExperianLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/experian.png';
// const BrokerNetworkLogo = 'https://assets1-bkcuadcwfqfkb5d3.z03.azurefd.net/template/rs-temp2/competition/broker-network.png';



export default function CompetitionComp() {

    const [cardID, setCardID] = useState(0);
    return (
        <div className="competition-comp-main-container" >

            <div className="heading-section">
                <p className="heading-text">
                    <span className="span1">Rising Above The</span><span className='span2'>Cometition</span>
                </p>
            </div>

            <div className="main-content-section">
                <div className="content-section">
                    <div className="content-section-inner-part">
                        <div className="nike-logo-circle"
                            onMouseOver={() => { setCardID(5) }}
                            onMouseOut={() => { setCardID(0) }}
                            style={{
                                border: cardID === 5 && '1px solid #e9b32b'
                            }}
                        >
                            <img src={nikeVector} alt="" className="nike-logo"
                                style={{
                                    transform: cardID === 5 && 'scale(1.1)'
                                }}
                            />
                        </div>

                        <div className="card-one card">
                            <div className="upper-part">Direct Competition</div>
                            <div className="bottom-part"
                                onMouseOver={() => { setCardID(1) }}
                                onMouseOut={() => { setCardID(0) }}
                                style={{
                                    border: cardID === 1 && '1px solid #e9b32b'
                                }}

                            >
                                <img src={adidasLogo} alt="" className="adidas-logo-img"
                                    style={{
                                        transform: cardID === 1 && 'scale(1.1)'
                                    }}
                                />
                                <img src={underArmourLogo} alt="" className="under-armour-logo-img"
                                    style={{
                                        transform: cardID === 1 && 'scale(1.1)'
                                    }}
                                />
                                <img src={pumaLogo} alt="" className="puma-logo-img"
                                    style={{
                                        transform: cardID === 1 && 'scale(1.1)'
                                    }}
                                />

                            </div>
                        </div>

                        <div className="card-two card">
                            <div className="upper-part">Indirect Competition</div>
                            <div className="bottom-part"
                                onMouseOver={() => { setCardID(2) }}
                                onMouseOut={() => { setCardID(0) }}
                                style={{
                                    border: cardID === 2 && '1px solid #e9b32b'
                                }}

                            >
                                <img src={louisVuittonLogo} alt="" className="louis-vuitton-logo-img"
                                    style={{
                                        transform: cardID === 2 && 'scale(1.1)'
                                    }}
                                />
                                <img src={gucciLogo} alt="" className="gucci-logo-img"
                                    style={{
                                        transform: cardID === 2 && 'scale(1.4)'
                                    }}
                                />
                            </div>
                        </div>

                        <div className="card-three card">
                            <div className="upper-part"
                                onMouseOver={() => { setCardID(3) }}
                                onMouseOut={() => { setCardID(0) }}
                                style={{
                                    border: cardID === 3 && '1px solid #e9b32b'
                                }}

                            >
                                <img src={otherBrandLogo} alt="" className="other-brands-logo-img"
                                    style={{
                                        transform: cardID === 3 && 'scale(1.1)'
                                    }}
                                />

                            </div>
                            <div className="bottom-part">Substitute Compition</div>
                        </div>

                        <div className="card-four card">
                            <div className="upper-part"
                                onMouseOver={() => { setCardID(4) }}
                                onMouseOut={() => { setCardID(0) }}
                                style={{
                                    border: cardID === 4 && '1px solid #e9b32b'
                                }}

                            >
                                <img src={startupsLogo} alt="" className="startups-logo-img"
                                    style={{
                                        transform: cardID === 4 && 'scale(1.7)'
                                    }}
                                />

                            </div>
                            <div className="bottom-part">Future Compition</div>
                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
}
