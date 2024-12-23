import React from 'react';

// styles
import './solution-shoe-content.scss';

// components
import SolutionContentCard from '../Solution-Content-Card/solution-content-card'; 



//imgs
import Shoe from '../../../img/solution/shoe-frame.png';
import leftCardImg from '../../../img/problem/frame-left.png';
import rightCardImg from '../../../img/problem/frame-right.png';


export default function SolutionShoeContent({
  CardId,
  SetCardId,
  SetHiddenLayer
}) {
  return (
    <div className="solution-shoe-content-main-container">

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
            <SolutionContentCard
              BGImage={leftCardImg}
              CardPosition={'l_side'}
              nameTag1='Innovative'
              nameTag2='Design'
              cardNum={1}
              CardId={CardId}
              SetCardId={SetCardId}
              ID={1}
              SetHiddenLayer={SetHiddenLayer}
            />
          </div>

          <img src={Shoe} alt="" className="shoe-img"
            style={{
              transform: CardId === 1 ? 'scale(1.5) rotate(-15deg) translate(0vw, 8vh)' :
                CardId === 2 ? 'scale(1.5) rotate(-10deg) translate(0vw, 5vh)' :
                  CardId === 3 ? 'scale(1.8) rotate(15deg) translate(10vw, -2vh)' :
                    CardId === 4 && 'scale(1.8) rotate(0deg) translate(-4vw, 6vh)'
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
            <SolutionContentCard
              BGImage={leftCardImg}
              CardPosition={'l_side'}
              nameTag1='Durable'
              nameTag2='Construction'
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

              transform: CardId === 2 && 'translate(3.5vw, 2vh)'
            }}
          >
            <SolutionContentCard
              BGImage={rightCardImg}
              CardPosition={'r_side'}
              nameTag1='Enhanced'
              nameTag2='Cushioning'
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
              transform: CardId === 4 && 'scale(1.2) translate(10vw, -3vh)'


            }}
          >
            <SolutionContentCard
              BGImage={rightCardImg}
              CardPosition={'r_side'}
              nameTag1='Customizable'
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
