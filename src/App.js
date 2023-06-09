import './App.css';
import {useState, useEffect} from 'react'
import { UserContext } from './UserContext';
import Main from './components/Main'
import Header from './components/Header'
import axios from 'axios'
import { BASE_URL } from './services/api';

function App() {
  const [user, setUser] = useState(null)
  const [auth, toggleAuth] = useState(false)
  const [produce, setProduce] = useState([])
  const [seasonLocations, setSeasonLocations] = useState([])
  const [trigger, setTrigger] = useState(false)
  const [confirm, setConfirm] = useState(false)
  const [item, setItem] = useState("")
  const [currLocation, setCurrLocation] = useState("")
  const [go, setGo] = useState(false);


  useEffect(()=>{
    const getSeasonLocs = async () => {
      const res = await axios.get(`${BASE_URL}api/seasonlocations/`);
      setSeasonLocations(res.data)
    }
    getSeasonLocs();

},[])


  return (
    <div className="bg-mygreen">
       <UserContext.Provider value={{setItem, item, confirm, setConfirm, trigger, 
        setTrigger, user, setUser, auth, toggleAuth, produce, setProduce,
         seasonLocations, setSeasonLocations,go, setGo, currLocation, setCurrLocation}}>
        <header>
          <Header/>
        </header>
        <main>
          <Main/>
        </main>
       </UserContext.Provider> 
    </div>
  );
}

export default App;
