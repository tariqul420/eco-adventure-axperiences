import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
    const { signOutUser } = useContext(AuthContext)

    return (
        <div>
            <button onClick={signOutUser} className="btn">Logout</button>
        </div>
    );
};

export default Home;