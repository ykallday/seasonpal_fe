import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate,Link } from 'react-router-dom'
import axios from 'axios';
import { BASE_URL } from '../services/api';
import { CreateNote } from '../services/Create';
import { UserContext } from '../UserContext';


export default function Note() {
    let { produceid } = useParams();
    const {user, auth, seasonLocations} = useContext(UserContext)
    let navigate = useNavigate();
    const [subject, setSubject] = useState({})
    const [notes, setNotes] = useState([])

         
    useEffect(() => {
        const getNotes = async () => {
            const res = await axios.get(`${BASE_URL}api/notes/`);
            setNotes(res.data)
            
        }
        getNotes();
      }, [])

    useEffect(() => {
        const getProduce = async () => {
            const res = await axios.get(`${BASE_URL}api/produce/${produceid}`);
            setSubject(res.data)
        }
        getProduce();
    }, [])


        

    const [formValues, setFormValues] = useState({
        produce: "",
        content: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };


      const handleSubmit = async (e) => {
        e.preventDefault();

        const note = await CreateNote({
        "user":`${user.id}`,
        "produce":`${subject.id}`,
        "name": formValues.name,
        "content": formValues.content
        });

        setFormValues({
          user:"",
          produce:"",
          name:"",
          content: ""
        });
        navigate(`/mynotes/`);
      };

  if (auth && user){
    return (
        <div className="p-3  text-center bg-white font-light">

            <h1 className="text-xl">Save a note about <span className="font-semibold">{subject.name}</span> !</h1>
            <div className="flex justify-center">
                <div className="w-[30vw] h-fit mt-5 p-3 bg-slate-100 rounded-lg shadow-lg hover:scale-105" >

                    <img className="p-2 h-[30vw] w-[30vw] object-cover m-auto border-4 border-gray-300" src={subject.image_url} />
                </div>
                <div className="m-10 w-[30vw] text-left">
                    <h1>Name: {subject.name}</h1>
                    <br></br>
                    <h2 className="text-sm">{subject.description}</h2>
                    <br></br>
                    <h3>Learn more here!</h3>
                    <br></br>
                    <button className="text-xs text-left bg-lightblue p-1 px-2 rounded-md font-semibold hover:scale-110"><a target="_blank" href={subject.link1}>{subject.link1}</a></button>
                    {subject.link2 ? <button className="text-xs text-left bg-lightblue p-1 px-2 rounded-md font-semibold hover:scale-110"><a target="_blank" href={subject.link2}>{subject.link2}</a></button> : null}
                    {subject.link3 ? <button className="text-xs text-left bg-lightblue p-1 px-2 rounded-md font-semibold hover:scale-110"><a target="_blank" href={subject.link3}>{subject.link3}</a></button> : null}
                </div>
            </div>
            <div>
                <form>
                    <div className="py-3">
                        <label className="p-3 text-s" htmlFor="username">Produce:</label>
                        <br></br>
                        <input
                            className="rounded-2xl p-2 px-4 text-xs border-2"
                            onChange={handleChange}
                            name="produce"
                            type="text"
                            value={subject.name}
                            readOnly
                        />
                        </div>
                        <div className="py-3">
                        <label className="p-3 text-s" htmlFor="username">Note Name:</label>
                        <br></br>
                        <input
                            className="rounded-2xl p-2 px-4 text-xs border-2"
                            onChange={handleChange}
                            name="name"
                            type="text"
                            value={formValues.name}
                     
                        />
                        </div>
                        <div>
                         <label className="p-3 text-s" htmlFor="content">Note:</label>
                        <br></br>
                        <input
                            className="rounded-2xl p-2 px-4 text-xs border-2 text-left w-[50vw] h-[5vw] overflow-y-scroll"
                            onChange={handleChange}
                            name="content"
                            placeholder="Write your note here!"
                            type="text"
                            value={formValues.content}
                            required
                        />
                    </div>
                    <div>
                        <button onClick={handleSubmit} className="text-xs text-left bg-lightblue p-1 mt-5 px-2 rounded-md font-semibold hover:scale-110">Add Note</button>
                    </div>

                </form>
            </div>
        </div>


    )
  }else if (auth && user){
    return(
        <div><h2>please hold</h2></div>
    )
  }else{
    return(
        <div className="bg-white font-light p-5">
            <div className="text-center p-3">
            <h2>You don't have access to this page.</h2>
            </div>
            <div className="w-fit h-fit text-center hover:scale-105 rounded-xl m-[auto] bg-mygreen text-white p-3">
                <Link to="/login">Log in to view!</Link>
            </div>
        </div>
    )
}}