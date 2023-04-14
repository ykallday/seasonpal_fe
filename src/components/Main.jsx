import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'
import Note from './Note'
import Resources from './Resources'
import Search from './Search'
import SearchResults from './SearchResults'
import Suggestion from './Suggestion'
import Contact from './Contact'
import ProfileChange from './ProfileChange'
import MyNotes from './MyNotes'
import NoteDetail from './NoteDetail'
import NoteEdit from './NoteEdit'
import {Route, Routes} from 'react-router-dom'

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path = "/" element={<Home/>}/>
                <Route path = "login/" element={<Login/>}/>
                <Route path = "register/" element={<Register/>}/>
                <Route path = "profile/" element={<Profile/>}/>
                <Route path = "profile/change/:id" element={<ProfileChange/>}/>
                <Route path = "note/:produceid" element={<Note/>}/>
                <Route path = "search/note/:produceid" element={<Note/>}/>
                <Route path = "mynotes" element={<MyNotes/>}/>
                <Route path = "mynotes/:noteid" element={<NoteDetail/>}/>
                <Route path = "mynotes/edit/:noteid" element={<NoteEdit/>}/>
                <Route path = "resources/" element={<Resources/>}/>
                <Route path = "search/" element={<Search/>}/>
                <Route path = "searchresults/" element={<SearchResults/>}/>
                <Route path = "suggestion/" element={<Suggestion/>}/>
                <Route path = "contact/" element={<Contact/>}/>
                <Route path = "logout/" element={<Home/>}/>
            </Routes>
        </div>
    )
}