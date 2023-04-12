import { SignInUser } from '../services/Auth';
import { UserContext } from "../UserContext";
import { useContext, useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

export default function Login() {
    const { user, setUser } = useContext(UserContext)
    const { auth, toggleAuth } = useContext(UserContext)
    const [formValues, setFormValues] = useState({ username: "", password: "" });

    let navigate = useNavigate();

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser(formValues.username, formValues.password)
        const payload = await SignInUser(formValues);
        console.log(payload)
        setFormValues({ username: "", password: ""});
        toggleAuth(true);
        navigate('/')
        console.log("logged in!");
        console.log(user)  
    }
    return (
            <div className="text-center bg-lightblue h-[100vh] focus:shadow-xl">
                <h1 className="py-5 font-light tracking-wider text-2xl"> WELCOME BACK </h1>
                <div className="text-center bg-white w-[30vw] m-auto my-3 rounded-xl py-3 border-2">
                    <form onSubmit={handleSubmit}>
                        <div className="py-3">
                            <label className="p-3 text-s" htmlFor="username">USERNAME</label>
                            <input className="rounded-2xl p-2 px-4 text-xs border-2" onChange={handleChange}
                                name="username"
                                type="username"
                                placeholder="your username"
                                value={formValues.username}
                                required
                            />
                        </div>
                        <div>
                            <label className="p-3 text-s" htmlFor="password">PASSWORD</label>
                            <input
                                className="rounded-2xl  p-2 px-4 text-xs border-2"
                                onChange={handleChange}
                                type="password"
                                name="password"
                                value={formValues.password}
                                required
                            />
                        </div>
                        <button className="my-5 px-3 py-1 text-s rounded-2xl border-solid hover:scale-105 border-2 border-mygreen text-mygreen" disabled={!formValues.username || !formValues.password}>
                            SIGN IN
                        </button>
                    </form>
                    <div>
                        <p className="font-light text-s ">DON'T HAVE AN ACCOUNT?</p>{" "}
                        <Link to="/register">
                            <button className="my-5 px-3 py-1 text-s hover:scale-105 rounded-2xl border-solid border-2  border-mygreen text-mygreen">REGISTER</button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}