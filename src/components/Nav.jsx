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
            <div className="h-30 bg-white bg-opacity-10">
                <div>
                    <img className=" sm:hidden md:hidden w-[20vw] h-fit float-left p-9" src={Logo} />

                </div>
                <div className="flex sm:justify-center md:justify-center justify-end p-6 text-center">
                    <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/"><button>HOME</button></Link>
                    <Link className="m-3 bg-mylime px-2 py-2 pt-2.5  rounded-md text-xs hover:scale-105" to="/resources"><button>RESOURCES</button></Link>
                    <Link className="m-3 bg-mylime px-2 pt-2.5 py-2 shadow-l rounded-md text-xs hover:scale-105" to="/search"><button>SEARCH</button></Link>
                    <Link className="m-3 bg-mylime px-2 py-1 pt-2 shadow-l rounded-md text-xs hover:scale-105" to="/contact"><button><MdAlternateEmail size={18} /></button></Link>
                    <Link className="m-3 bg-mylime px-2 py-1 pt-2 shadow-l rounded-md text-xs hover:scale-105" to="/profile"><button><FaUserCircle size={18} /></button></Link>
                    <Link className="m-3 bg-mylime px-2  py-1 pt-2 shadow-l rounded-md text-xs hover:scale-105" to="/"><button onClick={handleLogout}><HiOutlineLogout size={18} /></button></Link>
                </div>
            </div>
        )
    }

    else {
        if (seasonLocations.length == 0) {
            return (
                <div>
                    <Link to="/"><img className="sm:w-fit w-[20vw] h-auto p-9" src={Logo} /></Link>
                </div>
            )
        }
        else {
            return (
                <div className="h-30 bg-white bg-opacity-10">
                    <div>
                        <img className="sm:hidden md:hidden w-[20vw] h-fit float-left p-9" src={Logo} />
                    </div>
                    <div className="flex justify-end p-6 sm:justify-center md:justify-center">
                        <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 shadow-l rounded-md text-xs hover:scale-105 " to="/"><button>HOME</button></Link>
                        <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/resources"><button>RESOURCES</button></Link>
                        <Link className="m-3 bg-purple-200 px-2 py-2 pt-2.5 rounded-md text-xs tracking-wide hover:scale-105 " to="/login"><button>LOGIN</button></Link>
                        <Link className="m-3 bg-purple-200 px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/register"><button>REGISTER</button></Link>
                        <Link className="m-3 bg-mylime px-2 py-2 pt-2.5 rounded-md text-xs hover:scale-105" to="/contact"><button>CONTACT</button></Link>
                    </div>
                </div>
            )
        }
    }
}