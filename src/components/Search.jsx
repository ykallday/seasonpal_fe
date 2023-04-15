import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import { TbCircleNumber1, TbCircleNumber2, TbNote } from 'react-icons/tb'
import ProduceDetail from './modals/ProduceDetail'

export default function Search() {

    const { produce, item, setItem, seasonLocations, user, auth } = useContext(UserContext)
    const [filtered, setFiltered] = useState([])
    const [initial, setInitial] = useState([])

    const [formValues, setFormValues] = useState({ location: "", filtertype: "", query: "" });
    let navigate = useNavigate()
    const navToNote=(id)=>{
        navigate(`note/${id}`)
    }
    

    useEffect(() => {
        let locArray = []
        let locPro = []
        formValues.query = ""
        formValues.filtertype = ""
        for (let i = 0; i < seasonLocations.length; i++) {
            if (seasonLocations[i].location == formValues.location.toUpperCase()) {
                locArray.push(seasonLocations[i])
                for (let p = 0; p < seasonLocations[i].produce.length; p++) {
                    let double = false;
                    for (let d = 0; d < locPro.length; d++) {
                        if (locPro[d].name != seasonLocations[i].produce[p].name) {
                            double = false;
                        }
                        else {
                            double = true;
                            d = locPro.length;
                        }
                    }
                    if (double == false) {
                        locPro.push(seasonLocations[i].produce[p])
                    }
                }


            }
        }

        setFiltered(locPro)
        setInitial(locArray)
    }, [formValues.location])

    useEffect(() => {
        let seasonArray = []
        if (formValues.filtertype == "MONTH/SEASON") {
            for (let i = 0; i < initial.length; i++) {
                if (initial[i].season == formValues.query.toUpperCase()) {
                    for (let p = 0; p < initial[i].produce.length; p++) {
                        seasonArray.push(initial[i].produce[p])
                    }

                }
            }
            setFiltered(seasonArray)
        } else if (formValues.filtertype == "CATEGORY") {
            let categoryArray = []
            for (let i = 0; i < initial.length; i++) {
                for (let p = 0; p < initial[i].produce.length; p++)
                    if (initial[i].produce[p].category == formValues.query.toUpperCase()) {
                        let double = false;
                        for (let d = 0; d < categoryArray.length; d++) {
                            if (categoryArray[d].name != initial[i].produce[p].name || categoryArray.length == 0) {
                                double = false;
                            }
                            else {
                                double = true;
                                d = categoryArray.length;
                            }
                        }
                        if (double == false) {
                            categoryArray.push(initial[i].produce[p])
                        }
                    }
            }


            setFiltered(categoryArray)
        }

        else if (formValues.filtertype == "PRODUCE") {
            let produceArray = [];
            for (let i = 0; i < initial.length; i++) {
                for (let p = 0; p < initial[i].produce.length; p++) {
                    if (initial[i].produce[p].name.includes(formValues.query.toUpperCase())) {
                        let double = false;
                        for (let d = 0; d < produceArray.length; d++) {
                            if (produceArray[d].name != initial[i].produce[p].name || produceArray.length == 0) {
                                double = false;
                            }
                            else {
                                double = true;
                                d = produceArray.length;
                            }
                        }
                        if (double == false) {
                            produceArray.push(initial[i].produce[p])
                        }
                    }
                }
            }

            setFiltered(produceArray)
        }
    }
        , [formValues.query, formValues.filtertype])




    const handleChange = (e) => {
        e.preventDefault();
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    function handleDetail(id){
        setItem(id)
        console.log(item)
      }

    if (seasonLocations.length == 0) {
        return (
            <div className="bg-white">
                <div className="bg-white font-didot text-center p-6">Please wait while our seasonal foods load!</div>
                <img className="w-[75] bg-white m-auto" src="https://media1.giphy.com/media/l2JJHEW1lToNnJzxe/giphy.gif?cid=ecf05e4729c4dzzrj9hfsevs9t7zusmcjllew10778wxhxpy&rid=giphy.gif&ct=g" />
            </div>
        )
    } else {
        return (
            <div className="bg-white">
                <div>
                    <form className="text-center h-fit p-2 bg-white" onSubmit={handleSubmit}>
                        <h3 className="font-didot text-3xl my-7">Search for Seasonal Produce:</h3>
                        <div className="p-5  px-20 border-2 border-mylime rounded-lg w-fit text-center m-[auto] my-4">
                            <label className="text-m flex text-center" htmlFor="location"><span className="px-2"><TbCircleNumber1 size={20} /></span>SELECT YOUR LOCATION</label>
                            <select className=" rounded-sm w-auto border-2 m-2 text-center text-s"
                                onChange={handleChange}
                                name="location"
                                type="text"
                                value={formValues.location}
                                required
                            >
                                <option value="">----</option>
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="Arizona">Arizona</option>
                                <option value="Arkansas">Arkansas</option>
                                <option value="Northern California">California, Northern</option>
                                <option value="Southern California">California, Southern</option>
                                <option value="Colorado">Colorado</option>
                                <option value="Connecticut">Connecticut</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Illinois</option>
                                <option value="Indiana">Indiana</option>
                                <option value="Iowa">Iowa</option>
                                <option value="Kansas">Kansas</option>
                                <option value="Kentucky">Kentucky</option>
                                <option value="Louisiana">Louisiana</option>
                                <option value="Maine">Maine</option>
                                <option value="Maryland">Maryland</option>
                                <option value="Massachusetts">Massachusetts</option>
                                <option value="Michigan">Michigan</option>
                                <option value="Minnesota">Minnesota</option>
                                <option value="Mississippi">Mississippi</option>
                                <option value="Missouri">Missouri</option>
                                <option value="Montana">Montana</option>
                                <option value="Nebraska">Nebraska</option>
                                <option value="Nevada">Nevada</option>
                                <option value="New Hampshire">New Hampshire</option>
                                <option value="New Jersey">New Jersey</option>
                                <option value="New Mexico">New Mexico</option>
                                <option value="New York">New York</option>
                                <option value="North Carolina">North Carolina</option>
                                <option value="North Dakota">North Dakota</option>
                                <option value="Ohio">Ohio</option>
                                <option value="Oklahoma">Oklahoma</option>
                                <option value="Oregon">Oregon</option>
                                <option value="Pennsylvania">Pennsylvania</option>
                                <option value="Rhoda Island">Rhoda Island</option>
                                <option value="South Carolina">South Carolina</option>
                                <option value="South Dakota">South Dakota</option>
                                <option value="Tennessee">Tennessee</option>
                                <option value="Texas">Texas</option>
                                <option value="Utah">Utah</option>
                                <option value="Vermont">Vermont</option>
                                <option value="Virginia">Virginia</option>
                                <option value="Washington">Washington</option>
                                <option value="Washington DC">Washington DC</option>
                                <option value="West Virginia">West Virginia</option>
                                <option value="Wisconsin">Wisconsin</option>
                                <option value="Wyoming">Wyoming</option>
                            </select>
                        </div>

                        <div className=" bg-mylime font-semibold text-m rounded-lg p-4 m-auto text-center">
                            <label className="p-3 text-m inline-flex text-center m-auto" htmlFor="filtertype"><span className="text-center px-2"><TbCircleNumber2 size={20} /></span>FILTER BY</label>
                            <br></br>
                            <select className="rounded-sm w-fit m-2 text-center text-s font-light h-7"
                                onChange={handleChange}
                                name="filtertype"
                                type="text"
                                value={formValues.filtertype}
                            >
                                <option value="">SELECT FILTER</option>
                                <option value="MONTH/SEASON">MONTH / SEASON</option>
                                <option value="CATEGORY">CATEGORY</option>
                                <option value="PRODUCE">SPECIFIC PRODUCE</option>
                            </select>
                            <input className="rounded-sm w-fit h-7 m-auto text-center text-s font-light"
                                onChange={handleChange}
                                name="query"
                                list={formValues.filtertype}
                                value={formValues.query}
                            >
                            </input>
                            <datalist id="MONTH/SEASON">
                                <option value="EARLY JANUARY"></option>
                                <option value="LATE JANUARY"></option>
                                <option value="EARLY FEBRUARY"></option>
                                <option value="LATE FEBRUARY"></option>
                                <option value="EARLY MARCH"></option>
                                <option value="LATE MARCH"></option>
                                <option value="EARLY APRIL"></option>
                                <option value="LATE APRIL"></option>
                                <option value="EARLY MAY"></option>
                                <option value="LATE MAY"></option>
                                <option value="EARLY JUNE"></option>
                                <option value="LATE JUNE"></option>
                                <option value="EARLY JULY"></option>
                                <option value="LATE JULY"></option>
                                <option value="EARLY AUGUST"></option>
                                <option value="LATE AUGUST"></option>
                                <option value="EARLY SEPTEMBER"></option>
                                <option value="LATE SEPTEMBER"></option>
                                <option value="EARLY OCTOBER"></option>
                                <option value="LATE OCTOBER"></option>
                                <option value="EARLY NOVEMBER"></option>
                                <option value="LATE NOVEMBER"></option>
                                <option value="EARLY DECEMBER"></option>
                                <option value="LATE DECEMBER"></option>
                            </datalist>
                            <datalist id="CATEGORY">
                                <option value="FRUIT"></option>
                                <option value="VEGETABLE"></option>
                                <option value="HERB"></option>
                                <option value="LEGUME"></option>
                                <option value="NUT"></option>
                            </datalist>

                        </div>

                    </form>
                    <div className="p-3 text-center bg-lightblue w-[90vw] m-[auto] h-[80vh] rounded-lg my-5 overflow-scroll">
                        <h3 className="font-light text-3xl" >What's in season: <span className="underline font-semibold">{formValues.location.toUpperCase()}</span></h3>

                        <div className="grid grid-cols-3 p-8 rounded-lg w-[90vw] text-center gap-4">
                            {filtered == [] ? <div className="col-span-3"><h1>Sorry! We don't have to have any search results for that.</h1></div> :
                                filtered.map((snack) => {
                                    return (

                                        <div className="w-[25vw] p-3 bg-slate-100 rounded-lg shadow-lg hover:scale-105" key={snack.id} >
                                            <img className="p-2 h-[25vw] w-[25vw] object-cover m-auto border-4 border-gray-300" src={snack.image_url} />
                                            <div className="flex justify-between">
                                            <h1 className="text-m px-3 pt-2 font-semibold tracking-widest text-left">{snack.name}</h1>
                                            {user && auth? <button className="p-1 mt-2 rounded-lg bg-slate-300 hover:scale-110" onClick={() => navToNote(snack.id)}><TbNote size={20}/></button> :null}
                                            </div>
                                            <div onClick={()=>handleDetail(snack.id)}><ProduceDetail/></div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>

                </div>

            </div>
        )
    }
}