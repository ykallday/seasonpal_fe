import {useContext, useState, useEffect} from 'react'
import { UserContext } from '../UserContext';
import { BASE_URL} from '../services/api';
import axios from 'axios';
import Client from '../services/api';
import { FaSmileWink } from 'react-icons/fa';


export default function ProfileChange(){
    const {user} = useContext(UserContext)
    const [currentUser, setCurrentUser] = useState('')
    const [formValues, setFormValues] = useState({ email:"", username: "", password: "", confirm: "", location:"" });
  
    
    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const changeProfile = async (data) => {
            try {
              const res = await Client.put(`api/user/${user.id}`, data);
            } catch (error) {
              return (alert("Sorry, something went wrong."));
            }
          };
    }

    return(
        <div className="text-center bg-mylime h-[100vh] focus:shadow-xl">
        <h1 className="py-5 font-light tracking-wider text-2xl"> Update Profile Information </h1>
            <div className="text-center bg-white w-[30vw] m-auto my-3 rounded-xl py-3 border-2">
                    <form onSubmit={handleSubmit}>
                        <div className="py-3">
                            <label className="p-3 text-s" htmlFor="email">EMAIL</label>
                            <input className="rounded-2xl p-2 px-4 text-xs border-2" onChange={handleChange}
                                
                                name="email"
                                type="email"
                                placeholder="updated email address"
                                value={formValues.email}
                                
                            />
                        </div>
                        <div className="py-3">
                            <label className="p-3 text-s" htmlFor="username">USERNAME</label>
                            <input className="rounded-2xl p-2 px-4 text-xs border-2" 
                                onChange={handleChange}
                                name="username"
                                type="username"
                                placeholder="updated username"
                                value={formValues.username}
                                
                            />
                        </div>
                        <div>
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
                        <div>
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
                        <button className="my-5 px-3 py-1 text-s rounded-2xl border-solid hover:scale-105 border-2 border-mygreen text-mygreen" disabled={formValues.password != formValues.confirm}>
                            Update Profile
                        </button>
                    </form>
                    </div>
        </div>
    )
}