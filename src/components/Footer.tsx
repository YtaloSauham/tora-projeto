import { Logo } from "./Logo";

export default function Footer(){
    
    return(
        <footer className=" p-4 mt-8 bg-blue-300 min-h-[420px] static left-0 bottom-0 w-full sm:p-6  ">
        <div className="container mt-8 mx-auto md:grid md:grid-cols-3 sm:grid grid-col-1 gap-9 text-center ">
            <div className=" mb-6 md:mb-0 ">
                <a href="#" className=" mr-3 h-8 flex sm:items-center justify-center">
                    <Logo/>
                </a>
            </div>
            <div className="md:grid gap-6 grid-cols-3  ">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-white-300 uppercase ">Tutoriais</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="/IniciarTora" className="hover:underline">Como iniciar o TORA</a>
                        </li>
                        <li className="mb-4">
                            <a href="/Conceitos" className="hover:underline">Conceitos de PO</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-5 text-sm font-semibold text-white-300 uppercase dark:text-white">Criadores</h2>
                    <ul className="text-gray-600 dark:text-gray-400">
                        <li className="mb-4">
                            <a href="/Sobre" className="hover:underline">Sobre Nós</a>
                        </li>
                    </ul>
                </div>
                <div>
                </div>
            </div>
        <div className="col-start-1 col-end-4">
            <hr/>
            <span className="text-sm text-gray-500 sm:text-center text-gray-500">© 2022 <a href="" className="hover:underline">TORA</a>. All Rights Reserved.
            </span>
        </div>
        </div>
    </footer>

    )
}