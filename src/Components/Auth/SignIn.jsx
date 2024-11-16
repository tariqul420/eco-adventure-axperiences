import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import Modal from 'react-modal';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

Modal.setAppElement('#root');

const SignIn = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [active, setActive] = useState(false);
    const [emailPass, setEmailPass] = useState("")
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { signInUser, socialAuth, signOutUser, resetEmail } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handelSignIn = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then((result) => {
                const user = result.user;
                if (user.emailVerified) {
                    navigate(location.state ? location.state : '/')
                    console.log("Sign-in successful", result);
                } else {
                    signOutUser();
                    toast.warning("Please verify your account.");
                }
            })
            .catch((error) => {
                if (error.code === "auth/invalid-credential") {
                    toast.error("Invalid email or password.");
                }
            });
    };

    const handelReset = () => {
        setIsModalOpen(true);
    }

    const handelSendEmail = () => {
        resetEmail(emailPass)
            .then(() => {
                toast.success("Check your email.");
                setIsModalOpen(false);
            })
            .catch(() => {
                toast.warning("It's not valid email.");
                setIsModalOpen(true);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section className="w-full min-h-[100vh] h-auto bg-[url('https://i.postimg.cc/85PcJvF9/Moon.png')] bg-cover bg-center flex items-center justify-center sm:py-12 p-6">
                <div className="w-full sm:w-[40%] bg-white rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5">

                    <form onSubmit={handelSignIn} className="w-full flex flex-col gap-5">
                        <h3 className="text-[1.8rem] font-[700] text-gray-900 text-center">
                            Sign In
                        </h3>

                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                        />

                        <div className="w-full relative">
                            <input
                                type={active ? "text" : "password"}
                                placeholder="Password"
                                required
                                name="password"
                                className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                            />
                            {active ? (
                                <BsEyeSlash
                                    className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                                    onClick={() => setActive(false)}
                                />
                            ) : (
                                <BsEye
                                    className=" absolute top-[30%] right-[5%] text-[1.2rem] text-gray-500 cursor-pointer"
                                    onClick={() => setActive(true)}
                                />
                            )}
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-[1rem] text-gray-700 font-[500]">Remember Me</span>
                            </label>
                            <p onClick={handelReset} className="text-[1rem] text-blue-500 font-[500] cursor-pointer">
                                Forget password
                            </p>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-500 text-white border-none outline-none rounded-lg mt-3">
                            Login
                        </button>
                    </form>

                    <div className="flex items-center justify-center w-full gap-1">
                        <span className="text-[1rem] text-gray-600 font-[500]">
                            Don&apos;t have an account?{" "}
                        </span>
                        <span>
                            <Link to={"/signUp"} className="text-[1rem] text-blue-500 font-[500]">
                                Sign Up
                            </Link>
                        </span>
                    </div>

                    <div className="w-full my-1 flex items-center justify-center gap-3">
                        <hr className="w-[45%] bg-gray-400 h-[2px]" />
                        <p>or</p>
                        <hr className="w-[45%] bg-gray-400 h-[2px]" />
                    </div>

                    <button onClick={() => socialAuth(facebookProvider)} className="flex items-center justify-center py-2.5 px-4 gap-4 bg-[#4267b2] rounded-lg w-full text-[1rem] font-[500] text-white">
                        <FaFacebook className="text-[1.8rem] text-white" />
                        Sign Up with Facebook
                    </button>
                    <button onClick={() => socialAuth(googleProvider)} className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600">
                        <FcGoogle className="text-[2rem]" />
                        Sign Up with Google
                    </button>
                    <button onClick={() => socialAuth(githubProvider)} className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600">
                        <FaGithub className="text-[2rem]" />
                        Sign Up with Github
                    </button>
                </div>
            </section>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Payment Successfully"
                className="bg-white p-6 w-[400px] mx-auto my-10 rounded-lg shadow-lg text-center flex items-center justify-center flex-col"
                overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center"
            >
                <input
                    type="email"
                    name="email"
                    onChange={(e) => setEmailPass(e.target.value)}
                    required
                    placeholder="Email"
                    className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                />
                <button
                    onClick={handelSendEmail}
                    type="submit"
                    className="w-full py-3 px-4 bg-blue-500 text-white border-none outline-none rounded-lg mt-3 font-bold">
                    Send Email
                </button>
            </Modal>
        </>
    );
};

export default SignIn;