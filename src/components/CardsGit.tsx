import { GithubLogo } from "phosphor-react";

export default function CardsGit(){
    return(

        <div className="container flex grid h-[20rem] mx-auto mt-20 text-black">
            <div className="grid ">
                <div className="text-3xl font-bold ">
                Equipe
                    <div className="grid grid-cols-1">
                    <div className="flex items-center gap-4 mt-6">
                                <img className="h-20 w-20 rounded-full border border-blue-500"
                                src={"https://avatars.githubusercontent.com/u/85992772?v=4"}
                                alt=""
                                />
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">Ytalo</strong>
                                    <span className="text-black-200 text-sm block">Criador do Site</span>
                                    <span className="text-white-300 bg-black h-[30px] rounded-md text-sm flex items-center justify-center"><a className="flex"><GithubLogo size={20}/> GIT</a></span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-6">
                                <img className="h-20 w-20 rounded-full border border-blue-500"
                                src={"https://avatars.githubusercontent.com/u/85992772?v=4"}
                                alt=""
                                />
                                <div className="leading-relaxed">
                                    <strong className="font-bold text-2xl block">Ytalo</strong>
                                    <span className="text-black-200 text-sm block">Criador do Site</span>
                                    <span className="text-white-300 bg-black h-[30px] rounded-md text-sm flex items-center justify-center"><a className="flex"><GithubLogo size={20}/> GIT</a></span>
                                </div>
                            </div>
                    </div>
                </div>

                <div>
                hello
                    
                </div>

                <div>
                hello
                    
                </div>

            </div>
        </div>

          

   
       


 
                            
    )
}