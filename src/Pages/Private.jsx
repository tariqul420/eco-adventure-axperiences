import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const Private = ({ children }) => {

    const { user, loading } = useContext(ContextApi)

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