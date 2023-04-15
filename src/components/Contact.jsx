import { useNavigate } from 'react-router-dom'


export default function Contact() {
    let navigate = useNavigate()
    const navBack = () => {
        navigate(-1)
    }
    return (
        <div className="bg-white text-center p-4">
            <button className=" hover:scale-105 p-2 rounded-lg bg-pink-200" onClick={navBack}><h5 className=" text-center text-xs font-semibold uppercase">Back</h5></button>
            <h1 className="font-didot text-3xl flex justify-center tracking-wider my-5">Contact Me</h1>
            <h2 className="text-xs flex justify-center tracking-wider mb-3">Looking to get in touch? </h2>
            <h3>Connect with me on <a className="text-blue-500" href="http://www.github.com/ykallday">GitHub</a>, or <a className="text-blue-500" href="mailto:ylkauf@gmail.com">send me an email</a> </h3>
        </div>
    )
}