import { Outlet } from "react-router-dom"
import Navbar from "../Components/Others/Navbar"
import Footer from "../Components/Others/Footer"


function Root() {

    return (
        <div className="min-h-screen flex flex-col overflow-y-scroll">
            <Navbar />
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Root
