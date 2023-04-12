import HeroGraphic from '../assets/herographic.png'
import { UserContext } from '../UserContext'
import {useContext} from 'react'
import Search from './Search'
export default function Home(){
    const {auth, user, seasonLocations} = useContext(UserContext)
    if (seasonLocations.length == 0){
        return(
            <div className="bg-white">
            <div className="bg-white font-didot text-center p-6">Please wait while our seasonal foods load!</div>
            <img className=" rounded-lg m-auto h-[75vh]" src="https://i.pinimg.com/originals/ce/7c/4e/ce7c4ec19b614ccde9be9f45aa93035f.gif"/>
            </div>
        )
    }else{
    return(
        <div className="text-center">
            <img className="w-screen"src={HeroGraphic}/>
            <Search/>
        </div>
    )
    }}
//need a view where you can search ALL users by username, get info about them. can trigger that in login or at profile