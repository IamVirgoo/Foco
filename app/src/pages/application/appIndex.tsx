import { AppState, useAppSelector } from "../../stores/appStore";
import { Link } from "react-router-dom";

import IndicatorCard from "../../components/indicatorCard";

import devices from '../../assets/application/icons/devices.svg'
import wifi from '../../assets/application/icons/wifi.svg'
import AppHeader from "../../components/appHeader";

export default function AppIndex() {

    const USERNAME = useAppSelector((state : AppState) => state.user.username)
    const AUTH = useAppSelector((state : AppState) => state.user.authenticate)

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
            {/*{
                stat.values.map(
                    (value) => <DataCard
                        Name={value.statisticTypeName}
                        dataIcon={sdk.getImg(value.statisticTypeName)}
                        statNumber={value.statisticNumber}
                        metric={sdk.getMetric(value.statisticTypeName)}
                    />
                )
            }*/}
            {/*{
				isLoading ?
					<h1>Loading</h1> :
					<h1>{data?.values.at(0)?.statisticNumber}</h1>
				}*/}
        </div>
        <div className="admin--indicators">
            <IndicatorCard
                icon={devices}
                count={20}
                description={"Devices connected"}
            />
            <IndicatorCard
                icon={wifi}
                count={20}
                description={"Devices are online"}
            />
        </div>
    </main>
    else return <main className={'warning'}>
        <div className={'warning--container'}>
            <p className={'warning--container--text'}>
                You are not authorized<br/>please&nbsp;
                <Link className={'warning--container--text--link'} to={'/login'}>sign in</Link>
            </p>
        </div>
    </main>
}