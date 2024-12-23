import React from "react";

// styles
import "./competitive-advantage-comp.scss";

//components
import AdvantageComp from "./advantage-comp";

// DATA
import { CompAdvantageData } from "./compAdvantageData";

// imgs
import adidasLogo from '../../img/competitive-advantage/adidas-logo.png';
import nikeLogo from '../../img/competitive-advantage/nike-logo.png';
import pumaLogo from '../../img/competitive-advantage/puma-logo.png';
import underArmourLogo from '../../img/competitive-advantage/under_armour_logo.png';
import startupLogo from '../../img/competitive-advantage/startups.png';
import shoeImg from '../../img/competitive-advantage/shoe-img.png';



export default function CompetitiveAdvantageComp() {

    return (
        <div className="competitive-advantage-comp-main-container" >

            <img src={shoeImg} alt="" className="bg-img" />

            <div className="heading-section">
                <p className="main-heading">
                    <span className="span1">
                        "Leading the Pack, Defining
                    </span>
                    <span className="span2">
                        The Future"
                    </span>
                </p>
            </div>
            <div className="content-body">
                <div className="menu-contents">
                    <div className="features-heading-div">
                        <p>FEATURES</p>
                    </div>
                    <div className="right-div">

                        <div className="_99acres-div company-logos">
                            <img src={nikeLogo} alt="" />
                        </div>
                        <div className="no-brokers-div company-logos">
                            <img src={adidasLogo} alt="" />
                        </div>
                        <div className="housing-div company-logos">
                            <img src={pumaLogo} alt="" />
                        </div>
                        <div className="magic-bricks-div company-logos">
                            <img src={underArmourLogo} alt="" />
                        </div>
                        <div className="broker-network-div company-logos">
                            <img src={startupLogo} alt="" />
                        </div>
                    </div>

                </div>
                <div className="content-item-div">
                    {
                        CompAdvantageData.map((item, i) => {
                            return <AdvantageComp
                                key={i}
                                name={item.name}
                                Value1={item.value1.toLowerCase()}
                                Value2={item.value2.toLowerCase()}
                                Value3={item.value3.toLowerCase()}
                                Value4={item.value4.toLowerCase()}
                                Value5={item.value5.toLowerCase()}

                            />
                        })
                    }
                </div>
            </div>


        </div>
    );
}