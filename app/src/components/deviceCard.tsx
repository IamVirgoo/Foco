import { useState } from "react";
import { animated, useSpring } from "react-spring"

export default function DeviceCard(props: any) {
    const [enableState, setEnableState] = useState("Enabled");
    const [color, setColor] = useState("#6839EF")
    const load = useSpring({
        from : {
            opacity: 0,
            y : props.time
        },
        to : {
            opacity: 1,
            y: 0
        },
        config : {tension: 150}
    })
    return <animated.div className={"device-card"} style={{...load}}>
        <div className="device-card--content">
            <img src={props.icon} alt=""/>
            <p className="device-card--content--name">{props.name || "Device Name"}</p>
            <button className="device-card--content--btn" onClick={(e) => {
                if (enableState == "Disabled") {
                    setEnableState("Enabled")
                    setColor("#6839EF")
                } else {
                    setColor("#070410")
                    setEnableState("Disabled")
                }
            }} style={
                {
                    backgroundColor: color
                }}>
                {enableState}
            </button>
        </div>
    </animated.div>
}