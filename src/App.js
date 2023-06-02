import { 
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"
import RootLayout from "./Layouts/RootLayout"



// pages


import About from "./pages/About"
import HelpLayout from "./Layouts/HelpLayout"
import Faq from "./pages/help/Faq"
import Contact from "./pages/help/Contact"
import ErrorPage from "./ErrorPage"
import Settings from "./pages/profile/Settings"
import Home from "./pages/Home"
import ProfileLayout from "./Layouts/ProfileLayout"
import Profile from "./pages/profile/Profile"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="about" element={<About/>}/>

            <Route path="help" element={<HelpLayout/>}>
                <Route path="faq" element={<Faq/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Route>

            <Route path="profile" element={<ProfileLayout/>}>
                <Route path="profileSettings" element={<Profile/>}/>
                <Route path="settings" element={<Settings/>}/>
            </Route>

            <Route path="*" element={<ErrorPage/>}/>
        </Route>

        

    )
)
export default function App() {
    return (
        <RouterProvider router={router}/>
    )
}