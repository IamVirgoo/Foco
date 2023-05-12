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
        <AppHeader username={USERNAME}/>
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
    else return <div className={'warning'}>
        <p className={'warning--text'}>You not authenticated, please <Link className={'warning--link'} to={'/login'}>sign in</Link></p>
    </div>
}