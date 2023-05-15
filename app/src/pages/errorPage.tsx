import {animated, useSpring} from "react-spring";

import animation from '../assets/application/icons/abst_animated.svg'

export default function ErrorPage() {
    const textStyle = useSpring({
        from : { opacity : 0 },
        to : { opacity : 1 },
        delay : 500
    })

    return <main className={'error'}>
        <div className={'error--container'}>
            <img className={'error--container--animation'} src={animation} alt=""/>
            <animated.h1 className={'error--container--title'} style={{...textStyle}}>404</animated.h1>
            <animated.p className={'error--container--description'} style={{...textStyle}}>Page <span>not found</span></animated.p>
        </div>
    </main>
}