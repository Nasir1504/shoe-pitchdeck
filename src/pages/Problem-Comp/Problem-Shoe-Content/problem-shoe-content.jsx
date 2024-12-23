import React from 'react';

// styles
import './problem-shoe-content.scss';

// components
import ProblemContentCard from '../Problem-Content-Card/problem-content-card';



//imgs
import Shoe from '../../../img/problem/shoe-frame.png';
import leftCardImg from '../../../img/problem/frame-left.png';
import rightCardImg from '../../../img/problem/frame-right.png';


export default function ProblemShoeContent({
  CardId,
  SetCardId,
  SetHiddenLayer
}) {
  return (
    <div className="problem-shoe-content-main-container">

      <div className="left-section"></div>
      <div className="middle-section">

        <div className="shoe-img-container">


          <div className="design-flaws"
            style={{
              clip: CardId !== 1 && CardId !== 0 ?
                'rect(0vw, -10vw, 12vw, -10vw)' :
                'rect(0vw, 40vw, 12vw, -10vw)',

              transform: CardId === 1 && 'scale(1.2)'

            }}
          >
            <ProblemContentCard
              BGImage={leftCardImg}
              CardPosition={'l_side'}
              nameTag1='design'
              nameTag2='flaws'
              cardNum={1}
              CardId={CardId}
              SetCardId={SetCardId}
              ID={1}
              SetHiddenLayer={SetHiddenLayer}
            />
          </div>

          <img src={Shoe} alt="" className="shoe-img"
            style={{
              transform: CardId === 1 ? 'scale(1.5) rotate(20deg) translate(0vw, 0vh)' :
                CardId === 2 ? 'scale(1.4) rotate(0deg) translate(0vw, 5vh)' :
                  CardId === 3 ? 'scale(1.8) rotate(15deg) translate(8vw, -2vh)' :
                    CardId === 4 && 'scale(1.8) rotate(20deg) translate(-8vw, 10vh)'
            }}
          />

          <div className="lack-of-durablity"
            style={{
              clip: CardId !== 3 && CardId !== 0 ?
                'rect(0vw, -10vw, 12vw, -10vw)' :
                'rect(0vw, 40vw, 12vw, -10vw)',
              transform: CardId === 3 && 'scale(1.2) translate(-2vw)'


            }}
          >
            <ProblemContentCard
              BGImage={leftCardImg}
              CardPosition={'l_side'}
              nameTag1='lack of'
              nameTag2='durablity'
              cardNum={3}
              CardId={CardId}
              SetCardId={SetCardId}
              ID={3}
              SetHiddenLayer={SetHiddenLayer}
            />
          </div>

          <div className="poor-cushions"
            style={{
              clip: CardId !== 2 && CardId !== 0 ?
                'rect(0vw, 40vw, 12vw, 40vw)' :
                'rect(0vw, 40vw, 12vw, -20vw)',

              transform: CardId === 2 && 'translate(2vw, -2vh)'
            }}
          >
            <ProblemContentCard
              BGImage={rightCardImg}
              CardPosition={'r_side'}
              nameTag1='poor'
              nameTag2='cushions'
              cardNum={2}
              CardId={CardId}
              SetCardId={SetCardId}
              ID={2}
              SetHiddenLayer={SetHiddenLayer}
            />
          </div>

          <div className="uncomfortable-fit"
            style={{
              clip: CardId !== 4 && CardId !== 0 ?
                'rect(0vw, 40vw, 12vw, 45vw)' :
                'rect(0vw, 40vw, 12vw, -20vw)',
              transform: CardId === 4 && 'scale(1.2) translate(-2vw, 8vh)'


            }}
          >
            <ProblemContentCard
              BGImage={rightCardImg}
              CardPosition={'r_side'}
              nameTag1='uncomfortable'
              nameTag2='fit'
              cardNum={4}
              CardId={CardId}
              SetCardId={SetCardId}
              ID={4}
              SetHiddenLayer={SetHiddenLayer}
            />
          </div>


        </div>

      </div>
      <div className="right-section"></div>


    </div >
  )
}
