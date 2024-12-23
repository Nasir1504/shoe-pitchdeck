import { useState, useRef, useEffect } from "react";
import "./App.scss";
import React from "react";
import { NAVIGATING_BAR_DATA } from "./pages/Nevigating-Bars/NevigatingBarData";

import WelcomeComp from "./pages/Welcome-Comp/welcome-comp";
import ProblemComp from "./pages/Problem-Comp/problem-comp";
import SolutionComp from "./pages/Solution-Comp/solution-comp";

import MarketScopeComp from "./pages/Market-Scope-Comp/market-scope-comp";

import MarketingComp from "./pages/Marketing-Comp/marketing-comp";
import ProductShowcase from "./pages/Product-Showcase/product-showcase";
import NavigatingBar from "./pages/Nevigating-Bars/navigating-bar";

import CompetitionComp from "./pages/Competition-Comp/competition-comp";
import CompetitiveAdvantageComp from "./pages/Competitive-Advantage-Comp/competitive-advantage-comp";

import OurTeamComp from "./pages/Our-Team-Comp/our-team-comp";
import ThankYouComp from "./pages/Thank-You-Comp/thank-you-comp";

// ------------------------------------------------------------------------------------------
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ClickToContinueComp from "./components/Click-To-Continue-Comp/click-to-continue-comp";
import PhoneRotationComp from "./components/Phone-Rotation-Comp/phone-rotation-comp";


export default function App() {

  let [navID, setNavID] = useState(0)

  const [navbarVisibility, setNavbarVisibility] = useState(false);

  function handleNavbarVisibilityTrue() {
    setNavbarVisibility(true)
  }
  function handleNavbarVisibilityFalse() {
    setNavbarVisibility(false)
  }


  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const ref5 = useRef(null);
  const ref6 = useRef(null);
  const ref7 = useRef(null);
  const ref8 = useRef(null);

  const ref9 = useRef(null);
  const ref10 = useRef(null);
  // const ref11 = useRef(null);


  const handleClick = (id, behave) => {
    id === 0 && ref1.current.scrollIntoView({ behavior: behave });
    id === 1 && ref2.current.scrollIntoView({ behavior: behave });
    id === 2 && ref3.current.scrollIntoView({ behavior: behave });
    id === 3 && ref4.current.scrollIntoView({ behavior: behave });

    id === 4 && ref5.current.scrollIntoView({ behavior: behave });
    id === 5 && ref6.current.scrollIntoView({ behavior: behave });
    id === 6 && ref7.current.scrollIntoView({ behavior: behave });
    id === 7 && ref8.current.scrollIntoView({ behavior: behave });

    id === 8 && ref9.current.scrollIntoView({ behavior: behave });
    id === 9 && ref10.current.scrollIntoView({ behavior: behave });
    // console.log(behave)
    setNavID(id)


  };

  function handleRightClick() {

    if (navID === NAVIGATING_BAR_DATA.length - 1) {
      setNavID(navID)

    } else {
      setNavID(navID = navID + 1)

    }
    handleClick(navID, 'smooth')
  }

  function handleLeftClick() {

    if (navID === 0) {
      setNavID(navID)

    }
    else {
      setNavID(navID = navID - 1)

    }
    handleClick(navID, 'smooth')
  }



  // const [OnLoadEvent, setOnLoadEvent] = useState(true)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setOnLoadEvent(false)
  //   }, 1000)
  // }, [])


  // function handleOnLoadEvent() {
  //   setOnLoadEvent(true)
  // }

  let mediaQuery = window.matchMedia(`(max-width: 630px)`);
  const [query, setQuery] = useState(mediaQuery.matches);

  // const [dimensions, setDimensions] = useState({
  //   width: window.innerWidth,
  //   height: window.innerHeight,
  // });

  useEffect(() => {
    const handleResize = () => {
      setQuery(mediaQuery.matches)

      // const newWidth = Math.max(window.innerWidth, dimensions.height);

      // setDimensions({
      //   width: newWidth,
      //   height: window.innerHeight,
      // });

    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line
  }, [mediaQuery]);




  function handleOnLoadPhoneRotateEven() {
    setQuery(false)
  }

  return (
    <div className="app-main"
    // style={{
    //   width: `${dimensions.width}px`
    // }}
    >

      {/* <div className="click-to-continue-comp-div"
          onClick={handleOnLoadEvent}

          style={{
            visibility: OnLoadEvent && "hidden",
          }}
        >
          <ClickToContinueComp
            OnLoadEvent={OnLoadEvent}
          />

        </div> */}

      <div className="phone-rotation-indication-div"
        onClick={handleOnLoadPhoneRotateEven}
        style={{
          display: !query && "none"
        }}
      >
        <PhoneRotationComp />
      </div>

      <div
        className="App-main-bottom-nav"
        onMouseEnter={handleNavbarVisibilityTrue}
      >
        <NavigatingBar
          HandleNavbarVisibilityTrue={handleNavbarVisibilityTrue}
          HandleNavbarVisibilityFalse={handleNavbarVisibilityFalse}
          NavbarVisibility={navbarVisibility}
          HandleClick={handleClick}
          NavID={navID}

        />

      </div>

      <div className="app-left-btn-nav"
        onClick={handleLeftClick}
      >
        <ArrowBackIosIcon
          className="arrow-icon"
          style={{
            color: "#ffffff"
          }}
        />
        <p>BACK</p>
      </div>

      <div className="app-right-btn-nav"
        onClick={handleRightClick}
      >
        <p>NEXT</p>
        <ArrowForwardIosIcon
          className="arrow-icon"
          style={{
            color: "#ffffff"
          }}
        />

      </div>


      <div style={{ minWidth: "100%" }} ref={ref1}><WelcomeComp /></div>
      <div style={{ minWidth: "100%" }} ref={ref2}><ProblemComp /></div>
      <div style={{ minWidth: "100%" }} ref={ref3}><SolutionComp /></div>

      <div style={{ minWidth: "100%" }} ref={ref4}><MarketScopeComp /></div>

      <div style={{ minWidth: "100%" }} ref={ref5}><MarketingComp /></div>
      <div style={{ minWidth: "100%" }} ref={ref6}><ProductShowcase /></div>


      <div style={{ minWidth: "100%" }} ref={ref7}><CompetitionComp /></div>
      <div style={{ minWidth: "100%" }} ref={ref8}><CompetitiveAdvantageComp /></div>

      <div style={{ minWidth: "100%" }} ref={ref9}><OurTeamComp /></div>
      <div style={{ minWidth: "100%" }} ref={ref10}><ThankYouComp /></div>


    </div>
  );
}