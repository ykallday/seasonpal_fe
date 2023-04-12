import { UserContext } from '../UserContext'
import {useContext} from 'react'
import {BsEmojiSmile} from 'react-icons/bs'


export default function Profile (){
    const {auth, user} = useContext(UserContext)
    if(auth){
    return(
        <div className="bg-white text-center p-4">
            <h1 className="font-didot text-3xl flex justify-center my-10">Welcome, {user}!<span className="p-1"><BsEmojiSmile size = {30}/></span> </h1>
            <div className="grid grid-cols-3 w-[70vw] m-auto my-20">
                <div className="w-[20vw] h-[20vw] flex justify-center hover:scale-105 rounded-xl bg-mygreen p-3"></div>
                <div className="w-[20vw] h-[20vw] flex justify-center hover:scale-105 rounded-xl bg-mygreen p-3"></div>
                <div className="w-[20vw] h-[20vw] flex justify-center hover:scale-105 rounded-xl bg-mygreen p-3"><h1 className="my-[5vw] font-didot text-lg text-white">Change my Profile</h1></div>
            </div>
        </div>
    )
} else{
    return(
        <div>
            <h2>You don't have access to this page.</h2>
        </div>
    )
}  }