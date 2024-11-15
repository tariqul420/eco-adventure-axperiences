import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Private = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <h1 className="text-5xl text-red-500">Loading</h1>
    }

    if (user) {
        return children
    }

    return (
        <div>
            <Navigate to="/signIn"></Navigate>
        </div>
    );
};

Private.propTypes = {
    children: PropTypes.object
}
export default Private;