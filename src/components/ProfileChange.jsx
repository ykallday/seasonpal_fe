import {useContext, useState, useEffect} from 'react'
import { UserContext } from '../UserContext';
import { BASE_URL} from '../services/api';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import Client from '../services/api';
import { FaSmileWink } from 'react-icons/fa';


export default function ProfileChange(){
    const {user} = useContext(UserContext)
    const [currentUser, setCurrentUser] = useState('')
    const [formValues, setFormValues] = useState({ username: "", password: "", confirm: "", location:"" });
  
    let navigate = useNavigate()
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}api/users/${user.id}`, {
            "username": formValues.username.length == 0 ? user.username : formValues.username ,
            "password": formValues.password.length == 0 ? user.password : formValues.password, 
            "location": formValues.location == 0 ? user.location : formValues.location
        })
        navigate('/profile')
    }
    return(
        <div className="text-center bg-mylime h-[100vh] focus:shadow-xl">
        <h1 className="py-5 font-light tracking-wider text-2xl"> Update Profile Information </h1>
            <div className="text-left pl-5 bg-white w-[30vw] m-auto my-3 rounded-xl py-3 border-2">
                    <form onSubmit={handleSubmit}>
                        <div className="py-3">
                            <label className="p-3 text-s" htmlFor="username">USERNAME</label>
                            <input className="rounded-2xl p-2 px-4 text-xs border-2" 
                                onChange={handleChange}
                                name="username"
                                type="username"
                                placeholder={user.username}
                                value={formValues.username}
                                
                            />
                        </div>
                        <div className="py-3">
                            <label className="p-3 text-s" htmlFor="password">PASSWORD</label>
                            <input
                                className="rounded-2xl  p-2 px-4 text-xs border-2"
                                onChange={handleChange}
                                type="password"
                                name="password"
                                placeholder="updated password"
                                value={formValues.password}
                                
                            />
                        </div>
                     
                        <div className="py-3">
                            <label className="p-3 text-s" htmlFor="password"> CONFIRM PASSWORD</label>
                            <input
                                className="rounded-2xl  p-2 px-4 text-xs border-2"
                                onChange={handleChange}
                                type="password"
                                name="confirm"
                                placeholder="passwords must match"
                                value={formValues.confirm}
                                required
                            />
                        </div>
                        <div className="py-3">
                            <label className="p-3 text-s" htmlFor="password"> LOCATION </label>
                            <input
                                className="rounded-2xl  p-2 px-4 text-xs border-2"
                                onChange={handleChange}
                                type="text"
                                name="location"
                                placeholder={user.location}
                                value={formValues.location}
                                required
                            />
                        </div>
                        <button onClick={handleSubmit} className="my-5 px-3 py-1 text-s rounded-2xl border-solid hover:scale-105 border-2 border-mygreen text-mygreen" disabled={formValues.password != formValues.confirm}>
                            Update Profile
                        </button>
                    </form>
                    </div>
        </div>
    )
}