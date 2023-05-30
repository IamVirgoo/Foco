import {AppState, useAppDispatch, useAppSelector} from "../../stores/appStore";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import IndicatorCard from "../../components/indicatorCard";
import DataCard from "../../components/dataCard";

import { cardData } from "../../devtools/info";
import { set_auth, set_user } from "../../slices/user";

import { getImg, getMetric } from "../../devtools/sdk";

import { useEffect, useState } from "react";
import { appendDevice } from "../../slices/devices";

import devices from '../../assets/application/icons/devices.svg'
import wifi from '../../assets/application/icons/wifi.svg'
import animation from "../../assets/application/icons/abst_animated.svg";
import {appendStat} from "../../slices/statisitcs";

export default function AppIndex() {

    const dispatch = useAppDispatch()

    const [hum, setHum] = useState<number>()
    const [lum, setLum] = useState<number>()
    const [temp, setTemp] = useState<number>()
    const [volt, setVolt] = useState<number>()

    const [value, setValue] = useState<number>()

    const USERNAME = useAppSelector((state : AppState) => state.user.username)
    const DEVICES = useAppSelector((state : AppState) => state.devices)
    const STATISTICS = useAppSelector((state : AppState) => state.statistic)


    if (localStorage.getItem("authenticated") == "true") {
        dispatch( set_auth(true) )
        dispatch( set_user(String(localStorage.getItem("username"))) )

        useEffect(() => {
            /*DEVICES.values.map((value) => {
                const fetchHandler = async (id : number) => {
                    const _fetch = await fetch("http://localhost:80/data/" + id + "/get?PageNumber=0&PageSize=1&sort=type", {
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": String(localStorage.getItem("access_token"))
                        },
                        method: "GET",
                        redirect: "follow"
                    })
                    if (_fetch.ok) {
                        let response = _fetch.json()
                        console.log(response)
                    }
                    else {
                        console.log(String(_fetch.status))
                    }
                }
                fetchHandler(value.deviceId)
            })*/
            const get_dev = async () => {
                const result = await fetch("http://localhost:80/auth/get_device", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": String(localStorage.getItem("access_token"))
                    },
                    method: "GET",
                    redirect: "follow"
                })
                let response = result.json()
                await response.then(
                    value => {
                        value.map((element : {
                            id : number,
                            name : string,
                            types : Array<string>
                        }) => {
                            if (element.types.at(0) == "hum") {
                                dispatch(appendDevice({
                                    deviceId : element.id,
                                    deviceName : element.name,
                                    deviceTypes : element.types,
                                    deviceValue : Math.random() * 80
                                }))
                            }
                            if (element.types.at(0) == "temp") {
                                dispatch(appendDevice({
                                    deviceId : element.id,
                                    deviceName : element.name,
                                    deviceTypes : element.types,
                                    deviceValue : Math.random() * (30 - 5) + 5
                                }))
                            }
                            if (element.types.at(0) == "lum") {
                                dispatch(appendDevice({
                                    deviceId : element.id,
                                    deviceName : element.name,
                                    deviceTypes : element.types,
                                    deviceValue : Math.random() * (60 - 30) + 30
                                }))
                            }
                            if (element.types.at(0) == "vol") {
                                dispatch(appendDevice({
                                    deviceId : element.id,
                                    deviceName : element.name,
                                    deviceTypes : element.types,
                                    deviceValue : Math.random() * (4 - 2) + 2
                                }))
                            }
                        });
                    }
                )
                if (result.ok) {
                    console.log("GOOOD")
                }
            };
            const fetchHandler = async (id : number) => {
                const _fetch = await fetch("http://localhost:80/data/" + id + "/get?PageNumber=0&PageSize=1&sort=type", {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": String(localStorage.getItem("access_token"))
                    },
                    method: "GET",
                    redirect: "follow"
                })
                let response = _fetch.json()
                console.log(response.then(value => console.log(value.at(0))))
                response.then(value => {
                    dispatch(appendStat({
                        statisticTypeName : value.at(0).type,
                        statisticNumber : value.at(0).data
                    }))
                    console.log(STATISTICS.values)
                })
            }
            get_dev()
            fetchHandler(1)
            fetchHandler(2)
            fetchHandler(52)
        }, [])
    }

    const AUTH = useAppSelector((state : AppState) => state.user.authenticate)


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
            { cardData.data.map((value) =>
                <DataCard
                    Name={value.name}
                    icon={getImg(value.name)}
                    statNumber={value.statNumber}
                    metric={getMetric(value.name)}
                />
            )}
            {/*{
                cardData.data.map(
                    (value) => <DataCard
                        Name={value.name}
                        icon={getImg(value.name)}
                        statNumber={}
                        metric={getMetric(value.name)}
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