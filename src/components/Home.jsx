import HeroGraphic from '../assets/herographic.png'
import { UserContext } from '../UserContext'
import { useContext } from 'react'
import Search from './Search'

export default function Home() {

    const { seasonLocations } = useContext(UserContext)
    if (seasonLocations.length == 0) {
        
        return (
            <div className="bg-white">
                <div className=" bg-white font-didot text-center p-6">Please wait while our seasonal foods load!</div>
                <img className=" rounded-lg m-auto h-auto sm:h-[75vh]" src="https://i.pinimg.com/originals/ce/7c/4e/ce7c4ec19b614ccde9be9f45aa93035f.gif" />
                <h5 className=" mt-3 text-center text-xs font-semibold uppercase">Adorable fruit GIF found <button className="bg-yellow-300 rounded-lg p-1"><a href="https://dribbble.com/shots/3542502-61-100-Fruit-Dance-Party" target="_blank">HERE</a></button></h5>
            </div>
        )
    } else {
        
        return (
            <div className="text-center">
                <img className=" hidden sm:visible sm:w-screen" src={HeroGraphic} />
                <Search />
            </div>
        )
    }
}
