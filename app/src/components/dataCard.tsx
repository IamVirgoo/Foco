import { animated, useSpring } from "react-spring";

export default function DataCard(props: any) {
    const anim = useSpring({
        from : {
            opacity: 0
        },
        to : {
            opacity: 1
        },
        config: {tension: 150}
    })
    return <animated.div className="data-card" style={{...anim}}>
        <div className="data-card--content">
            <img src={props.dataIcon} alt=""/>
            <p className="data-card--content--number">{props.statNumber}{props.metric}</p>
            <p className="data-card--content--name">{props.Name}</p>
        </div>
    </animated.div>
}