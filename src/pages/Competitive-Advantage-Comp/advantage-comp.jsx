import "./advantage-comp.scss";

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


export default function AdvantageComp(props) {

    return (

        <div className="advantage-comp-main-container">

            <div className="left-part-div">
                <p><span></span>{props.name}</p>
            </div>
            <div className="right-part-div">

                <p
                    style={{
                        background: props.Value1 === "checked" ?
                            `#000` :
                            `#BD1111`,
                        color: props.Value1 === "checked" ?
                            `#BB0B14` :
                            `#fff`
                    }}
                >   {
                        props.Value1 === "checked" ?
                            <CheckRoundedIcon className="icon" /> :
                            <CloseRoundedIcon className="icon" />
                    }
                </p>
                <p
                    style={{
                        background: props.Value2 === "checked" ?
                            `#000` :
                            `#BD1111`,
                        color: props.Value2 === "checked" ?
                            `#BB0B14` :
                            `#fff`
                    }}
                >   {
                        props.Value2 === "checked" ?
                            <CheckRoundedIcon className="icon" /> :
                            <CloseRoundedIcon className="icon" />
                    }
                </p>
                <p
                    style={{
                        background: props.Value3 === "checked" ?
                            `#000` :
                            `#BD1111`,
                        color: props.Value3 === "checked" ?
                            `#BB0B14` :
                            `#fff`
                    }}
                >   {
                        props.Value3 === "checked" ?
                            <CheckRoundedIcon className="icon" /> :
                            <CloseRoundedIcon className="icon" />
                    }
                </p>
                <p
                    style={{
                        background: props.Value4 === "checked" ?
                            `#000` :
                            `#BD1111`,
                        color: props.Value4 === "checked" ?
                            `#BB0B14` :
                            `#fff`
                    }}
                >   {
                        props.Value4 === "checked" ?
                            <CheckRoundedIcon className="icon" /> :
                            <CloseRoundedIcon className="icon" />
                    }
                </p>
                <p
                    style={{
                        background: props.Value5 === "checked" ?
                            `#000` :
                            `#BD1111`,
                        color: props.Value5 === "checked" ?
                            `#BB0B14` :
                            `#fff`

                    }}
                >   {
                        props.Value5 === "checked" ?
                            <CheckRoundedIcon className="icon" /> :
                            <CloseRoundedIcon className="icon" />
                    }
                </p>
            </div>

        </div>

    )
}
