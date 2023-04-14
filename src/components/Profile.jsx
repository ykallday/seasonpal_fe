import { UserContext } from '../UserContext'
import {useContext, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {BsEmojiSmile} from 'react-icons/bs'
import { CheckSession } from '../services/Auth'
import axios from 'axios'
import { BASE_URL } from '../services/api'

export default function Profile (){
    const {auth, toggleAuth, user} = useContext(UserContext)
    let navigate = useNavigate()


    const navToProfChange=(id)=>{
        navigate(`/profile/change/${id}`)
    }
    const navToNotes=()=>{
        navigate(`/mynotes`)
    }


    CheckSession();
    

    
if(auth && user){
    return(
        <div className="bg-white text-center p-4">
            <h1 className="font-didot text-3xl flex justify-center my-10">Welcome, {user.username}!<span className="p-1"><BsEmojiSmile size = {30}/></span> </h1>
            <div className="grid grid-cols-3 w-[70vw] m-auto my-20">
                {/* <div onClick={() => navToProfChange(user.id)}className="w-[20vw] h-[20vw] flex justify-center hover:scale-105 rounded-xl bg-mygreen p-3"><h1 className="my-[5vw] font-didot text-lg text-white">Change my Profile</h1></div> */}
                <div onClick={navToNotes}className="w-[20vw] h-[20vw] flex justify-center hover:scale-105 rounded-xl bg-mygreen p-3"><h1 className="my-[5vw] font-didot text-lg text-white">View My Notes</h1></div>
                {/* <div className="w-[20vw] h-[20vw] flex justify-center hover:scale-105 rounded-xl bg-mygreen p-3"><h1 className="my-[5vw] font-didot text-lg text-white">Add a Resource for the Community</h1></div> */}
            </div>
        </div>
    )
} else{
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
}  }