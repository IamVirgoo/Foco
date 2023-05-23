import { AppState, useAppSelector } from "../../stores/appStore";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import IndicatorCard from "../../components/indicatorCard";
import DataCard from "../../components/dataCard";

import { cardData } from "../../devtools/info";

import { getImg, getMetric } from "../../devtools/sdk";

import devices from '../../assets/application/icons/devices.svg'
import wifi from '../../assets/application/icons/wifi.svg'
import animation from "../../assets/application/icons/abst_animated.svg";

export default function AppIndex() {

    const USERNAME = useAppSelector((state : AppState) => state.user.username)
    const AUTH = useAppSelector((state : AppState) => state.user.authenticate)

    const DEVICES = useAppSelector((state : AppState) => state.devices)

    const textStyle = useSpring({
        from : { opacity : 0 },
        to : { opacity : 1 },
        delay : 500
    })

    if (AUTH) return <main className="admin">
        <div className="admin--heading">
            <h1 className="admin--heading--hello">Hello, {USERNAME}</h1>
            <div className="admin--heading--user">
                <div className="admin--heading--user--photo-wrapper">
                    <img src="https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt=""/>
                </div>
            </div>
        </div>
        <div className="admin--content">
            {
                cardData.data.map(
                    (value) => <DataCard
                        Name={value.name}
                        icon={getImg(value.name)}
                        statNumber={value.statNumber}
                        metric={getMetric(value.name)}
                    />
                )
            }
            {/*{
				isLoading ?
					<h1>Loading</h1> :
					<h1>{data?.values.at(0)?.statisticNumber}</h1>
				}*/}
        </div>
        <div className="admin--indicators">
            <IndicatorCard
                icon={devices}
                count={DEVICES.values.length}
                description={"Devices connected"}
            />
            <IndicatorCard
                icon={wifi}
                count={DEVICES.values.length}
                description={"Devices are online"}
            />
        </div>
    </main>
    else return <main className={'warning'}>
        <div className={'warning--container'}>
            <img className={'warning--container--animation'} src={animation} alt=""/>
            <animated.p className={'warning--container--text'} style={{...textStyle}}>
                You are not authorized<br/>please&nbsp;
                <Link className={'warning--container--text--link'} to={'/login'}>sign in</Link>
            </animated.p>
        </div>
    </main>
}