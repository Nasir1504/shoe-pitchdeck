import React, { useState } from "react";
// import React, { useEffect, useRef } from 'react';
import "./navigating-bar.scss";
import { NAVIGATING_BAR_DATA } from "./NevigatingBarData";


export default function NavigatingBar(props) {

  let [itemID, setItemID] = useState(0)


  function handleItemId(id) {
    setItemID(id)
  }


  return (
    <div className="navigating-bar-main-container"

      onMouseLeave={props.HandleNavbarVisibilityFalse}
      style={{
        top: !props.NavbarVisibility && "-8vw"
      }}
    >
      <div className="top-layer">
        {
          NAVIGATING_BAR_DATA.map((item, index) => {

            return (
              <div
                className="btn-div" key={index} >
                <div className="name-div"
                  onMouseEnter={() => {
                    handleItemId(index)
                  }}
                  onMouseLeave={() => {
                    handleItemId(-1)
                  }}
                  onClick={() => {
                    props.HandleClick(index, 'instant')
                  }}
                  style={{
                    color: itemID === index ? '#DFB048' : '#dfaf488f',

                  }}
                >
                  <p
                    className="name-text"
                    style={{
                      color: props.NavID === index ? '#ffffff' : '#ffffff8f',
                      textTransform: props.NavID === index && 'uppercase'


                    }}
                  >{item.shortName}</p>

                  <div className="icon-img-div"
                    // style={{
                    //   transform: props.NavID === index && 'translate(-5%. 15%) scale(1.05)'
                    // }}
                  >
                    <img src={item.imgURL1} alt="" className="icon-img" />
                  </div>

                </div>

              </div>
            )
          })
        }
      </div>



      <div className="bottom-layer">
        <div className="hidden-layer-div"
          onMouseEnter={props.HandleNavbarVisibilityTrue}
        />
        <p>{props.NavID + 1} / {NAVIGATING_BAR_DATA.length}</p>

        <hr className="hr-2" />

        <p>Quick Access Bar</p>

        <hr className="hr-3" />

        <div className="para-div">
          {
            NAVIGATING_BAR_DATA.map((item, index) => {
              return <p key={index}>{props.NavID === index && item.name}</p>
            })
          }
        </div>
      </div>

    </div >
  )
}