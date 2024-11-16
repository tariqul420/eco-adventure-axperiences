import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

const Home = () => {
    const { signOutUser, user } = useContext(AuthContext)

    return (
        <div>
            {
                user ? (<button onClick={signOutUser} className="btn">Logout</button>) : (<Link to="/signIn"  
                    className="btn">SignIn</Link>)
            }
        </div>
    );
};

export default Home;