import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root"
import Home from "../Pages/Home";
import Page404 from "../Components/Others/Page404"
import SignUp from "../Components/Auth/SignUp";
import SignIn from "../Components/Auth/SignIn";
import EmailVerification from "../Components/Auth/EmailVerification";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Page404 />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/signUp/EmailVerification",
                element: <EmailVerification />
            },
            {
                path: "/signIn",
                element: <SignIn />
            }
        ]
    }
])

export default router