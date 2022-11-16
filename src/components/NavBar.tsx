import { Logo } from "./Logo";

export default function NavBar() {
    let links = [
        {name:""}
    ]


  return (
    <nav className="shadow-md w-full fixed top-0 left-0">
        <div className=" md:flex bg-blue-300 py-4">
            <div className="font-bold text-2xl cursor-pointer items-center text-white-300">
                <span className="text-3xl mr-1 pt-2">
                <Logo/>
                </span>
    
            </div>
            <ul>
            <li></li>
            <li></li>
            <li></li>
            </ul>

        </div>
    </nav>
   
  )
}