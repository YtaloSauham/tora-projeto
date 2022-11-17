import { Logo } from "./Logo";
import {List, X} from "phosphor-react"

import { useState } from 'react';
import Link from "next/link";

interface links{
    name: string;
    link: string;
}

export default function NavBar() {
    let links:Array<links> =[
        {name:"Pagina Inicial", link:"/"},
        {name:"Tutoriais", link:"/Tutoriais"},
        {name:"Sobre Nós", link:"/Sobre"},
        {name:"Codigo Fonte", link:"https://github.com/YtaloSauham/tora-projeto"}
    ]

    let [open, setOpen] = useState(false);


  return (
    <div className=" shadow-md w-full fixed top-0 left-0 ">
        <div className="  md:flex items-center justify-between  bg-blue-300  py-4 md:px-10 px-7 ">
            <div className=" flex font-bold text-2xl cursor-pointer items-center text-white-300 ">
                <span className="text-3xl mr-1 pt-2 mb-1 max-w-[640px]">
                    <Link href='/' className=""><Logo/></Link>
                </span>
    
            </div>

            <div className="text-3xl absolute right-8 text-white-300 top-6 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
                {open ? <X/> : <List/>
                }
                

            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static 
            bg-blue-300 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all 
            duration-500 ease-in ${open ? 'top-20 opacity-100': 'top-[-490px]'} md:opacity-100 `}>
                {
                    links.map((link,index)=>{
                        return(
                        <li key={index} className="text-white-400 md:ml-8 md:my-0 my-7 hover:text-blue-500">
                            
                           
                            <a href={link.link} title={link.name}>{link.name}</a>
                        </li> 
                        )
                       
                    })
                }
            </ul>

        </div>
    </div>
   
  )
}