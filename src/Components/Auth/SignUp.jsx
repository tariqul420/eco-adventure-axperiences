
import { useContext, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { MdErrorOutline } from "react-icons/md";
import { ContextApi } from "../../Context/ContextApi";
import { GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";

const SignUp = () => {
    const [active, setActive] = useState(false);
    const { socialAuth, createUser } = useContext(ContextApi);
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [strongPassword, setStrongPassword] = useState(" ");
    const [confirmPass, setConfirmPass] = useState("")
    const [signal, setSignal] = useState(" ");
    const [passMatch, setPassMatch] = useState("");

    const handleStrongPasswordChecker = (e) => {
        const password = e.target.value;
        setStrongPassword(password);

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (!hasUpperCase) {
            setSignal("Password must contain at least one uppercase letter.");
        } else if (!hasLowerCase) {
            setSignal("Password must contain at least one lowercase letter.");
        } else if (!hasNumber) {
            setSignal("Password must contain at least one number.");
        } else if (!hasSymbol) {
            setSignal("Password must contain at least one special character.");
        } else if (password.length < 8) {
            setSignal("Password must be at least 8 characters long.")
        } else {
            setSignal("Password is strong!");
        }
    };

    const handelPasswordCheck = (e) => {
        const password = e.target.value
        setConfirmPass(password)
        if (strongPassword !== confirmPass) {
            setPassMatch("Password do not match!")
        }
    }

    const handleRegister = (e) => {
        e.preventDefault();

        const firstName = e.target.firstName.value;
        const lastName = e.target.lastName.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPassword.value;

        if (signal !== "Password is strong!") {
            setSignal("Password is not strong enough.")
            return;
        }

        if (password !== confirmPass) {
            setPassMatch("Passwords do not match");
            return;
        }

        createUser(email, password);
        console.log("User created:", email);
    };

    return (
        <section className="w-full min-h-[100vh] h-auto bg-[url('https://i.postimg.cc/85PcJvF9/Moon.png')] bg-cover bg-center flex items-center justify-center sm:py-12 p-6">
            <div className="w-full sm:w-[900px] sm:max-w-[1000px] bg-white backdrop-blur-3xl rounded-lg sm:py-6 sm:px-8 p-4 flex flex-col gap-5">
                <form onSubmit={handleRegister} className="w-full flex flex-col gap-5">
                    <h3 className="text-[1.8rem] font-[700] text-gray-900 text-center">
                        Sign Up
                    </h3>
                    <div className="flex items-center justify-between gap-4 w-full mt-5 sm:flex-row flex-col">
                        <input
                            required
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                        />
                        <input
                            required
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                        />
                    </div>

                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                    />

                    <div className="w-full flex items-center gap-4 justify-between sm:flex-row flex-col">
                        {/* Password */}
                            <div className="w-full relative">
                                <input
                                    required
                                    type={isEyeOpen ? "text" : "password"}
                                    name="password"
                                    onChange={handleStrongPasswordChecker}
                                    placeholder="Password"
                                    className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                                />

                                {strongPassword !== "" && signal !== "Password is strong!" && (
                                    <p className="text-[0.9rem] mt-1">
                                        <span className="text-red-500 flex items-center gap-[5px]">
                                            <MdErrorOutline className="text-[1.1rem]" />
                                            {signal}
                                        </span>
                                    </p>
                                )}

                                {isEyeOpen ? (
                                    <BsEyeSlash
                                        className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                        onClick={() => setIsEyeOpen(false)}
                                    />
                                ) : (
                                    <BsEye
                                        className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                        onClick={() => setIsEyeOpen(true)}
                                    />
                                )}

                            </div>

                        {/* Confirm Password */}
                        <div className="w-full relative">
                            <input
                                required
                                type={active ? "text" : "password"}
                                onChange={handelPasswordCheck}
                                name="confirmPassword"
                                placeholder="Confirm password"
                                className="py-3 px-4 border focus:outline-blue-500 border-gray-300 rounded-lg w-full"
                            />

                            {confirmPass !== "" && confirmPass !== strongPassword && (
                                <p className="text-[0.9rem] mt-1">
                                    <span className="text-red-500 flex items-center gap-[5px]">
                                        <MdErrorOutline className="text-[1.1rem]" />
                                        {passMatch}
                                    </span>
                                </p>
                            )}

                            {active ? (
                                <BsEyeSlash
                                    className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                    onClick={() => setActive(false)}
                                />
                            ) : (
                                <BsEye
                                    className="absolute top-4 right-4 text-[1.2rem] text-[#777777] cursor-pointer"
                                    onClick={() => setActive(true)}
                                />
                            )}
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-center">
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-blue-500 text-white border-none outline-none rounded-lg mt-3"
                        >
                            Sign up
                        </button>
                    </div>
                    <div className="flex items-center justify-center w-full gap-1">
                        <span className="text-[1rem] text-gray-600 font-[500]">
                            Already have an account?{" "}
                        </span>
                        <span>
                            <Link to={"/signIn"} className="text-[1rem] text-blue-500 font-[500]">
                                Sign In
                            </Link>
                        </span>
                    </div>
                </form>

                <div className="w-full my-1 flex items-center justify-center gap-3">
                    <hr className="w-[45%] bg-gray-400 h-[2px]" />
                    <p>or</p>
                    <hr className="w-[45%] bg-gray-400 h-[2px]" />
                </div>

                <div className="flex items-center justify-between w-full gap-5 sm:flex-row flex-col">
                    <button
                        onClick={() => socialAuth(facebookProvider)}
                        className="flex items-center justify-center py-2.5 px-4 gap-4 bg-[#4267b2] rounded-lg w-full text-[1rem] font-[500] text-white"
                    >
                        <FaFacebook className="text-[1.8rem] text-white" />
                        Sign Up with Facebook
                    </button>
                    <button
                        onClick={() => socialAuth(googleProvider)}
                        className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full text-[1rem] font-[500] text-gray-600"
                    >
                        <FcGoogle className="text-[2rem]" />
                        Sign Up with Google
                    </button>
                </div>
                <button
                    onClick={() => socialAuth(githubProvider)}
                    className="flex items-center justify-center py-2 px-4 gap-4 border border-gray-300 rounded-lg w-full mx-auto md:w-[407px] text-[1rem] font-[500] text-gray-600"
                >
                    <FaGithub className="text-[2rem]" />
                    Sign Up with Github
                </button>
            </div>
        </section>
    );
};

export default SignUp;
