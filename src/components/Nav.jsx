import { UserContext } from "../UserContext";
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import {MdAlternateEmail} from 'react-icons/md'
import {FaUserCircle} from 'react-icons/fa'
import {HiOutlineLogout} from 'react-icons/hi'

export default function Nav(){
    const {user, setUser} = useContext(UserContext)
    const {auth, toggleAuth} = useContext(UserContext)
    const handleLogout = () => {
        setUser(null)
        toggleAuth(false)
    }
    if (auth){
        return(
            <div className="h-30 bg-white bg-opacity-10">
            <div>
                <p className="font-didot float-left p-9 h-5 text-4xl text-white">SeasonPal</p>
            </div>
            <div className="flex justify-end p-6 text-center">
                <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to = "/"><button>HOME</button></Link>
                <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to = "/resources"><button>RESOURCES</button></Link>
                <Link className="m-3 bg-mylime px-2 pt-2.5 py-2 sm:shadow-l rounded-md text-xs hover:scale-105" to = "/search"><button>SEARCH</button></Link>
                <Link className="m-3 bg-mylime px-2 py-1 pt-2 sm:shadow-l rounded-md text-xs hover:scale-105" to = "/contact"><button><MdAlternateEmail size={18}/></button></Link>
                <Link className="m-3 bg-mylime px-2 py-1 pt-2 sm:shadow-l rounded-md text-xs hover:scale-105"  to = "/profile"><button><FaUserCircle size={18}/></button></Link>
                <Link className="m-3 bg-mylime px-2  py-1 pt-2 sm:shadow-l rounded-md text-xs hover:scale-105" to = "/"><button onClick={handleLogout}><HiOutlineLogout size={18}/></button></Link>
            </div>
            </div>
        )
    }
    else{
        return(
            <div className="h-30 bg-white bg-opacity-10">
            <div>
                <p className="font-didot float-left p-9 h-25 text-4xl text-white">SeasonPal</p>
            </div>
            <div className="flex justify-end p-6">
                <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105 " to = "/"><button>HOME</button></Link>
                <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to = "/resources"><button>RESOURCES</button></Link>
                <Link className="m-3 bg-purple-200 px-2 py-2 pt-2.5 rounded-md text-xs tracking-wide hover:scale-105 " to = "/login"><button>LOGIN</button></Link>
                <Link className="m-3 bg-purple-200 px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to = "/register"><button>REGISTER</button></Link>
                <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105"to = "/contact"><button>CONTACT</button></Link>
            </div>
            </div>
        )
    }
}