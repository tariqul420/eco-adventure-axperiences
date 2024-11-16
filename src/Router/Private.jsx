import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { ScaleLoader } from "react-spinners";

const Private = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="min-w-screen flex items-center justify-center my-12">
                <ScaleLoader
                    height={60}
                    margin={2}
                    width={5}
                />
            </div>
        )
    }

    if (user) {
        return children
    }

    return (
        <div>
            <Navigate state={location.pathname} to="/signIn"></Navigate>
        </div>
    );
};

Private.propTypes = {
    children: PropTypes.object
}
export default Private;