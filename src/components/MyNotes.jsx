import { UserContext } from "../UserContext"
import { useContext, useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {BiEdit, BiTrash} from 'react-icons/bi'
import axios from "axios"
import { BASE_URL } from "../services/api"


export default function MyNotes() {
    let noteslist = []
    let navigate = useNavigate()
    const [currentList, setCurrentList] = useState([])
    const { user, auth, trigger, setTrigger} = useContext(UserContext)
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
      }, [remove])

      function deleteNote(id){
        setRemove(id)
      }

    function sendToEdit(id){
        navigate(`./edit/${id}`)
    }
    


    if (!user) {
        return (
            <div>
                <h2>Please log in to view your notes.</h2>
            </div>
        )

    } else if (currentList.length == 0) {
        return (
            <div>
                <h3>You haven't written any notes yet!</h3>
            </div>
        )
    } else {
        return (
              <div className="bg-white flex w-[100vw] h-[100vh] justify-center pt-10 gap-10 m-auto text-left ">
                            {
                                currentList.map((note) => {
                                    return (

                                        <div className="w-[25vw] h-fit p-3 bg-slate-200 rounded-lg text-sm shadow-lg hover:scale-105 h-[20vh]" key={note.id} >
                                            <div className="flex justify-between">
                                            <h2 className="text-m px-3 pt-2 font-semibold tracking-widest text-left">{note.name}</h2>
                                            </div>
                                            <div>
                                            <h1 className="text-m px-3 pt-2 font-light text-left">{note.content}</h1>
                                            </div>
                                            <div className="flex justify-end">
                                            <button onClick={() => sendToEdit(note.id)} className="p-1"><BiEdit size={20}/></button>
                                            <button onClick={() => deleteNote(note.id)} className="p-1"><BiTrash size={20}/></button>
                                            </div>
                                        </div>
                                    
                                    )
                                })
                            }

                        </div>
        )}}