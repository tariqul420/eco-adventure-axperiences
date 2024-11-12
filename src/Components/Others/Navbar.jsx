// react icons
import { IoIosSearch } from "react-icons/io";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    return (
        <div className={`py-2 rounded-t-3xl w-11/12 mx-auto`}>
            <nav className={`flex items-center justify-between relative boxShadow rounded-full px-[10px] py-[8px] w-11/12 mx-auto my-6 `}>
                <Link to="/">
                    <h1 className={`font-bold text-color-secondary text-2xl`}>Gadget Heaven</h1>
                </Link>
                <ul className="items-center gap-[20px] text-[1rem] text-[#424242] lg:flex hidden">
                    <NavLink to="/"><li className="navBarLink">Home</li></NavLink>
                    <NavLink to="/statistics"><li className="navBarLink">Statistics</li></NavLink>
                    <NavLink to="/dashboard"><li className="navBarLink">Dashboard</li></NavLink>
                    <NavLink to="/about"><li className="navBarLink">About</li></NavLink>
                </ul>

                <div className="items-center gap-[10px] flex">

                    <Link to="/signIn">
                        <button
                            className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-medium text-primary transition duration-300 ease-out border-2 border-primary rounded-full shadow-md group">
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
                                    strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span
                                className="absolute flex items-center justify-center w-full h-full text-primary transition-all duration-300 transform group-hover:translate-x-full ease">Sign In</span>
                            <span className="relative invisible">ZenUI Library</span>
                        </button>
                    </Link>

                    <CiMenuFries className="text-[1.8rem] mr-1 text-[#424242] cursor-pointer lg:hidden flex"
                        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
                </div>

                <aside
                    className={` ${mobileSidebarOpen ? "translate-y-0 opacity-100 z-[2000]" : "translate-y-[-200px] opacity-0 z-[-1]"} lg:hidden bg-white boxShadow p-4 text-center absolute top-[65px] right-0 w-full rounded-md transition-all duration-300`}>
                    <div className="relative mb-5">
                        <input
                            className="py-1.5 pr-4 w-full pl-10 rounded-full border border-gray-200 outline-none focus:border-[#3B9DF8]"
                            placeholder="Search..." />
                        <IoIosSearch className="absolute top-[8px] left-3 text-gray-500 text-[1.3rem]" />
                    </div>
                    <ul className="items-center gap-[20px] text-[1rem] text-gray-600 flex flex-col">
                        <NavLink to="/"><li className="navBarLink">Home</li></NavLink>
                        <NavLink to="/statistics"><li className="navBarLink">Statistics</li></NavLink>
                        <NavLink to="/dashboard"><li className="navBarLink">Dashboard</li></NavLink>
                        <NavLink to="/about"><li className="navBarLink">About</li></NavLink>
                    </ul>
                </aside>
            </nav>
        </div>
    );
};

export default NavBar;
