import { UserContext } from "../UserContext";
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdAlternateEmail } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { HiOutlineLogout } from 'react-icons/hi'
import Logo from '../assets/logo.png'

export default function Nav() {

    const { setUser, seasonLocations } = useContext(UserContext)
    const { auth, toggleAuth } = useContext(UserContext)
    const handleLogout = () => {
        setUser(null)
        toggleAuth(false)
    }

    if (auth) {

        return (
            <div className="sm:w-screen sm:flex sm:justify-between sm:p-3 sm:py-0 px-4 py-8 mx-auto pt-3 sm:pt-0 h-30 bg-white bg-opacity-10">
                <div>
                    <img className="w-3/5 sm:flex sm:float-left m-[auto] sm:pt-8 sm:m-0 sm:w-[20vw] " src={Logo} />
                   
                </div>
                <div className="hidden sm:visible sm:flex sm:justify-end sm:p-6 sm:text-center">
                    <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/"><button>HOME</button></Link>
                    <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/resources"><button>RESOURCES</button></Link>
                    <Link className="m-3 bg-mylime px-2 pt-2.5 py-2 sm:shadow-l rounded-md text-xs hover:scale-105" to="/search"><button>SEARCH</button></Link>
                    <Link className="m-3 bg-mylime px-2 py-1 pt-2 sm:shadow-l rounded-md text-xs hover:scale-105" to="/contact"><button><MdAlternateEmail size={18} /></button></Link>
                    <Link className="m-3 bg-mylime px-2 py-1 pt-2 sm:shadow-l rounded-md text-xs hover:scale-105" to="/profile"><button><FaUserCircle size={18} /></button></Link>
                    <Link className="m-3 bg-mylime px-2  py-1 pt-2 sm:shadow-l rounded-md text-xs hover:scale-105" to="/"><button onClick={handleLogout}><HiOutlineLogout size={18} /></button></Link>
                </div>

                <div className="visible sm:hidden grid grid-cols-2 justify-center gap-2 text-center p-5 pb-0 ">
                    <Link className="m-1 bg-mylime px-10 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/"><button>HOME</button></Link>
                    <Link className="m-1 bg-mylime px-10 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/resources"><button>RESOURCES</button></Link>
                    <Link className="m-1 bg-mylime px-10 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/search"><button>SEARCH</button></Link>
                    <Link className="m-1 bg-mylime px-10 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/contact"><button><MdAlternateEmail size={12} /></button></Link>
                    <Link className="m-1 bg-mylime px-10 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/profile"><button><FaUserCircle size={12} /></button></Link>
                    <Link className="m-1 bg-mylime px-10 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/"><button onClick={handleLogout}><HiOutlineLogout size={12} /></button></Link>      
                </div>
            </div>
        )
    }

    else {
        if (seasonLocations.length == 0) {
            return (
                <div className="sm:w-screen sm:flex sm:justify-between sm:p-3 sm:py-0 px-4 py-8 mx-auto pt-3 sm:pt-0 h-30 bg-white bg-opacity-10">
                    <img className="w-3/5 sm:flex sm:float-left m-[auto] sm:pt-8 p-5 sm:m-0 sm:w-[20vw] " src={Logo} />
                </div>
            )
        }
        else {
            return (
                <div className="sm:w-screen sm:flex sm:justify-between sm:p-3 sm:py-0 px-4 py-8 mx-auto pt-3 sm:pt-0 sm:h-30 bg-white bg-opacity-10">
                    <div>
                    <img className="w-3/5 sm:flex sm:float-left m-[auto] sm:pt-8 sm:m-0 sm:w-[20vw] " src={Logo} />
                    </div>
                    <div className="sm:flex sm:justify-end sm:p-6 hidden sm:visible">
                        <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105 " to="/"><button>HOME</button></Link>
                        <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/resources"><button>RESOURCES</button></Link>
                        <Link className="m-3 bg-purple-200 px-2 py-2 pt-2.5 rounded-md text-xs tracking-wide hover:scale-105 " to="/login"><button>LOGIN</button></Link>
                        <Link className="m-3 bg-purple-200 px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/register"><button>REGISTER</button></Link>
                        <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/contact"><button>CONTACT</button></Link>
                    </div>
                    <div className="visible sm:hidden grid grid-cols-2 gap-2 justify-center text-center p-5 pb-0 ">
                        <Link className="m-1 bg-mylime px-10 py-2 pt-2.5 sm:shadow-l rounded-md text-xs hover:scale-105" to="/"><button>HOME</button></Link>
                        <Link className="m-1 bg-mylime px-10  py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/resources"><button>RESOURCES</button></Link>
                        <Link className="m-1 bg-purple-200 px-10  py-2 pt-2.5 rounded-md text-xs tracking-wide hover:scale-105 " to="/login"><button>LOGIN</button></Link>
                        <Link className="m-1 bg-purple-200 px-10  py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/register"><button>REGISTER</button></Link>
                        <Link className="m-1 bg-mylime px-10  pt-2.5 py-2 rounded-md text-xs hover:scale-105" to="/contact"><button>CONTACT</button></Link>
                    </div>
                </div>
            )
        }
    }
}