// react icons
import { SlArrowUp } from "react-icons/sl";
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <footer className="bg-white boxShadow rounded-xl w-full p-3 lg:p-4 relative">

            <div
                className="w-full flex items-center justify-center pt-[30px] flex-col gap-[20px] pb-[130px]">
                <Link to="/">
                    <h1 className="font-bold text-3xl text-color-finely text-center">Gadget Heaven</h1>
                </Link>
                <p className="text-[0.9rem] text-center sm:text-start text-gray-600">High level
                    experience in web design and development knowledge, producing quality work.
                </p>
                <hr className="w-11/12 mx-auto" />
                <div className="flex justify-between gap-[30px] flex-wrap w-11/12 mx-auto">
                    <div className="">
                        <h3 className="text-[1.2rem] font-semibold text-text mb-2">Services</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <p className="footerLink">Product Support</p>
                            <p className="footerLink">Order Tracking</p>
                            <p className="footerLink">Shipping & Delivery</p>
                            <p className="footerLink">Returns</p>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[1.2rem] font-semibold text-text mb-2">Company</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <p className="footerLink">About Us</p>
                            <p className="footerLink">Careers</p>
                            <p className="footerLink">Contact</p>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-[1.2rem] font-semibold text-text mb-2">Legal</h3>
                        <div className="flex text-black flex-col gap-[10px]">
                            <p className="footerLink">Terms of Service</p>
                            <p className="footerLink">Privacy Policy</p>
                            <p className="footerLink">Cookie Policy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="z-30 absolute bottom-3 left-0 right-0 px-3 flex items-center justify-between w-full">
                <p className="text-[0.9rem] text-gray-300">© {new Date().getFullYear()} All Rights Reserved</p>
                <SlArrowUp className="p-2 rounded-full border border-gray-300 cursor-pointer text-[2rem] text-gray-300" />
            </div>
            <img src="https://i.ibb.co/zNk7XT4/Rectangle-97.png" alt="background/image"
                className="absolute bottom-[20px] sm:bottom-0 left-0 right-0 z-10 rounded-b-xl" />
            <img src="https://i.ibb.co/0mp2FwS/Rectangle-95.png"
                alt="background/image"
                className="absolute bottom-0 left-0 right-0 z-10 rounded-b-xl" />
        </footer>
    );
};

export default Footer;