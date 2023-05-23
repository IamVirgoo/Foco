import { Link } from "react-router-dom";
import {AppState, useAppDispatch, useAppSelector} from "../../stores/appStore";

import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

import Modal from "react-modal";
import animation from "../../assets/application/icons/abst_animated.svg";
import chip from '../../assets/application/icons/chip.svg';

import DeviceCard from "../../components/deviceCard";
import Device, {appendDevice} from "../../slices/devices";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
        backgroundColor: '#21232E',
        border: 'none'
    }
};


export default function Devices() {
    const AUTH = useAppSelector((state : AppState) => state.user.authenticate)
    const DEVICES = useAppSelector((state : AppState) => state.devices.values)

    const [name, setName] = useState<string>('')
    const [Type, setType] = useState("")

    const [infoContainer, setInfoContainer] = useState<[{name : string, deviceID : string}] | null>();
    const [errorMessage, setErrorMessage] = useState<any>('')

    const token = String(localStorage.getItem("access_token"))

    let subtitle;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const Open = () => setModalIsOpen(true);
    const Close = () => setModalIsOpen(false)

    const textStyle = useSpring({
        from : { opacity : 0 },
        to : { opacity : 1 },
        delay : 500
    })

    if (AUTH) return <main className={'admin'}>
            <div className="admin--heading">
                <div className="admin--heading--wrapper">
                    <h1 className="admin--heading--hello">Your Device</h1>
                    <button className="admin--heading--wrapper--add" onClick={Open}>
                        Add new
                    </button>
                </div>
                <div className="admin--heading--user">
                    <div className="admin--heading--user--photo-wrapper">
                        <img src="https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="admin--content">
                {
                    DEVICES.map(
                        (value) => <DeviceCard icon={chip} name={value.deviceName}/>
                    )
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={Close}
                style={customStyles}
                contentLabel="Example Modal"
                overlayClassName='modal--overlay'
            >
                <div className="modal">
                    <div className="modal--heading">
                        <h3
                            ref={(_subtitle) => (subtitle = _subtitle)}
                            className="modal--heading--title">Add new Device
                        </h3>
                    </div>
                    <form className="modal--form">
                        <input id='id-input' className="modal--form--input"
                               type="text"
                               placeholder="device name"
                               onChange={ (e) => {setName(e.target.value)}}
                        />
                        <input id='id-input' className="modal--form--input"
                               type="text"
                               placeholder="device type"
                               onChange={ (e) => {setType(e.target.value)}}
                        />
                        <button className="modal--form--submit" type="button" onClick={async (e) => {
                            const result = await fetch("http://localhost:80/auth/add_device", {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": token
                                },
                                body: JSON.stringify({
                                    "name": name,
                                    "types": [
                                        Type
                                    ],
                                }),
                                method: "POST",
                                redirect: "follow"
                            });
                            if (result.ok) {
                                setErrorMessage("GOOD")
                            }
                            else {
                                setErrorMessage(result.status)
                            }
                        }}>Submit</button>
                    </form>
                    <p>{errorMessage}</p>
                </div>
            </Modal>
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