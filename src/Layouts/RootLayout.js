import { NavLink, Outlet } from "react-router-dom";
import  img from'../images/user.svg'

export default function RootLayout() {
    return (
        <>
            <header>
                <h1>FanLeo</h1>

                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="help">Help</NavLink>
                    <NavLink to="profile">
                        <img  src={img} alt="user" width="15"/>
                    </NavLink>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}