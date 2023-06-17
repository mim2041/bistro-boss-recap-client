import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = {name: loggedUser.displayName, email: loggedUser.email};
                        fetch('http://localhost:5000/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(() => {
                                navigate(from, {replace: true});

                            })
                        
            })
                 
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
            <button onClick={handleSignInWithGoogle} className="btn btn-circle btn-outline">
                <FaGoogle></FaGoogle>
            </button>
            </div>
        </div>
    );
};

export default SocialLogin;