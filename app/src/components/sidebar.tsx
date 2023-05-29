import SidebarButton from "./sidebarButton";

import home from '../assets/application/icons/home.svg'
import devices from '../assets/application/icons/devices.svg'
import exit from '../assets/application/icons/exit.svg'

export default function Sidebar(props : any) {
    return <nav>
        <div className="nav--heading">
            {/*<div className="nav--heading--photo-wrapper">
				<img src="https://upload.wikimedia.org/wikipedia/ru/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg" alt=""/>
			</div>
			<h3 className="nav--heading--username">
				{props.username || "Username"}
			</h3>*/}
            <p className="nav--heading--logo">Foco</p>
        </div>
        <div className="nav--body">
            <SidebarButton buttonContent="Home" buttonIcon={home} href="/app"/>
            <SidebarButton buttonContent="Devices" buttonIcon={devices} href="/app/devices"/>
        </div>
        <div className="nav--footer">
            <SidebarButton buttonContent="Exit" buttonIcon={exit} href="/" click={() => localStorage.clear()}/>
        </div>
    </nav>
}