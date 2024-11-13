import { useContext } from "react";
import { ContextApi } from "../Context/ContextApi";

const Home = () => {
    const {signOutUser} = useContext(ContextApi)

    return (
        <div>
            <button onClick={signOutUser} className="btn">Logout</button>
        </div>
    );
};

export default Home;