import banner from '../assets/refbanner.png'
import axios from 'axios'
import {useEffect,useState} from 'react'
import { BASE_URL } from '../services/api'
import {useNavigate} from 'react-router-dom'

export default function Resources (){
    const [suggestions, setSuggestions] = useState([])
    useEffect(() => {
        const getSuggestions = async () => {
            const res = await axios.get(`${BASE_URL}api/suggestions/`);
            setSuggestions(res.data)
 
        }
        getSuggestions();
      }, [])

      let navigate = useNavigate()

    

      const navBack=()=>{
          navigate(-1)
      }
    return(
        <div className="bg-white">
            
        <div className="w-[100vw] h-[30vh] flex justify-center bg-mygreen mt-1">
            <img className = "h-[25vh]" src={banner}/>
        </div>
        <button className=" m-[auto] block mt-4 hover:scale-105 p-2 rounded-lg bg-pink-200"onClick={navBack}><h5 className=" text-center text-xs font-semibold uppercase">Back</h5></button>
        <div className="flex flex-cols pt-3 bg-white justify-center p-5 text-justify">
            
            <div className="w-[30vw] p-5">
            <h3>This website was created with the intention of making seasonal eating feel less like work</h3>
            <img src = "https://cdn.dribbble.com/users/2054184/screenshots/4885841/media/8dc03a0c6d0b839db02e59b440eb1e6d.gif"/> <span>and a little more like FUN! </span> <img src="https://media3.giphy.com/media/dAdA5PgN0ovYJLTQ4C/giphy.gif?cid=ecf05e47dw2xykk5vsytd83frzx8fi2v0m30x034slaw637n&rid=giphy.gif&ct=g"/>
            <h5>Not only does eating seasonally mean you'll get the most delicious and nutritious produce around, but you could also be helping your local community of farmers, and doing some good for the environment!</h5>
        </div>
       
        </div>
        <h1 className="font-light text-lg text-center">Check out some suggestions from the community!</h1>

        <div className="bg-lightblue p-5 text-center mt-2 flex w-[100vw]">
            <div className="text-sm bg-lightblue p-2 w-[90vw] m-[auto] flex">
            {suggestions.map((item)=>(
                <div className="m-4 bg-slate-100 p-3 rounded-lg">
                <h2 className="font-semibold">{item.category}</h2>
                <h4 className="text-xs font-semibold pb-4 text-mygreen">{item.username}</h4>
                <h2>{item.content}</h2>
                </div>
            ))}
            </div>
         </div>
        </div>
    )
}