import React, { useState, useMemo } from "react";

// styles
import "./our-team-comp.scss";
// import TouchAppIcon from '@mui/icons-material/TouchApp';

// components
import OurDesigners from "./our-designers-comp/our-designers";
import OurDeveloper from "./our-developer-comp/our-developer";
import OurHeadTeam from "./our-head-team-comp/our-head-team";

// images
import shoeVectorOne from '../../img/out-teams/shoe-vector-one.png';
import shoeVectorTwo from '../../img/out-teams/shoe-vector-two.png';
import shoeMark from '../../img/out-teams/shoe-mark.png';
import logo from '../../img/extras/nike-logo.png';


export default function OurTeamComp() {

    const [navID, setNavID] = useState(0)

    const [hiddenLayer, setHiddenLayer] = useState(false)
    const [trigger, setTrigger] = useState(false)

    useMemo(() => {
        if (hiddenLayer && !trigger) {
            navID === 0 ? setTimeout(() => {
                setNavID(1)
            }, 1500) :
                navID === 1 && setTimeout(() => {
                    setNavID(2)
                    setTrigger(true)
                }, 3500)

        }
    }, [hiddenLayer, navID, trigger])

    return (
        <div className="our-team-comp-main-container" >

            <div className="hidden-layer"
                style={{
                    display: hiddenLayer && 'none'
                }}
                onMouseOver={() => { setHiddenLayer(true) }}
            />

            <div className="teams-navbar">
                <div className="top-layer" style={{ display: trigger && 'none' }} />
                <div className="nav-btn">
                    <img
                        src={navID === 0 ? shoeVectorTwo : shoeVectorOne}
                        alt=""
                        className="icon-img"
                        onClick={() => { setNavID(0) }}
                    />
                </div>
                <div className="nav-btn">
                    <img
                        src={navID === 1 ? shoeVectorTwo : shoeVectorOne}
                        alt=""
                        className="icon-img"
                        onClick={() => { setNavID(1) }}
                    />
                </div>
                <div className="nav-btn">
                    <img
                        src={navID === 2 ? shoeVectorTwo : shoeVectorOne}
                        alt=""
                        className="icon-img"
                        onClick={() => { setNavID(2) }}
                    />
                </div>

            </div>
            {/* ----------------------------------------------------------- */}
            <img src={logo} alt="" className="main-logo-img" />

            {/* ----------------------------------------------------------- */}

            <p className="main-heading">Meet Our <span>Team</span></p>

            {/* ----------------------------------------------------------- */}

            <div className="teams-slider">
                <div className="teams-slide"
                    style={{
                        transform:
                            navID === 0 ? 'translate(0%, 0%)' :
                                navID === 1 ? 'translate(-25%, -100%)' :
                                    navID === 2 && 'translate(0%, -200%)'

                    }}
                >
                    <div className="our-designers-container"><OurDesigners /></div>
                    <div className="our-developers-container"><OurDeveloper /></div>
                    <div className="our-headteam-container"><OurHeadTeam /></div>

                </div>
            </div>

            {/* ----------------------------------------------------------- */}

            <div className="designer-heading"
                style={{
                    clip: navID === 0 && 'rect(0px, 15vw, 8vw, 0px)',
                    transitionDelay: navID === 0 && '1.5s'
                }}
            >
                <img src={shoeMark} alt="" className="icon-img"
                    style={{
                        opacity: navID === 0 && '1',
                        transitionDelay: navID === 0 && '1.5s'
                    }}
                />
                <p className="name">our designer</p>
            </div>

            <div className="developer-heading"
                style={{
                    clip: navID === 1 && 'rect(0px, 15vw, 8vw, 0px)',
                    transitionDelay: navID === 1 && '1.5s'
                }}
            >
                <img src={shoeMark} alt="" className="icon-img"
                    style={{
                        opacity: navID === 1 && '1',
                        transitionDelay: navID === 1 && '1.5s'
                    }}
                />
                <p className="name">our developer</p>
            </div>

            <div className="head-team-heading"
                style={{
                    clip: navID === 2 && 'rect(0px, 15vw, 8vw, 0px)',
                    transitionDelay: navID === 2 && '1.5s'
                }}
            >
                <img src={shoeMark} alt="" className="icon-img"
                    style={{
                        opacity: navID === 2 && '1',
                        transitionDelay: navID === 2 && '1.5s'
                    }}
                />
                <p className="name">our head team</p>
            </div>



        </div >
    )
    // {/* <a href="https://www.linkedin.com/in/devanshu-pasari-931951241/" target="_blank" rel='noreferrer'><img src={Instagram} alt="" /></a> */ }
}



