import { Link } from "react-router-dom";
import { AppState, useAppSelector } from "../../stores/appStore";
import { useState } from "react";

import Modal from "react-modal";

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

    const [ID, setId] = useState<string>('')
    const [infoContainer, setInfoContainer] = useState<[{name : string, deviceID : string}] | null>();

    let subtitle;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const Open = () => setModalIsOpen(true);
    const Close = () => setModalIsOpen(false)

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
                {/*{
                    dev.values.map(
                        (value) => <DeviceCard icon={chip} name={value.deviceName}/>
                    )
                }*/}
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
                    <form className="modal--form" method="post" /* onSubmit={handleClick} */>
                        <input id='id-input' className="modal--form--id-input"
                               type="text"
                               placeholder="Input device id"
                               onChange={ (e) => {setId(e.target.value)}}
                        />
                        <button className="modal--form--submit" type="submit">Submit</button>
                    </form>
                </div>
            </Modal>
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