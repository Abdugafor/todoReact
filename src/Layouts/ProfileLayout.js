import { NavLink, Outlet } from "react-router-dom";

export default function ProfileLayout() {
    return (
        <div >
            
            <div className="profile-container">
                <div className="profile-left-part block">
                    <ul className="profile-list">
                        <li> <NavLink to="profileSettings" >Profile</NavLink> </li>
                        <li> <NavLink to="settings">Settings</NavLink> </li>
                    </ul>
                </div>

                <div className="profile-right-part block">
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}