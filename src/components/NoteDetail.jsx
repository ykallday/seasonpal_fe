import {useParams, useNavigate, Link} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { UserContext } from '../UserContext'
import { BASE_URL } from '../services/api'


export default function NoteDetail(){

    const [note, setNote] = useState("")
    // const [subject, setSubject] = useState("")
    let {noteid} = useParams();
    // const {user, auth} = useContext(UserContext)
    // let load = false
    // let navigate= useNavigate()
    const { user, auth, trigger, setTrigger} = useContext(UserContext)
    // let navigate = useNavigate();
    const [produceId, setProduceId] = useState("")
    const [subject, setSubject] = useState({})
    const [ready, setReady] = useState(false)
    

    useEffect(() => {
        const getNote = async () => {
            const res = await axios.get(`${BASE_URL}api/notes/${noteid}`);
            setNote(res.data);
            setReady(!ready)
            setProduceId(note.produce)
        }
        getNote();

    }, [])

    useEffect(() => {
        const getProduce = async () => {
            const res = await axios.get(`${BASE_URL}api/produce/${produceId}`);
            setSubject(res.data)
        }
        getProduce()
   
    }, [produceId])




 if (auth && user){
            return (
                <div className="p-3  text-center bg-white font-light">
        
                    <h1 className="text-xl">View your note about <span className="font-semibold">{subject.name}</span> !</h1>
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
               </div>
     
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