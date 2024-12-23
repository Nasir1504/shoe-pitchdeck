import React from 'react';

//styles
import './digital-marketing.scss';

//imgs
import billBoard0 from '../../../img/scope/NIKE-BILL-BOARD-AT-NYC0.png';
import billBoard1 from '../../../img/scope/NIKE-BILL-BOARD-AT-NYC1.png';
import billBoard2 from '../../../img/scope/NIKE-BILL-BOARD-AT-NYC2.png';
import kioskMarket0 from '../../../img/scope/nike-kiosk-marketing0.png';
import kioskMarket1 from '../../../img/scope/nike-kiosk-marketing1.png';
import kioskMarket2 from '../../../img/scope/nike-kiosk-marketing2.png';
import shoeCase0 from '../../../img/scope/shoe-case0.png';
import shoeCase1 from '../../../img/scope/shoe-case0.png';
import shoeCase2 from '../../../img/scope/shoe-case0.png';






export default function DigitalMarketing({
    ID,
    KeyID,
    CardID
}) {
    return (
        <div className="digital-marketing-main-container"
            style={{
                opacity: CardID !== KeyID && KeyID === ID && '0.08'
            }}
        >
            <div className="slider-one">
                <div className="img-one" style={{ backgroundImage: `url(${billBoard0})` }} />
                <div className="img-two" style={{ backgroundImage: `url(${billBoard1})` }} />
                <div className="img-three" style={{ backgroundImage: `url(${billBoard2})` }} />
                <div className="img-one" style={{ backgroundImage: `url(${billBoard0})` }} />
                <div className="img-two" style={{ backgroundImage: `url(${billBoard1})` }} />
                <div className="img-three" style={{ backgroundImage: `url(${billBoard2})` }} />

            </div>
            <div className="slider-two">
                <div className="img-one" style={{ backgroundImage: `url(${kioskMarket0})` }} />
                <div className="img-two" style={{ backgroundImage: `url(${kioskMarket1})` }} />
                <div className="img-three" style={{ backgroundImage: `url(${kioskMarket2})` }} />
                <div className="img-one" style={{ backgroundImage: `url(${kioskMarket0})` }} />
                <div className="img-two" style={{ backgroundImage: `url(${kioskMarket1})` }} />
                <div className="img-three" style={{ backgroundImage: `url(${kioskMarket2})` }} />

            </div>
            <div className="slider-three">
                <div className="img-one" style={{ backgroundImage: `url(${shoeCase0})` }} />
                <div className="img-two" style={{ backgroundImage: `url(${shoeCase1})` }} />
                <div className="img-three" style={{ backgroundImage: `url(${shoeCase2})` }} />
                <div className="img-one" style={{ backgroundImage: `url(${shoeCase0})` }} />
                <div className="img-two" style={{ backgroundImage: `url(${shoeCase1})` }} />
                <div className="img-three" style={{ backgroundImage: `url(${shoeCase2})` }} />

            </div>

        </div>
    )
}
