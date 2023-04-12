import './App.css';
import {useState, useEffect} from 'react'
import { UserContext } from './UserContext';
import Main from './components/Main'
import Header from './components/Header'
import axios from 'axios'
import { BASE_URL } from './services/api';

function App() {
  const [user, setUser] = useState({'username':'', 'password':'', 'payload':{}})
  const [auth, toggleAuth] = useState(false)
  const [produce, setProduce] = useState([])
  const [seasonLocations, setSeasonLocations] = useState([])

  useEffect(()=>{
    const getSeasonLocs = async () => {
      const res = await axios.get(`${BASE_URL}api/seasonlocations/`);
      console.log(res)
      setSeasonLocations(res.data)
    }
    getSeasonLocs();

},[])



  return (
    <div className="bg-mygreen">
       <UserContext.Provider value={{user, setUser, auth, toggleAuth, produce, setProduce, seasonLocations, setSeasonLocations}}>
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
