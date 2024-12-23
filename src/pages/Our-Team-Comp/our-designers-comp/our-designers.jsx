import React from 'react';

// styles
import './our-designers.scss';

//components
import PolygonVectorComp from '../Polygon-Vector-Comp/polygon-vector-comp';

export default function OurDesigners() {
    return (
        <div className="our-designers-main-container">
            <div className="top-section">

                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='0C94FD'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
                <div className="card"
                    style={{
                        marginTop: '4%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='FF0000'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='7000FF'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
                <div className="card"
                    style={{
                        marginTop: '4%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='FFF500'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='CF5248'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>

            </div>
            <div className="middle-section">
                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='00FF94'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
                <div className="card"
                    style={{
                        marginTop: '4%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='up'
                            BGC1='FF3D00'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
                <div className="card" >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='BD00FF'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
            </div>

            {/* ---------------------------------- */}
            <div className="bottom-section">
                <div className="card"
                    style={{
                        marginTop: '2%'
                    }}
                >
                    <div className="card-inner">
                        <PolygonVectorComp
                            Dir='down'
                            BGC1='00E6FF'
                            BGC2=' rgba(0,0,0,1)'
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
