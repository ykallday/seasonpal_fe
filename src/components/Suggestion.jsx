import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate,Link } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../services/api';
import { CreateSuggestion } from '../services/Create';
import { UserContext } from '../UserContext';


export default function Suggestion() {
   
    const {user, auth, seasonLocations} = useContext(UserContext)
    let navigate = useNavigate();
    const [subject, setSubject] = useState({})


        

    const [formValues, setFormValues] = useState({
        username:"",
        category: "",
        content: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };


      const handleSubmit = async (e) => {
        e.preventDefault();

      const suggestion = await CreateSuggestion({
        "category":formValues.category,
        "content": formValues.content,
        "username": user.username,
        });
        console.log(user.username)
        console.log(suggestion)
       
    
        setFormValues({
          username:"",
          category:"",
          content: ""
        });
        navigate(`/resources/`);
      };

  if (auth && user){
    return (
        <div className="p-3  text-center bg-white font-light">

            <h1 className="text-xl">Enter a Suggestion!</h1>
            <div className="flex justify-center">
                <div className="w-[30vw] h-fit mt-5 p-3 bg-slate-100 rounded-lg shadow-lg hover:scale-105" >

                    <img className="p-2 h-[30vw] w-[30vw] object-cover m-auto border-4 border-gray-300" src={subject.image_url} />
                </div>
            
            <div>
                <form>
                <div className="py-3">
                        <label className="p-3 text-s" htmlFor="username">Username:</label>
                        <br></br>
                        <input
                            className="rounded-2xl p-2 px-4 text-xs border-2"
                            onChange={handleChange}
                            placeholder={user.username}
                            name="category"
                            type="text"
                            value={user.username}
                            read
                        />
                        </div>
             

                    <div className="py-3">
                        <label className="p-3 text-s" htmlFor="category">Category:</label>
                        <br></br>
                        <input
                            className="rounded-2xl p-2 px-4 text-xs border-2"
                            onChange={handleChange}
                            name="category"
                            type="text"
                            value={formValues.category}
                        />
                        </div>
             

                        <div>
                         <label className="p-3 text-s" htmlFor="content">Note:</label>
                        <br></br>
                        <input
                            className="rounded-2xl p-2 px-4 text-xs border-2 text-left w-[50vw] h-[5vw] overflow-y-scroll"
                            onChange={handleChange}
                            name="content"
                            placeholder="Write your suggestion here!"
                            type="text"
                            value={formValues.content}
                            required
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="text-xs text-left bg-lightblue p-1 mt-5 px-2 rounded-md font-semibold hover:scale-110">Add Suggestion</button>
                    </div>

                </form>
                </div>
            </div>

</div>)

  }}