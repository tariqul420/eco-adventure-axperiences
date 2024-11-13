import { Link } from "react-router-dom";

const EmailVerification = () => {
    return (
        <section className="w-full min-h-[100vh] bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white w-full sm:w-[600px] p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign up Successful!</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Please verify your email address to complete your registration. We have sent a verification link to your email.
                </p>
                <p className="text-md text-gray-500 mb-6">
                    Check your inbox (and spam folder just in case) for the verification email. If you haven&apos;t received it yet, please be patient or try again later.
                </p>

                <div className="flex flex-col items-center gap-4">
                    <Link to="/signIn" className="text-blue-500 text-lg font-medium">
                        Go back to Sign In
                    </Link>
                    <button
                        onClick={() => alert("Verification link sent again!")} 
                        className="py-2 px-4 bg-blue-500 text-white rounded-lg mt-2 hover:bg-blue-600"
                    >
                        Resend Verification Email
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EmailVerification;
