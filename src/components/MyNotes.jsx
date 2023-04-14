import { UserContext } from "../UserContext"
import { useContext, useState, useEffect } from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {BiEdit, BiTrash} from 'react-icons/bi'
import axios from "axios"
import { BASE_URL } from "../services/api"
import ModalDelete from './modals/ModalDelete'



export default function MyNotes() {
    let noteslist = []
    let navigate = useNavigate()
    const [currentList, setCurrentList] = useState([])
    const { user, auth, trigger, setTrigger, confirm, setConfirm} = useContext(UserContext)
    const [ready, setReady] = useState(false)
    const [remove, setRemove] = useState(null)
    const [notes, setNotes] = useState([])


    useEffect(() => {
      const getNotes = async () => {
          const res = await axios.get(`${BASE_URL}api/notes/`);
          setNotes(res.data)
          setReady(!ready)  
      }
      getNotes();
    }, [trigger])
  
    useEffect(() => {
        const getMyNotes = () => {
            notes.map((note) => {
                if (note.user == user.id) {
                    noteslist.push(note)
                }
            } )
            console.log(noteslist)
            
            setCurrentList(noteslist)
        }
        getMyNotes();
        console.log(currentList)
    }, [ready])



    useEffect(() => {
        const deleteNote = async () => {
            const res = await axios.delete(`${BASE_URL}api/notes/${remove}`);
            setNotes(res.data)
            setTrigger(!trigger)
        }
        deleteNote();
      }, [confirm])

      function deleteNote(id){
        setRemove(id)
      }

    function sendToEdit(id){
        navigate(`./edit/${id}`)
    }
    


    if (!user) {
        return (
            <div className="bg-white text-center pt-10 font-light">
                <h3 className="pb-5">This page is only available if you're logged in</h3>
                <div className="w-fit h-fit text-center hover:scale-105 rounded-xl m-[auto] bg-mygreen text-white p-3">
                <Link to="/login">Log in to view!</Link>
            </div>
            </div>
        )

    } else if (currentList.length == 0) {
        return (
            <div className="bg-white p-3 text-center font-light">
                <h3 className="text-xl font-light tracking-widest pb-5 pt-5">Whoops!</h3>
                <h3> You haven't added any notes yet!</h3>
                <h3> Head back to the <Link className="bg-mylime px-2 py-1 rounded-lg hover:scale-105 " to = "/search">search</Link> to explore and add some!</h3>
            </div>
        )
    } else {
        return (
            <div className="bg-white">
              <div className="bg-white flex w-[80vw] h-[100vh] justify-center pt-10 gap-10 m-auto text-left ">
                            {
                                currentList.map((note) => {
                                    return (

                                        <div className="w-[25vw] h-fit p-3 bg-slate-200 rounded-lg text-sm shadow-lg hover:scale-105 " key={note.id} >
                                            <div className="flex justify-between">
                                            <h2 className="text-m px-3 pt-2 font-semibold tracking-widest text-left">{note.name}</h2>
                                            </div>
                                            <div>
                                            <h1 className="text-m px-3 pt-2 font-light text-left">{note.content}</h1>
                                            </div>
                                            <div className="flex justify-end">
                                            <button onClick={() => sendToEdit(note.id)} className="p-1"><BiEdit size={20}/></button>
                                            <button value = {note.id} onClick={()=>deleteNote(note.id)}><ModalDelete/></button>
                                            </div>
                                        </div>
                                    
                                    )
                                })
                            }

                        </div>
                        </div>
        )}}