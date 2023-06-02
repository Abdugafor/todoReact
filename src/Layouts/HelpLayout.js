import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
    return (
       <>
         <h1>Help Center</h1>

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rerum officiis quae. Eos, molestiae. Accusantium, in, tem</p>

        <div className="help-link">
            <NavLink to="faq">Faq</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </div>
        
        <div className="help-main">
            <Outlet />
        </div>
       </>
    )
}