import {animated, useSpring } from "react-spring"

export default function IndicatorCard(props : any) {
    const anim = useSpring({
        from : {
            opacity: 0
        },
        to : {
            opacity: 1
        },
        config: {tension: 150}
    })
    return <animated.div className="admin--indicators--enabling" style={{...anim}}>
        <div className="admin--indicators--enabling--content">
            <div className="admin--indicators--enabling--content--wrapper">
                <img src={props.icon} alt=""/>
                <p className="admin--indicators--enabling--content--wrapper--count">{props.count}</p>
            </div>
            <p className="admin--indicators--enabling--content--title">{props.description}</p>
        </div>
    </animated.div>
}