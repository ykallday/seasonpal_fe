import { UserContext } from '../UserContext'
import {useContext, useEffect} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import {BsEmojiSmile} from 'react-icons/bs'
import { CheckSession } from '../services/Auth'
import {FaUserCircle} from 'react-icons/fa'
import {GrNotes, GrNote} from 'react-icons/gr'
import strawberry from '../assets/strawberries.png'


export default function Profile (){


    
    const {auth, toggleAuth, user} = useContext(UserContext)
    let navigate = useNavigate()

    

    const navBack=()=>{
        navigate(-1)
    }
    const navToProfChange=(id)=>{
        navigate(`/profile/change/${id}`)
    }
    const navToNotes=()=>{
        navigate(`/mynotes`)
    }
    const navToSearch=()=>{
        navigate(`/search`)
    }



    CheckSession();
    

    
if(auth && user){
    return(
        <div className="bg-white text-center p-4">
            <button className=" hover:scale-105 p-2 rounded-lg bg-pink-200"onClick={navBack}><h5 className=" text-center text-xs font-semibold uppercase">Back</h5></button>
            <h1 className="font-didot text-3xl flex justify-center my-10">Welcome, {user.username}!<span className="p-1"><BsEmojiSmile size = {30}/></span> </h1>
            <div className="grid grid-cols-3 w-[50vw] m-auto my-20 gap-4">
                <button onClick={() => navToProfChange(user.id)} className="bg-mylime hover:scale-110 rounded-lg p-2 px-4 tracking-wider font-light flex w-fit"><h1 className="pr-4"><FaUserCircle size={20}/></h1> Change Profile</button>
                <button onClick={navToNotes} className="bg-mylime hover:scale-110 rounded-lg p-2 px-4 tracking-wider font-light flex w-fit"><h1 className= "pr-4" ><GrNotes size = {20}/> </h1> View My Notes</button>
                <button onClick={navToSearch}className="bg-mylime hover:scale-110 rounded-lg p-2 px-4 tracking-wider font-light flex w-fit"><h1 className="pr-4"><GrNote size={20}/></h1>Add New Note</button>
            </div>
            <div className="absolute left-0 bottom-0 w-[100vw] h-[20vh] top-100"><img className="w-[100vw] cover" src={strawberry}/></div>
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