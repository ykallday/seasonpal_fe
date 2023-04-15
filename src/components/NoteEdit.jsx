import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from 'react'
import { UserContext } from "../UserContext";
import { BASE_URL } from "../services/api";


export default function NoteEdit() {

    let { noteid } = useParams();
    const [note, setNote] = useState({})
    const { user, trigger, setTrigger } = useContext(UserContext)
    let navigate = useNavigate();
    const [produceId, setProduceId] = useState("")
    const [subject, setSubject] = useState("")
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

    const [formValues, setFormValues] = useState({
        produce: note.produce,
        content: note.content,
    });

    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.put(`${BASE_URL}api/notes/${noteid}`, {
            "user": user.id,
            "produce": note.produce,
            "name": formValues.name,
            "content": formValues.content
        })
        setReady(!ready)
        setTrigger(!trigger)
        navigate(`/mynotes/`);
    }

    return (

        <div className="p-3  text-center bg-white font-light">
            <form>
                <img className="w-[50vw] m-[auto]" src={subject.image_url} />
                <div className="py-3">
                    <label className="p-3 text-s" htmlFor="username">Note Name:</label>
                    <br></br>
                    <input
                        className="rounded-2xl p-2 px-4 text-xs border-2 text-slate-600"
                        onChange={handleChange}
                        placeholder={note.name}
                        name="name"
                        type="text"
                        value={formValues.name}

                    />
                </div>
                <div>
                    <label className="p-3 text-s" htmlFor="content">Note:</label>
                    <br></br>
                    <input
                        className="rounded-2xl p-2 px-4 text-xs border-2 text-left w-[50vw] h-[5vw] overflow-y-scroll text-slate-600 break-normal"
                        onChange={handleChange}
                        name="content"
                        placeholder={note.content}
                        type="text"
                        value={formValues.content}
                        required
                    />
                </div>
                <div>
                    <button onClick={handleSubmit} className="text-xs text-left bg-lightblue p-1 mt-5 px-2 rounded-md font-semibold hover:scale-110">Update Note</button>
                </div>

            </form>
        </div>


    )
}


