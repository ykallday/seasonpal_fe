import banner from '../assets/refbanner.png'

export default function Resources (){
    return(
        <div className="bg-white">
        <div className="w-[100vw] h-[30vh] flex justify-center bg-mygreen mt-1">
            <img className = "h-[25vh]" src={banner}/>
        </div>
        <div className="flex flex-cols pt-10 bg-white justify-center p-5 text-justify">
            <div className="w-[50vw] p-5">
            <h3>This website was created with the intention of making seasonal eating feel less like work!</h3>
            <img src = "https://cdn.dribbble.com/users/2054184/screenshots/4885841/media/8dc03a0c6d0b839db02e59b440eb1e6d.gif"/> <span>and a little more like FUN! </span> <img src="https://cdn.pixabay.com/animation/2023/02/11/17/56/17-56-09-296_512.gif"/>
            <h5>Not only does eating seasonally mean you'll get the most delicious and nutritious produce around, but you could also be helping your local community of farmers, and doing some good for the environment!</h5>
        </div>
       
        </div>
        <div className="bg-lightblue p-5 text-center mt-10">
            <h1>This is where user generated suggestions may appear!</h1>
         </div>
        </div>
    )
}