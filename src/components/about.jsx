import { useEffect, useState } from "react";

function About(){

    const[textContent,setTextContent]=useState();
    
    useEffect(()=>{
     fetch('src/assets/about.txt').then((res)=>res.text()
     .then((text)=>setTextContent(text))).catch((err)=>setTextContent('err fetching text'));
    },[])

    //getting random quotes
    const getQuote=(()=>{
        console.log('ok')
    })

    return (
        <div className="flex flex-col lg:w-1/2 lg:mx-auto my-14 gap-5 font-fredoka md:mx-10 mx-4">
            <h3 className="md:text-4xl text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-semibold">ABOUT ME</h3>
            <div className="about-text md:text-xl leading-relaxed border-l-2 border-b-2 border-zinc-400 p-3 rounded-bl-lg">
                {textContent}
            </div>
            <div className="about-buttons flex md:text-xl gap-5 ">
                <button className="flex gap-2 items-center md:p-2 p-1 border-zinc-300 border-2 hover:bg-zinc-700" onClick={()=>{
                    window.location.href='https://github.com/Ab369'
                }}>Github <span><img src="src\assets\github.png" className="md:w-8 w-6"/></span></button>

                <button className="p-2 border-zinc-300 border-2 hover:bg-zinc-700" onClick={()=>{
                    getQuote();
                }}>Get Inspired!</button>
            </div>
        </div>
    )
}

export default About;